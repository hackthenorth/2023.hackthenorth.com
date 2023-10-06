import { deviceBreakpoints, DeviceType } from "src/constants/deviceBreakpoints";

import { useWindowSize } from "./useWindowSize";

/**
 * A hook to determine the type of device the app is running on, based on the screen size.
 * @returns whether or not the screen is of type `device` or a list of all possible devices sorted descending by size
 */
export function useDeviceSize(device: DeviceType): boolean | undefined;
export function useDeviceSize(width: number): boolean | undefined;
export function useDeviceSize(): DeviceType[] | undefined;
export function useDeviceSize(
  deviceOrWidth?: DeviceType | number
): boolean | DeviceType[] | undefined {
  const { windowWidth } = useWindowSize();

  if (windowWidth === undefined) {
    return windowWidth;
  }

  if (typeof deviceOrWidth === "number") {
    const width = deviceOrWidth;
    return windowWidth <= width;
  }

  if (deviceOrWidth) {
    const device = deviceOrWidth;
    return windowWidth <= deviceBreakpoints[device];
  }

  return Object.entries(deviceBreakpoints)
    .filter(([, width]) => width <= windowWidth)
    .map(([device]) => device) as DeviceType[];
}
