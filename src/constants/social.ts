import { IconName } from "src/components/base/Icon";

export enum SocialPlatforms {
  INSTA = "Instagram",
  FACEBOOK = "Facebook",
  TWITTER = "Twitter",
  LINKEDIN = "LinkedIn",
  TIKTOK = "TikTok",
  MEDIUM = "Medium",
}

type TSocialInfo = {
  icon: IconName;
  link: string;
  fathomEventCode: string;
};

export const SOCIALS: Record<SocialPlatforms, TSocialInfo> = {
  [SocialPlatforms.INSTA]: {
    icon: "instagram",
    link: "https://www.instagram.com/hackthenorth",
    fathomEventCode: "LX6A0MAL",
  },
  [SocialPlatforms.TWITTER]: {
    icon: "twitter",
    link: "https://twitter.com/hackthenorth",
    fathomEventCode: "XMBYPYVQ",
  },
  [SocialPlatforms.FACEBOOK]: {
    icon: "facebook",
    link: "https://www.facebook.com/hackthenorth/",
    fathomEventCode: "N8KZMCWY",
  },
  [SocialPlatforms.LINKEDIN]: {
    icon: "linkedin",
    link: "https://www.linkedin.com/company/hack-the-north",
    fathomEventCode: "3ADUIO8D",
  },
  [SocialPlatforms.TIKTOK]: {
    icon: "tiktok",
    link: "https://www.tiktok.com/@hackthenorth",
    fathomEventCode: "YF125KX9",
  },
  [SocialPlatforms.MEDIUM]: {
    icon: "medium",
    link: "https://hackthenorth.medium.com/",
    fathomEventCode: "K5RP1B2Z",
  },
};
