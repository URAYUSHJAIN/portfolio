"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export const ModeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);

    if (!event.defaultPrevented) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  if (!mounted) {
    // Return a consistent button during SSR
    return (
      <Button
        ref={ref}
        variant="ghost"
        type="button"
        size="icon"
        className={cn("px-2", className)}
        {...props}
        onClick={onClick}
        aria-label={props["aria-label"] ?? "Toggle theme"}
      >
        <SunIcon 
          className="h-[1.2rem] w-[1.2rem] text-neutral-800" 
          aria-hidden="true"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className={cn("px-2", className)}
      {...props}
      onClick={handleClick}
      aria-label={props["aria-label"] ?? `Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <SunIcon 
        className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" 
        aria-hidden="true"
      />
      <MoonIcon 
        className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" 
        aria-hidden="true"
      />
      <span className="sr-only">
        {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </Button>
  );
});

ModeToggle.displayName = "ModeToggle";