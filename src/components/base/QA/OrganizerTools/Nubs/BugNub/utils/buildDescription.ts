import { UAParser } from "ua-parser-js";

const UNKNOWN = "<unknown>";

export const buildDescription = (
  userDescription: string,
  images: { url: string }[],
  reporter: string
) => {
  const userAgent = new UAParser();
  const { name: browserName = UNKNOWN, version: browserVersion = UNKNOWN } =
    userAgent.getBrowser();
  const {
    model: deviceModel = UNKNOWN,
    type: deviceType = UNKNOWN,
    vendor: deviceVendor = UNKNOWN,
  } = userAgent.getDevice();
  const { name: engineName = UNKNOWN, version: engineVersion = UNKNOWN } =
    userAgent.getEngine();
  const { name: osName = UNKNOWN, version: osVersion = UNKNOWN } =
    userAgent.getOS();
  const { href: url = UNKNOWN } = window.location;
  const { clientWidth: width = UNKNOWN, clientHeight: height = UNKNOWN } =
    document.documentElement;

  const description = `
### Description
${userDescription}

### Dev Notes

### Attachments
${images.map(({ url }) => `<img src="${url}" />`)}

### Details
Reporter: ${reporter}
Path: ${url}
Screen: ${width}w x ${height}h
Browser: ${browserName} (v${browserVersion})
Device: ${deviceVendor} ${deviceModel} (${deviceType || "Unknown"})
Engine: ${engineName} (v${engineVersion})
OS: ${osName} (v${osVersion})
  `;

  return description;
};
