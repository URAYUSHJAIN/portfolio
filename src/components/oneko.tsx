"use client";

import { useEffect } from "react";

const FRAME_SIZE = 32;
const HALF_FRAME = FRAME_SIZE / 2;
const NEKO_SPEED = 10;
const FRAME_INTERVAL_MS = 100;
const START_POSITION = 32;

const SPRITE_SETS = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratch: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],
  tired: [[-3, -2]],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ],
  N: [
    [-1, -2],
    [-1, -3],
  ],
  NE: [
    [0, -2],
    [0, -3],
  ],
  E: [
    [-3, 0],
    [-3, -1],
  ],
  SE: [
    [-5, -1],
    [-5, -2],
  ],
  S: [
    [-6, -3],
    [-7, -2],
  ],
  SW: [
    [-5, -3],
    [-6, -1],
  ],
  W: [
    [-4, -2],
    [-4, -3],
  ],
  NW: [
    [-1, 0],
    [-1, -1],
  ],
} as const;

type SpriteName = keyof typeof SPRITE_SETS;
type IdleAnimationName = "sleeping" | "scratch";

export function Oneko() {
  useEffect(() => {
    const existingNeko = document.getElementById("oneko");
    if (existingNeko) {
      existingNeko.remove();
    }

    const nekoEl = document.createElement("div");
    nekoEl.id = "oneko";
    nekoEl.style.width = `${FRAME_SIZE}px`;
    nekoEl.style.height = `${FRAME_SIZE}px`;
    nekoEl.style.position = "fixed";
    nekoEl.style.backgroundImage = "url('/oneko.gif')";
    nekoEl.style.backgroundRepeat = "no-repeat";
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.left = "16px";
    nekoEl.style.top = "16px";
    nekoEl.style.pointerEvents = "none";
    nekoEl.style.zIndex = "2147483647";

    document.body.appendChild(nekoEl);

    let nekoPosX = START_POSITION;
    let nekoPosY = START_POSITION;
    let mousePosX = window.innerWidth / 2;
    let mousePosY = window.innerHeight / 2;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: IdleAnimationName | null = null;
    let idleAnimationFrame = 0;

    const setSprite = (name: SpriteName, frame: number) => {
      const spriteSet = SPRITE_SETS[name];
      const sprite = spriteSet[frame % spriteSet.length];

      nekoEl.style.backgroundPosition = `${sprite[0] * FRAME_SIZE}px ${
        sprite[1] * FRAME_SIZE
      }px`;
    };

    setSprite("idle", 0);

    const resetIdleAnimation = () => {
      idleAnimation = null;
      idleAnimationFrame = 0;
    };

    const idle = () => {
      idleTime += 1;

      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation === null) {
        idleAnimation = Math.random() < 0.5 ? "sleeping" : "scratch";
      }

      switch (idleAnimation) {
        case "sleeping": {
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }

          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) {
            resetIdleAnimation();
          }
          break;
        }
        case "scratch": {
          setSprite("scratch", idleAnimationFrame);
          if (idleAnimationFrame > 9) {
            resetIdleAnimation();
          }
          break;
        }
        default:
          setSprite("idle", 0);
          return;
      }

      idleAnimationFrame += 1;
    };

    const frame = () => {
      frameCount += 1;

      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < NEKO_SPEED || distance < 48) {
        idle();
        return;
      }

      resetIdleAnimation();

      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      const vertical = diffY / distance > 0.5 ? "N" : diffY / distance < -0.5 ? "S" : "";
      const horizontal = diffX / distance > 0.5 ? "W" : diffX / distance < -0.5 ? "E" : "";
      const direction = ((vertical + horizontal) || "E") as SpriteName;

      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * NEKO_SPEED;
      nekoPosY -= (diffY / distance) * NEKO_SPEED;

      nekoEl.style.left = `${nekoPosX - HALF_FRAME}px`;
      nekoEl.style.top = `${nekoPosY - HALF_FRAME}px`;
    };

    const updatePointerPosition = (x: number, y: number) => {
      mousePosX = x;
      mousePosY = y;
    };

    const handleMouseMove = (event: MouseEvent) => {
      updatePointerPosition(event.clientX, event.clientY);
    };

    const handlePointerMove = (event: PointerEvent) => {
      updatePointerPosition(event.clientX, event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    const intervalId = window.setInterval(frame, FRAME_INTERVAL_MS);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointermove", handlePointerMove);
      window.clearInterval(intervalId);
      nekoEl.remove();
    };
  }, []);

  return null;
}
