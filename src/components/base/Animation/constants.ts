export enum MaskVariant {
  LEFT_ISLAND = "leftIsland",
  MIDDLE_ISLAND = "middleIsland",
  RIGHT_ISLAND = "rightIsland",
  LIGHTHOUSE = "lighthouse",
  E7_BUILDING = "e7Building",
  SPONSOR_ARM = "sponsorArm",
}

export interface TextureProps {
  texture?: string; // url to texture mask asset
  mask?: MaskVariant; // color mask + gradient overlay to apply for ripples
}

export type MaskProperties = {
  maskImage: string;
  filter: string;
};

export const maskVariants: { [color in MaskVariant]: MaskProperties } = {
  leftIsland: {
    maskImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 90%)",
    filter:
      "brightness(0) saturate(100%) invert(88%) sepia(15%) saturate(272%) hue-rotate(168deg) brightness(95%) contrast(94%)",
  },
  middleIsland: {
    maskImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0) 90%)",
    filter:
      "invert(58%) sepia(2%) saturate(5930%) hue-rotate(58deg) brightness(110%) contrast(58%)",
  },
  rightIsland: {
    maskImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 90%)",
    filter:
      "invert(58%) sepia(2%) saturate(5930%) hue-rotate(58deg) brightness(110%) contrast(58%)",
  },
  lighthouse: {
    maskImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 90%)",
    filter:
      "brightness(0) saturate(100%) invert(88%) sepia(15%) saturate(272%) hue-rotate(168deg) brightness(95%) contrast(94%)",
  },
  e7Building: {
    maskImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0) 90%)",
    filter:
      "invert(58%) sepia(2%) saturate(5930%) hue-rotate(58deg) brightness(110%) contrast(58%)",
  },
  sponsorArm: {
    maskImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0) 90%)",
    filter:
      "invert(58%) sepia(2%) saturate(5930%) hue-rotate(58deg) brightness(110%) contrast(58%)",
  },
};
