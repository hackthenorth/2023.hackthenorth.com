import { ArianneImg, DerrickImg, JaivalImg, LucasImg } from "src/assets/img";
import { theme } from "src/styles";

interface Story {
  name: string;
  testimonial: string;
  image: HTMLImageElement;
  alt: string;
  color: string;
}

export const HackerTestimonialsCopy: Story[] = [
  {
    name: "Lucas Mannarino, Beginner Hacker",
    testimonial:
      "Three Brazilian medical students with zero coding experience walk into a bar… One says to the others “We should program something!” — no, this is not a joke. It’s actually how I and my friends ended up participating in HackTheNorth 2022. Our journey went from learning how to download and run Python, all the way to coding a working program with two NLPs (with the help of some amazing people and APIs, of course), all during three [very intense] days of the event!",
    image: LucasImg,
    alt: "Hacker story image for Lucas",
    color: theme.colors.primary.cyan,
  },
  {
    name: "Arianne Ghislaine, Beginner Hacker",
    testimonial:
      "Hack the North was an unforgettable experience, providing me with incredible access to resources and connections that I would never have been able to acquire on my own. Collaborating with individuals from diverse backgrounds and skill sets was enriching, and learning from experienced mentors and industry leaders was invaluable. Working on a project and receiving feedback from professionals allowed me to take my skills to the next level, giving me the confidence to tackle even more ambitious projects in the future. Overall, Hack the North was truly transformative, and I'm excited to see where these connections and skills will take me next!",
    image: ArianneImg,
    alt: "Hacker story image for Arianne",
    color: theme.colors.primary.pink,
  },
  {
    name: "Derrick Ha, Beginner Hacker",
    testimonial:
      "Hack the North was an absolute blast. Working on my project alongside my team was super fun, and I learned so much from the various workshops offered. While learning new concepts from React to web3 was fun, the things I’ll remember for the longest will be the funny moments I shared with other hackers. E7 was one of the coolest buildings I’ve ever been in, the place where the most shenanigans happened. Fun activities such as late night poutine & socials made for funny moments, such as spilling ramen all over my white shirt and then taking a late night walk at 4AM with my new friends from the hackathon. Overall, this experience taught me so much especially as a high school student, and I would wholeheartedly recommend applying for this year’s iteration!",
    image: DerrickImg,
    alt: "Hacker story image for Derrick",
    color: theme.colors.primary.orange,
  },
  {
    name: "Jaival Patel, Experienced Hacker",
    testimonial:
      "My recent memorable moment is when I became a finalist at Hack The North last year. As my group and I were presenting our web3 investment platform, two out of the three judges were confused about our project. However, the third judge absolutely loved our project. While my group and I were mourning about how “bad” our presentation was at lunch, one of the judges from the panel came up to us and said “Congratulations.” At first, my group and I were confused. A few hours later, my teammate got a call from Hack The North saying we became finalists! This moment was the happiest moment of our lives as we were preparing for Hack The North for over a year to present in front of all of the University of Waterloo. After our presentation in the closing ceremonies, all of the judges once again congratulated us. Our project gaining so much attention opened a wide range of opportunities in the tech industry, and was a massive inspiration for us to keep innovating for society!",
    image: JaivalImg,
    alt: "Hacker story image for Jaival",
    color: theme.colors.primary.yellow,
  },
];
