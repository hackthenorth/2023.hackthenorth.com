import tw from "twin.macro";
import { TwStyle } from "twin.macro";

export type TStatBar = {
  num: string;
  text: string;
  style: TwStyle;
  height: number;
  tabletHeight: number;
  offset: number;
  offsetText: boolean;
};

export const STATS_SET: TStatBar[] = [
  {
    num: "30",
    text: "WORKSHOPS",
    style: tw`bg-secondary-green`,
    height: 240,
    tabletHeight: 160,
    offset: -40,
    offsetText: true,
  },
  {
    num: "2,900",
    text: "HOURS TRAVELLED",
    style: tw`bg-primary-blue1`,
    height: 240,
    tabletHeight: 150,
    offset: 60,
    offsetText: true,
  },
  {
    num: "295",
    text: "SCHOOLS",
    style: tw`bg-secondary-yellow`,
    height: 220,
    tabletHeight: 150,
    offset: 10,
    offsetText: true,
  },
  {
    num: "30",
    text: "COUNTRIES",
    style: tw`bg-secondary-pink`,
    height: 160,
    tabletHeight: 100,
    offset: 0,
    offsetText: true,
  },
  {
    num: "220",
    text: "MENTORS",
    style: tw`bg-secondary-green`,
    height: 320,
    tabletHeight: 225,
    offset: -48,
    offsetText: false,
  },
  {
    num: "550",
    text: "PROJECTS SUBMITTED",
    style: tw`bg-secondary-pink`,
    height: 320,
    tabletHeight: 205,
    offset: 20,
    offsetText: true,
  },
  {
    num: "3000",
    text: "HACKERS",
    style: tw`bg-secondary-yellow`,
    height: 220,
    tabletHeight: 150,
    offset: -80,
    offsetText: true,
  },
];

export const MOBILE_STATS_SET: TStatBar[][] = [
  [
    {
      num: "30",
      text: "COUNTRIES",
      style: tw`bg-secondary-pink`,
      height: 130,
      tabletHeight: 0,
      offset: 0,
      offsetText: true,
    },
    {
      num: "295",
      text: "SCHOOLS",
      style: tw`bg-secondary-yellow`,
      height: 200,
      tabletHeight: 0,
      offset: 0,
      offsetText: true,
    },
    {
      num: "30",
      text: "SPONSORS",
      style: tw`bg-secondary-pink`,
      height: 185,
      tabletHeight: 0,
      offset: 0,
      offsetText: false,
    },
  ],
  [
    {
      num: "2,900",
      text: "HOURS TRAVELLED",
      style: tw`bg-primary-blue1`,
      height: 200,
      tabletHeight: 0,
      offset: 0,
      offsetText: true,
    },
    {
      num: "3,000",
      text: "HACKERS",
      style: tw`bg-secondary-yellow`,
      height: 110,
      tabletHeight: 0,
      offset: 0,
      offsetText: false,
    },
    {
      num: "550",
      text: "PROJECTS SUBMITTED",
      style: tw`bg-primary-blue1`,
      height: 250,
      tabletHeight: 0,
      offset: 0,
      offsetText: true,
    },
  ],
  [
    {
      num: "220",
      text: "MENTORS",
      style: tw`bg-secondary-green`,
      height: 390,
      tabletHeight: 0,
      offset: 0,
      offsetText: false,
    },
    {
      num: "30",
      text: "WORKSHOPS",
      style: tw`bg-secondary-green`,
      height: 200,
      tabletHeight: 0,
      offset: 0,
      offsetText: true,
    },
  ],
];
