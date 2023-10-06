import { Variants } from "framer-motion";
import { SectionId } from "src/constants/section";

export const NAVBAR_HEIGHT_PX = 80;

export const NAVBAR_COLOR = "#141425";

export const WEBSITE2022URL = "https://2022.hackthenorth.com";

export interface NavBarProps {
  notMainPage?: boolean;
}

export const SECTIONS = {
  [SectionId.ABOUT]: "About",
  [SectionId.STORIES]: "Stories",
  [SectionId.SPONSORS]: "Sponsors",
  [SectionId.FAQ]: "FAQ",
};

export const mobileBackgroundVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100vw + 30px) -30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100vw + 30px) -30px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const mobileListVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const mobileItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
