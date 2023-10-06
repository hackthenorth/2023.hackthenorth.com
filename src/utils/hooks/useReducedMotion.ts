import { useState, useEffect } from "react";

import { useMounted } from "./useMounted";

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const mounted = useMounted();

  useEffect(() => {
    if (mounted) {
      const mediaQueryList = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );
      setPrefersReducedMotion(mediaQueryList.matches);

      const listener = () => {
        setPrefersReducedMotion(mediaQueryList.matches);
      };
      try {
        // Chrome & Firefox
        mediaQueryList.addEventListener("change", listener);
        return () => {
          mediaQueryList.removeEventListener("change", listener);
        };
      } catch (e1) {
        try {
          // Safari
          mediaQueryList.addListener(listener);
          return () => {
            mediaQueryList.removeListener(listener);
          };
        } catch (e2) {
          console.error(e2);
        }
      }
    }
  }, [mounted]);
  return prefersReducedMotion;
}
