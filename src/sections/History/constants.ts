import {
  Year2014Img,
  Year2014AltImg,
  Year2015Img,
  Year2015AltImg,
  Year2016Img,
  Year2016AltImg,
  Year2017Img,
  Year2017AltImg,
  Year2018Img,
  Year2018AltImg,
  Year2019Img,
  Year2019AltImg,
  Year2020Img,
  Year2020AltImg,
  Year2021Img,
  Year2021AltImg,
  Year2022Img,
  Year2022AltImg,
} from "src/assets/img";

import { theme } from "../../styles";

interface YearImage {
  source: HTMLImageElement;
  orientation: string;
  top: {
    isMobile: string;
    isTablet: string;
    isMedium: string;
    isDesktop: string;
  };
  left: {
    isMobile: string;
    isTablet: string;
    isMedium: string;
    isDesktop: string;
  };
  order: number;
  alt: string;
}

export interface Year {
  year: string;
  gradientStart: string;
  gradientEnd: string;
  description: string[];
  top: {
    isMobile: string;
    isTablet: string;
    isMedium: string;
    isDesktop: string;
  };
  left: {
    isMobile: string;
    isTablet: string;
    isMedium: string;
    isDesktop: string;
  };
  order: number;
  images: YearImage[];
  fathomEventCode: string;
}

const _2014: Year = {
  year: "2014",
  gradientStart: theme.colors.primary.cyan,
  gradientEnd: theme.colors.primary.blue,
  description: [
    "Hack the North is founded by a group of undergraduate students at the University of Waterloo in Ontario, Canada. Thank you for 10 years of memories 💙",
    "Keynote Speakers: Chamath Palihapitiya, Jason Calacanis, & Sam Altman",
  ],
  top: {
    isMobile: "180px",
    isTablet: "-60px",
    isMedium: "-20px",
    isDesktop: "-25px",
  },
  left: {
    isMobile: "-183px",
    isTablet: "15px",
    isMedium: "15px",
    isDesktop: "0px",
  },
  order: 2,
  images: [
    {
      source: Year2014Img,
      orientation: "horizontal",
      top: {
        isMobile: "15px",
        isTablet: "-150px",
        isMedium: "-150px",
        isDesktop: "-140px",
      },
      left: {
        isMobile: "-87px",
        isTablet: "200px",
        isMedium: "200px",
        isDesktop: "275px",
      },
      order: 0,
      alt: "Two hackers serve themselves popcorn from a mobile popping machine",
    },
    {
      source: Year2014AltImg,
      orientation: "horizontal",
      top: {
        isMobile: "505px",
        isTablet: "240px",
        isMedium: "360px",
        isDesktop: "275px",
      },
      left: {
        isMobile: "-87px",
        isTablet: "140px",
        isMedium: "140px",
        isDesktop: "230px",
      },
      order: 1,
      alt: "A wide shot of the University of Waterloo’s E7 Building with a large banner which reads “Hack the North” strung up above the entryway",
    },
  ],
  fathomEventCode: "SEYHNZIH",
};

const _2015: Year = {
  year: "2015",
  gradientStart: theme.colors.primary.pink,
  gradientEnd: theme.colors.primary.purple,
  description: [
    "All workshops opened to the public",
    "Video messages from Sal Khan, Alexis Ohanian, Chris Hadfield",
  ],
  top: {
    isMobile: "220px",
    isTablet: "-20px",
    isMedium: "20px",
    isDesktop: "50px",
  },
  left: {
    isMobile: "-183px",
    isTablet: "20px",
    isMedium: "20px",
    isDesktop: "10px",
  },
  order: 2,

  images: [
    {
      source: Year2015Img,
      orientation: "horizontal",
      top: {
        isMobile: "50px",
        isTablet: "220px",
        isMedium: "260px",
        isDesktop: "275px",
      },
      left: {
        isMobile: "-90px",
        isTablet: "170px",
        isMedium: "170px",
        isDesktop: "230px",
      },
      order: 0,
      alt: "A large group of hackers sits around several tables that have been pushed together. Laptops and hardware components litter the desk, and a blackboard behind them displays sketches of concepts for their project",
    },
    {
      source: Year2015AltImg,
      orientation: "horizontal",
      top: {
        isMobile: "470px",
        isTablet: "-140px",
        isMedium: "-140px",
        isDesktop: "-140px",
      },
      left: {
        isMobile: "-125px",
        isTablet: "200px",
        isMedium: "200px",
        isDesktop: "275px",
      },
      order: 1,
      alt: "A therapy dog bows its head as a group of three hackers smile and pet it",
    },
  ],
  fathomEventCode: "BGSG89S1",
};

const _2016: Year = {
  year: "2016",
  gradientStart: theme.colors.primary.yellow,
  gradientEnd: theme.colors.primary.cyan,
  description: [
    "In 2016, we temporarily expanded our mentorship program to 300 mentors to help hackers one-on-one, helping hackers dream bigger than ever before!",
    "Keynote Speaker: Vinod Khosla",
  ],
  top: {
    isMobile: "230px",
    isTablet: "-50px",
    isMedium: "-50px",
    isDesktop: "-40px",
  },
  left: {
    isMobile: "-183px",
    isTablet: "15px",
    isMedium: "15px",
    isDesktop: "0px",
  },
  order: 2,

  images: [
    {
      source: Year2016Img,
      orientation: "vertical",
      top: {
        isMobile: "15px",
        isTablet: "-140px",
        isMedium: "-140px",
        isDesktop: "-140px",
      },
      left: {
        isMobile: "-85px",
        isTablet: "200px",
        isMedium: "200px",
        isDesktop: "370px",
      },
      order: 0,
      alt: "From above, a crowded hallway full of hackers network with sponsors at various booths",
    },
    {
      source: Year2016AltImg,
      orientation: "horizontal",
      top: {
        isMobile: "525px",
        isTablet: "245px",
        isMedium: "315px",
        isDesktop: "275px",
      },
      left: {
        isMobile: "-125px",
        isTablet: "125px",
        isMedium: "125px",
        isDesktop: "125px",
      },
      order: 1,
      alt: "A group of three hackers demonstrate their project on a laptop while three judges look on from behind a table",
    },
  ],
  fathomEventCode: "M98HEF0A",
};

const _2017: Year = {
  year: "2017",
  gradientStart: theme.colors.primary.orange,
  gradientEnd: theme.colors.primary.blue,
  description: [
    "Every year, we try out new ways to show our hackers how much they mean to us. This year, we sent out personalized acceptance videos to all our hackers",
    "Keynote Speaker: Balaji Srinivasan + Surprise Guest Justin Trudeau",
  ],
  top: {
    isMobile: "330px",
    isTablet: "-140px",
    isMedium: "-140px",
    isDesktop: "-140px",
  },
  left: {
    isMobile: "-155px",
    isTablet: "200px",
    isMedium: "200px",
    isDesktop: "350px",
  },
  order: 2,

  images: [
    {
      source: Year2017Img,
      orientation: "vertical",
      top: {
        isMobile: "0px",
        isTablet: "-70px",
        isMedium: "-70px",
        isDesktop: "-70px",
      },
      left: {
        isMobile: "-185px",
        isTablet: "10px",
        isMedium: "10px",
        isDesktop: "0px",
      },
      order: 0,
      alt: "Prime Minister Justin Trudeau gestures from behind a podium while giving a speech at Hack the North’s opening ceremony",
    },
    {
      source: Year2017AltImg,
      orientation: "horizontal",
      top: {
        isMobile: "180px",
        isTablet: "260px",
        isMedium: "270px",
        isDesktop: "275px",
      },
      left: {
        isMobile: "-85px",
        isTablet: "100px",
        isMedium: "100px",
        isDesktop: "150px",
      },
      order: 1,
      alt: "An organizer behind a table places a wristband on a hacker’s wrist. Behind them, other hackers wait in line for their turn",
    },
  ],
  fathomEventCode: "QRTRCW3H",
};

const _2018: Year = {
  year: "2018",
  gradientStart: theme.colors.primary.blue,
  gradientEnd: theme.colors.primary.purple,
  description: [
    "We held the first of two iconic Hack the North helicopter landings (the sequel took place in 2019…)",
    "Keynote Speaker: Chamath Palihapitiya",
  ],
  top: {
    isMobile: "250px",
    isTablet: "-20px",
    isMedium: "0px",
    isDesktop: "0px",
  },
  left: {
    isMobile: "-83px",
    isTablet: "200px",
    isMedium: "200px",
    isDesktop: "350px",
  },
  order: 2,

  images: [
    {
      source: Year2018Img,
      orientation: "vertical",
      top: {
        isMobile: "0px",
        isTablet: "-140px",
        isMedium: "-110px",
        isDesktop: "-140px",
      },
      left: {
        isMobile: "-180px",
        isTablet: "0px",
        isMedium: "0px",
        isDesktop: "0px",
      },
      order: 0,
      alt: "A group of soldiers drop down from a helicopter in the E7 parking lot",
    },
    {
      source: Year2018AltImg,
      orientation: "horizontal",
      top: {
        isMobile: "500px",
        isTablet: "225px",
        isMedium: "275px",
        isDesktop: "275px",
      },
      left: {
        isMobile: "-120px",
        isTablet: "130px",
        isMedium: "130px",
        isDesktop: "130px",
      },
      order: 1,
      alt: "A hacker throws up a peace sign while smiling to the camera in a university classroom, while other students look intently at an ongoing workshop",
    },
  ],
  fathomEventCode: "EEJT4LQM",
};

const _2019: Year = {
  year: "2019",
  gradientStart: theme.colors.primary.purple,
  gradientEnd: theme.colors.primary.orange,
  description: [
    "Hack the North took on the project of scaling things up — and we expanded the event to 1,500 hackers!",
    "Keynote Speaker: Jack Dorsey",
  ],
  top: {
    isMobile: "240px",
    isTablet: "0px",
    isMedium: "0px",
    isDesktop: "0px",
  },
  left: {
    isMobile: "-83px",
    isTablet: "200px",
    isMedium: "200px",
    isDesktop: "350px",
  },
  order: 2,

  images: [
    {
      source: Year2019Img,
      orientation: "vertical",
      top: {
        isMobile: "0x",
        isTablet: "-140px",
        isMedium: "-140px",
        isDesktop: "-140px",
      },
      left: {
        isMobile: "-180px",
        isTablet: "0px",
        isMedium: "0px",
        isDesktop: "0px",
      },
      order: 0,
      alt: "A hacker places the final cup on a stack of cups at the MLH cup stacking event while spectators look on",
    },
    {
      source: Year2019AltImg,
      orientation: "horizontal",
      top: {
        isMobile: "475px",
        isTablet: "230px",
        isMedium: "310px",
        isDesktop: "275px",
      },
      left: {
        isMobile: "-120px",
        isTablet: "110px",
        isMedium: "110px",
        isDesktop: "140px",
      },
      order: 1,
      alt: "Rows of hackers stretch out in a pose during a group yoga session",
    },
  ],
  fathomEventCode: "8MUXTDJR",
};

const _2020: Year = {
  year: "2020",
  gradientStart: theme.colors.primary.pink,
  gradientEnd: theme.colors.primary.cyan,
  description: [
    "A (slightly delayed) Hack the North went fully online, and we became the biggest hackathon in the world with 3,000+ hackers!",
    "Keynote Speakers: Chamath Palihapitiya, Vinod Khosla",
  ],
  top: {
    isMobile: "160px",
    isTablet: "30px",
    isMedium: "30px",
    isDesktop: "30px",
  },
  left: {
    isMobile: "-180px",
    isTablet: "20px",
    isMedium: "20px",
    isDesktop: "10px",
  },
  order: 2,

  images: [
    {
      source: Year2020Img,
      orientation: "horizontal",
      top: {
        isMobile: "40px",
        isTablet: "-130px",
        isMedium: "-130px",
        isDesktop: "-140px",
      },
      left: {
        isMobile: "-90px",
        isTablet: "200px",
        isMedium: "200px",
        isDesktop: "275px",
      },
      order: 0,
      alt: "Two hackers in a virtual call hold their hands up to form a heart",
    },
    {
      source: Year2020AltImg,
      orientation: "horizontal",
      top: {
        isMobile: "465px",
        isTablet: "255px",
        isMedium: "355px",
        isDesktop: "275px",
      },
      left: {
        isMobile: "-90px",
        isTablet: "180px",
        isMedium: "180px",
        isDesktop: "200px",
      },
      order: 1,
      alt: "A group of attendees on a video call for the Women in Tech meetup",
    },
  ],
  fathomEventCode: "SNS3LXTE",
};

const _2021: Year = {
  year: "2021",
  gradientStart: theme.colors.primary.yellow,
  gradientEnd: theme.colors.primary.purple,
  description: [
    "We threw our first hybrid event featuring activities like rock climbing and outdoor karaoke!",
    "Keynote Speakers: Garry Tan, Suhail Doshi",
  ],
  top: {
    isMobile: "200px",
    isTablet: "-10px",
    isMedium: "20px",
    isDesktop: "-10px",
  },
  left: {
    isMobile: "-80px",
    isTablet: "200px",
    isMedium: "200px",
    isDesktop: "350px",
  },
  order: 2,

  images: [
    {
      source: Year2021AltImg,
      orientation: "vertical",
      top: {
        isMobile: "50px",
        isTablet: "-140px",
        isMedium: "-120px",
        isDesktop: "-140px",
      },
      left: {
        isMobile: "-180px",
        isTablet: "20px",
        isMedium: "20px",
        isDesktop: "0px",
      },
      order: 0,
      alt: "Three hackers climb to the top of our outdoor rock climbing wall against a bright blue sky",
    },
    {
      source: Year2021Img,
      orientation: "horizontal",
      top: {
        isMobile: "425px",
        isTablet: "265px",
        isMedium: "295px",
        isDesktop: "275px",
      },
      left: {
        isMobile: "-100px",
        isTablet: "125px",
        isMedium: "125px",
        isDesktop: "125px",
      },
      order: 1,
      alt: "The organizing team offers various pieces of Hack the North merch to the camera, including tote bags and a tee shirt",
    },
  ],
  fathomEventCode: "GHGASG7M",
};

const _2022: Year = {
  year: "2022",
  gradientStart: theme.colors.primary.orange,
  gradientEnd: theme.colors.primary.pink,
  description: [
    "Hack the North welcomed hackers back to our classic, fully in-person format!",
    "Keynote Speaker: will.i.am",
  ],
  top: {
    isMobile: "180px",
    isTablet: "65px",
    isMedium: "65px",
    isDesktop: "65px",
  },
  left: {
    isMobile: "-175px",
    isTablet: "20px",
    isMedium: "20px",
    isDesktop: "10px",
  },
  order: 2,

  images: [
    {
      source: Year2022Img,
      orientation: "horizontal",
      top: {
        isMobile: "40px",
        isTablet: "-100px",
        isMedium: "-120px",
        isDesktop: "-140px",
      },
      left: {
        isMobile: "-90px",
        isTablet: "180px",
        isMedium: "180px",
        isDesktop: "200px",
      },
      order: 0,
      alt: "Three hackers work on their project while lounging on a blow-up air mattress",
    },
    {
      source: Year2022AltImg,
      orientation: "horizontal",
      top: {
        isMobile: "380px",
        isTablet: "225px",
        isMedium: "285px",
        isDesktop: "275px",
      },
      left: {
        isMobile: "-90px",
        isTablet: "200px",
        isMedium: "200px",
        isDesktop: "275px",
      },
      order: 1,
      alt: "A group of seven hackers run through an open field playing bubble soccer",
    },
  ],
  fathomEventCode: "DIIU7DUQ",
};

export const Years = [
  _2014,
  _2015,
  _2016,
  _2017,
  _2018,
  _2019,
  _2020,
  _2021,
  _2022,
];
