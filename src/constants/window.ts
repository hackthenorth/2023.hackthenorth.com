export const isTouchOrStylusBasedScreen =
  typeof window !== "undefined"
    ? window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
      window.matchMedia("(hover: none) and (pointer: fine)").matches
    : false;
