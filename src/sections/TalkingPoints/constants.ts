import {
  CreateSomethingImg,
  GlobalCommunityImg,
  LastingMemoriesImg,
} from "src/assets/img";
import { theme } from "src/styles";

interface TalkingPoint {
  header: string;
  body: string;
  image: HTMLImageElement;
  alt: string;
  color: string;
}

export const TalkingPointsCopy: TalkingPoint[] = [
  {
    header: "Join a global community",
    body: "Connect with students from dozens of schools across the globe. Chat with industry leaders, sponsors, and mentors and open your mind to endless possibilities. We welcome hackers of all experience levels to collaborate and build something they are proud of.",
    image: GlobalCommunityImg,
    alt: "A group of smiling hackers high-fiving",
    color: theme.colors.primary.cyan,
  },
  {
    header: "Create something amazing",
    body: "Build anything you want. Don’t have the resources you need to make your project come to life? We’ll help you out. We provide workshops, career sessions, and the tech you need all in one place.",
    image: CreateSomethingImg,
    alt: "Hackers with their thumbs up building with hardware",
    color: theme.colors.primary.pink,
  },
  {
    header: "Make lasting memories",
    body: "Take a break from hacking and enjoy fun activities planned just for you! From cup stacking, to bubble soccer, to hypnosis shows, and more, we make sure that every hacker has the chance to play as hard as they work.",
    image: LastingMemoriesImg,
    alt: "A dancing group of hackers partying at the silent disco",
    color: theme.colors.primary.orange,
  },
];
