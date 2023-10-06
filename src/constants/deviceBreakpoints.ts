export type DeviceType =
  | "large"
  | "medium"
  | "tablet"
  | "largeMobile"
  | "mobile"
  | "smallMobile";

/**
 * Maximum widths in px for a screen
 * to be considered each type of
 * device.
 */
export const deviceBreakpoints: Record<DeviceType, number> = {
  large: 1440,
  medium: 1024,
  tablet: 834,
  largeMobile: 425,
  mobile: 375,
  smallMobile: 320,
};
