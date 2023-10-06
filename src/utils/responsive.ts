export type TDeviceType =
  | "large"
  | "medium"
  | "tablet"
  | "largeMobile"
  | "mobile"
  | "smallMobile";

/**
 * Maximum widths in px for a screen to be considered each type of device.
 */
export const deviceBreakpoints: Record<TDeviceType, number> = {
  large: 1440,
  medium: 1024,
  tablet: 834,
  largeMobile: 430,
  mobile: 375,
  smallMobile: 320,
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const mediaQueries = {
  custom: customMediaQuery,
  large: customMediaQuery(deviceBreakpoints.large),
  medium: customMediaQuery(deviceBreakpoints.medium),
  tablet: customMediaQuery(deviceBreakpoints.tablet),
  largeMobile: customMediaQuery(deviceBreakpoints.largeMobile),
  mobile: customMediaQuery(deviceBreakpoints.mobile),
  smallMobile: customMediaQuery(deviceBreakpoints.smallMobile),
};
