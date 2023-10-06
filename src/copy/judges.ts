import {
  AdvaitImg,
  AlroyImg,
  AndrewZhouImg,
  DanielleImg,
  FreemanImg,
  HenryImg,
  IvanJudgeImg,
  JacobWillemsmaImg,
  JenImg,
  KartikImg,
  KevinLauImg,
  LeonJudgeImg,
  LiamImg,
  MichaelImg,
  MikeImg,
  NabilImg,
  PeihongLiImg,
  PierreArysImg,
  PuryaImg,
  RalphImg,
  RohanImg,
  SurajGuptaImg,
  UmeshImg,
  ValentinTsatskinImg,
  VartikaManasviImg,
  VishalMathurImg,
} from "../assets/img";

export type SpeakerProfile = {
  imgUrl: string;
  name: string;
  description: string;
  bio: string;
};

export const SPEAKERS_SET: SpeakerProfile[] = [
  {
    imgUrl: KartikImg,
    name: "Kartik Talwar",
    description: "Partner, a_capital",
    bio: "Kartik is a partner at a_capital where he focuses on technical investments. He has led and originated investments in over 80 web3 companies including Coinbase, Uniswap, Optimism, OpenSea, and CryptoKitties. A software developer by trade, he is also an active contributor to various open source projects and helped start ETHGlobal — the leading initiative to bring developers into web3. Kartik holds a degree in Astrophysics from the University of Waterloo.",
  },
  {
    imgUrl: LiamImg,
    name: "Liam Horne",
    description: "Co-founder, ETHGlobal",
    bio: "Liam Horne has founded or led multiple companies supporting the growth of Ethereum including Optimism — a pioneer in scalable blockchain architectures — and ETHGlobal, the leading initiative to bring developers into web3. Prior to working on Ethereum, Liam had been the CTO of PiinPoint (YC W14). He grew up in Canada, and dropped out of the Computer Science program at the University of Waterloo to accept the Thiel Fellowship.",
  },
  {
    imgUrl: KevinLauImg,
    name: "Kevin Lau",
    description: "Founding Product Manager, Tome",
    bio: "Kevin is a product manager and content creator, who has led product teams at Uber, Instacart, and most recently Tome, a series B startup building a generative-AI powered storytelling tool. Kevin also co-hosts a podcast called Vulnerability Junkies which focuses on emotional intelligence and communication, and has an extremely neglected YouTube channel. Kevin holds a BASc in Systems Design Engineering from the University of Waterloo.",
  },
];

export type JudgeProfile = {
  imgUrl: string;
  name: string;
  description: string;
};

export const JUDGES_SET: JudgeProfile[] = [
  {
    imgUrl: AdvaitImg,
    name: "Advait Maybhate",
    description: "Software Engineer, Warp",
  },
  {
    imgUrl: AlroyImg,
    name: "Alroy Almeida",
    description: "Director, Velocity",
  },
  {
    imgUrl: AndrewZhouImg,
    name: "Andrew Zhou",
    description: "Co-founder, Copilot",
  },
  {
    imgUrl: DanielleImg,
    name: "Danielle Strachman",
    description: "Co-founder and GP, 1517 Fund",
  },
  {
    imgUrl: FreemanImg,
    name: "Freeman Jiang",
    description: "Co-founder and CTO, Agora Labs",
  },
  {
    imgUrl: HenryImg,
    name: "Henry Shi",
    description: "Co-founder, Super.com",
  },
  {
    imgUrl: IvanJudgeImg,
    name: "Ivan Zhang",
    description: "Co-founder, Cohere",
  },
  {
    imgUrl: JacobWillemsmaImg,
    name: "Jacob Willemsma",
    description: "Engineering Lead, Lighter",
  },
  {
    imgUrl: JenImg,
    name: "Jen Dewalt",
    description: "Founder, Zube",
  },
  {
    imgUrl: LeonJudgeImg,
    name: "Leon Si",
    description: "Co-founder, Tunnel",
  },
  {
    imgUrl: MichaelImg,
    name: "Michael Gibson",
    description: "Co-founder and GP, 1517 Fund",
  },
  {
    imgUrl: MikeImg,
    name: "Mike Kirkup",
    description: "CTO, EnPowered",
  },
  {
    imgUrl: NabilImg,
    name: "Nabil Fahel",
    description: "VP Partnerships, StartupSoft",
  },
  {
    imgUrl: PeihongLiImg,
    name: "Peihong Li",
    description: "Co-founder, Venue.live and Hack the 6ix",
  },
  {
    imgUrl: PierreArysImg,
    name: "Pierre Arys",
    description: "Partner, Cherubic Ventures",
  },
  {
    imgUrl: PuryaImg,
    name: "Purya Sarmadi",
    description: "Co-founder and CEO, MedMe Health",
  },
  {
    imgUrl: RalphImg,
    name: "Ralph Hempel",
    description: "Senior Manager, LEGO",
  },
  {
    imgUrl: RohanImg,
    name: "Rohan Sampath",
    description: "Co-founder and CEO, Copilot",
  },
  {
    imgUrl: SurajGuptaImg,
    name: "Suraj Gupta",
    description: "Software Engineer, Warp",
  },
  {
    imgUrl: UmeshImg,
    name: "Umesh Khanna",
    description: "Product Lead, Middesk",
  },
  {
    imgUrl: ValentinTsatskinImg,
    name: "Valentin Tsatskin",
    description: "Co-founder, Hack the North",
  },
  {
    imgUrl: VartikaManasviImg,
    name: "Vartika Manasvi",
    description: "Serial Entrepreneur, MaRS and Communitech",
  },
  {
    imgUrl: VishalMathurImg,
    name: "Vishal Mathur",
    description: "Product Manager, Magic Labs",
  },
];
