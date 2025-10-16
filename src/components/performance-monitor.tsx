"use client";

import { useEffect } from "react";

export function PerformanceMonitor() {
  useEffect(() => {
    // Only in development
    if (process.env.NODE_ENV === "development") {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log(`${entry.name}: ${entry.duration || 'N/A'}ms`);
        });
      });
      
      try {
        observer.observe({ entryTypes: ["measure", "navigation"] });
      } catch (error) {
        // Performance Observer not supported
      }

      return () => observer.disconnect();
    }
  }, []);

  return null;
}