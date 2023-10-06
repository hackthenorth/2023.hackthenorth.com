import { trackGoal } from "fathom-client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  E7LeftImg,
  E7RightImg,
  ChatQuestionImg,
  CountriesImg,
  FloppyDisksImg,
  GeeseImg,
  HackersImg,
  HoursTravelledImg,
  LightBulbsImg,
  MentorsImg,
  MicsImg,
  ProjectsImg,
  SchoolsImg,
  WorkshopsImg,
  BgGlowImg,
  YTBgImg,
  YTOverlayImg,
} from "src/assets/img";
import { mediaQueries } from "src/utils";
import styled, { css } from "styled-components";

import RecapVideo from "./RecapVideo";
import TopStructure from "./TopStructure";

interface glowProps {
  componentStyle: string;
}

interface imgProps {
  currState: boolean;
  hovered: boolean;
  animDone: boolean;
  hoveredExists: boolean;
}

const DecorStyles = {
  FADEOUT_ON:
    "animation: glowIn 2s forwards ease; -webkit-animation: glowIn 2s forwards ease;",
  FADEOUT_OFF: "animation: none; -webkit-animation: none; opacity: 0;",
};

const LightModes = {
  FLICKERING: `animation: 0.3s flicker ease-in-out; -webkit-animation: 0.3s flicker ease-in-out;`,
  FLICKERINGOFF: `animation: none; -webkit-animation: none;`,
  LIGHTSON: `filter: brightness(100%); -webkit-filter: brightness(100%);`,
  LIGHTSOFF: "filter: brightness(50%); -webkit-filter: brightness(50%);",
  POPOUTLEFT: "transform: translatey(-15px) translatex(-13px); z-index: 1;",
  POPOUTRIGHT: "transform: translatey(-15px) translatex(13px); z-index: 1;",
  POPIN: "transform: translatey(0px) translatex(0px); z-index: 0;",
};

// Panel IDs
export const PanelIDs = {
  HACKERS: 1,
  COUNTRIES: 2,
  CHATQUESTION: 3,
  PROJECTS: 4,
  GEESE: 5,
  HOURSTRAVELLED: 6,
  MICS: 7,
  YTVIDEO: 8,
  LIGHTBULBS: 9,
  MENTORS: 10,
  WORKSHOPS: 11,
  SCHOOLS: 12,
  FLOPPYDISKS: 13,
};

// Grouped panels based on ordering
const PanelGroups = [
  [],
  [PanelIDs.HACKERS],
  [PanelIDs.COUNTRIES, PanelIDs.CHATQUESTION],
  [PanelIDs.PROJECTS, PanelIDs.GEESE],
  [PanelIDs.HOURSTRAVELLED, PanelIDs.MICS],
  [PanelIDs.YTVIDEO],
  [PanelIDs.LIGHTBULBS, PanelIDs.MENTORS],
  [PanelIDs.WORKSHOPS],
  [PanelIDs.SCHOOLS, PanelIDs.FLOPPYDISKS],
];

const Stats: React.FC = () => {
  // Light state - the currently ON panel(s)
  const [lightState, setLightState] = useState<number[]>([]);
  const [hoveredLight, setHoveredLight] = useState(-1);
  const [rotationIdx, setRotationIdx] = useState(0);
  const [pause, setPause] = useState(false);
  const [animDone, setAnimDone] = useState(false);
  const WAIT_TIME = 100;
  const [statsRef, statsInView] = useInView();
  const [glowStyle, setGlowStyle] = useState(DecorStyles.FADEOUT_OFF);
  const handleMouseOver = (highlighted: number) => {
    setPause(true);
    setHoveredLight(highlighted);
    setAnimDone(true);
  };
  const handleMouseOut = () => {
    setAnimDone(true);
    setHoveredLight(-1);
    setPause(false);
  };
  useEffect(() => {
    if (rotationIdx >= PanelGroups.length) {
      setAnimDone(true);
    } else {
      setLightState((prevLights) => {
        return prevLights.concat(PanelGroups[rotationIdx]);
      });
    }
  }, [rotationIdx]);

  useEffect(() => {
    if (statsInView) {
      setGlowStyle(DecorStyles.FADEOUT_ON);
    } else {
      setGlowStyle(DecorStyles.FADEOUT_OFF);
      setLightState([]);
      setHoveredLight(-1);
      setRotationIdx(0);
      setAnimDone(false);
    }
  }, [statsInView]);

  useEffect(() => {
    if (statsInView) {
      const interval = setInterval(() => {
        if (!pause) {
          setRotationIdx((prevIdx: number) => {
            if (prevIdx < PanelGroups.length) {
              return prevIdx + 1;
            } else {
              return PanelGroups.length;
            }
          });
        }
      }, WAIT_TIME);

      return () => clearInterval(interval);
    }
  }, [pause, statsInView, lightState, rotationIdx]);
  return (
    <GlowWrapper>
      <BgGlow
        alt=""
        loading="lazy"
        src={BgGlowImg}
        componentStyle={glowStyle}
      />
      <Wrapper ref={statsRef}>
        <TopStructure />
        <E7Left draggable="false" alt="" loading="lazy" src={E7LeftImg} />
        <E7Right draggable="false" alt="" loading="lazy" src={E7RightImg} />
        <Hackers
          draggable="false"
          alt="1,100+ hackers"
          loading="lazy"
          src={HackersImg}
          currState={lightState.includes(PanelIDs.HACKERS)}
          hovered={hoveredLight == PanelIDs.HACKERS}
          onMouseOver={() => handleMouseOver(PanelIDs.HACKERS)}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        />
        <Countries
          draggable="false"
          alt="17 countries"
          loading="lazy"
          src={CountriesImg}
          currState={lightState.includes(PanelIDs.COUNTRIES)}
          hovered={hoveredLight == PanelIDs.COUNTRIES}
          onMouseOver={() => handleMouseOver(PanelIDs.COUNTRIES)}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        />
        <ChatQuestion
          draggable="false"
          alt=""
          loading="lazy"
          src={ChatQuestionImg}
          currState={lightState.includes(PanelIDs.CHATQUESTION)}
          hovered={hoveredLight == PanelIDs.CHATQUESTION}
          onMouseEnter={() => handleMouseOver(PanelIDs.CHATQUESTION)}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        />
        <Geese
          draggable="false"
          alt=""
          loading="lazy"
          src={GeeseImg}
          currState={lightState.includes(PanelIDs.GEESE)}
          hovered={hoveredLight == PanelIDs.GEESE}
          onMouseEnter={() => handleMouseOver(PanelIDs.GEESE)}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        />
        <HoursTravelled
          draggable="false"
          alt="15,000+ km traveled"
          loading="lazy"
          src={HoursTravelledImg}
          currState={lightState.includes(PanelIDs.HOURSTRAVELLED)}
          hovered={hoveredLight == PanelIDs.HOURSTRAVELLED}
          onMouseEnter={() => handleMouseOver(PanelIDs.HOURSTRAVELLED)}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        />
        <Mics
          draggable="false"
          alt=""
          loading="lazy"
          src={MicsImg}
          currState={lightState.includes(PanelIDs.MICS)}
          hovered={hoveredLight == PanelIDs.MICS}
          onMouseEnter={() => handleMouseOver(PanelIDs.MICS)}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        />
        <LightBulbs
          draggable="false"
          alt=""
          loading="lazy"
          src={LightBulbsImg}
          currState={lightState.includes(PanelIDs.LIGHTBULBS)}
          hovered={hoveredLight == PanelIDs.LIGHTBULBS}
          onMouseEnter={() => handleMouseOver(PanelIDs.LIGHTBULBS)}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        />
        <Mentors
          draggable="false"
          alt="110 mentors"
          loading="lazy"
          src={MentorsImg}
          currState={lightState.includes(PanelIDs.MENTORS)}
          hovered={hoveredLight == PanelIDs.MENTORS}
          onMouseEnter={() => handleMouseOver(PanelIDs.MENTORS)}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        />
        <Projects
          draggable="false"
          alt="220+ projects submitted"
          loading="lazy"
          src={ProjectsImg}
          currState={lightState.includes(PanelIDs.PROJECTS)}
          hovered={hoveredLight == PanelIDs.PROJECTS}
          onMouseEnter={() => handleMouseOver(PanelIDs.PROJECTS)}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        />
        <Workshops
          draggable="false"
          alt="26 workshops"
          loading="lazy"
          src={WorkshopsImg}
          currState={lightState.includes(PanelIDs.WORKSHOPS)}
          hovered={hoveredLight == PanelIDs.WORKSHOPS}
          onMouseEnter={() => handleMouseOver(PanelIDs.WORKSHOPS)}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        />
        <YtVideo
          currState={lightState.includes(PanelIDs.YTVIDEO)}
          hovered={hoveredLight == PanelIDs.YTVIDEO}
          onMouseEnter={() => {
            handleMouseOver(PanelIDs.YTVIDEO);
            trackGoal("SJAWFWNW", 0); // Showcase: YT Video Hover
          }}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        >
          <YtVideoBg draggable="false" alt="" loading="lazy" src={YTBgImg} />
          <RecapVideo
            onMouseEnter={() => handleMouseOver(PanelIDs.YTVIDEO)}
            onMouseOut={() => handleMouseOut()}
          />
          <YtVideoOverlay
            draggable="false"
            alt=""
            loading="lazy"
            src={YTOverlayImg}
          />
        </YtVideo>
        <Schools
          draggable="false"
          alt="175+ schools"
          loading="lazy"
          src={SchoolsImg}
          currState={lightState.includes(PanelIDs.SCHOOLS)}
          hovered={hoveredLight == PanelIDs.SCHOOLS}
          onMouseEnter={() => handleMouseOver(PanelIDs.SCHOOLS)}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        />
        <FloppyDisks
          draggable="false"
          alt=""
          loading="lazy"
          src={FloppyDisksImg}
          currState={lightState.includes(PanelIDs.FLOPPYDISKS)}
          hovered={hoveredLight == PanelIDs.FLOPPYDISKS}
          onMouseEnter={() => handleMouseOver(PanelIDs.FLOPPYDISKS)}
          onMouseOut={() => handleMouseOut()}
          animDone={animDone}
          hoveredExists={hoveredLight != -1}
        />
      </Wrapper>
    </GlowWrapper>
  );
};

const GlowWrapper = styled.div`
  position: relative;
  top: 0;
  width: auto;
  display: flex;
  margin: 24px;
  max-width: 1202px;
  height: auto;
`;

const BgGlow = styled.img<glowProps>`
  position: absolute;
  top: -5%;
  width: 100%;
  height: auto;
  ${(props) => props.componentStyle}
  @keyframes glowIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  visibility: visible;

  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 6%;
  width: 100%;
  height: auto;

  ${mediaQueries.tablet} {
    margin-top: 0%;
  }
`;

const E7Left = styled.img`
  position: relative;
  top: 0;
  width: 69.3%;
  left: 0;
  height: auto;
  visibility: visible;

  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const E7Right = styled.img`
  position: absolute;
  top: 0;
  left: 69.2%;
  width: 30.7%;
  height: auto;
  visibility: visible;

  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const Panel = styled.img<imgProps>`
  position: absolute;
  height: auto;
  transition: all 0.3s ease-in-out;
  filter: brightness(50%);
  -webkit-filter: brightness(50%);
  ${({ currState, hovered, animDone, hoveredExists }) =>
    (currState && !hoveredExists) || hovered || (animDone && !hoveredExists)
      ? css`
          ${LightModes.LIGHTSON}
        `
      : css`
          ${LightModes.LIGHTSOFF}
        `};
  ${({ currState, hovered, animDone, hoveredExists }) =>
    currState && !hoveredExists && !animDone
      ? css`
          ${LightModes.FLICKERING}
        `
      : css`
          ${LightModes.FLICKERINGOFF}
        `};

  @keyframes flicker {
    0% {
      filter: brightness(100%);
      -webkit-filter: brightness(100%);
    }
    30% {
      filter: brightness(100%);
      -webkit-filter: brightness(100%);
    }
    50% {
      filter: brightness(50%);
      -webkit-filter: brightness(50%);
    }
    80% {
      filter: brightness(50%);
      -webkit-filter: brightness(50%);
    }
    100% {
      filter: brightness(100%);
      -webkit-filter: brightness(100%);
    }
  }
`;

const PanelLeft = styled(Panel)<imgProps>`
  ${({ hovered }) =>
    hovered
      ? css`
          ${LightModes.POPOUTLEFT}
        `
      : css`
          ${LightModes.POPIN}
        `};
  ${mediaQueries.tablet} {
    transform: translatey(0px) translatex(0px);
    z-index: 0;
  }
`;

const PanelRight = styled(Panel)<imgProps>`
  ${({ hovered }) =>
    hovered
      ? css`
          ${LightModes.POPOUTRIGHT}
        `
      : css`
          ${LightModes.POPIN}
        `};

  ${mediaQueries.tablet} {
    transform: translatey(0px) translatex(0px);
    z-index: 0;
  }
`;

const Hackers = styled(PanelLeft)<imgProps>`
  top: 12%;
  width: 21.3%;
  left: 0.8%;

  ${mediaQueries.tablet} {
    top: 4%;
    width: 15%;
    left: 44%;
  }

  ${mediaQueries.largeMobile} {
    top: 0%;
    width: 38%;
    left: 9%;
  }
`;

const Countries = styled(PanelLeft)<imgProps>`
  top: 31.3%;
  left: 53.2%;
  width: 15.1%;

  ${mediaQueries.tablet} {
    left: 69.8%;
    top: 26.8%;
    width: 11.2%;
  }

  ${mediaQueries.largeMobile} {
    top: 57%;
    width: 29%;
    left: 74%;
  }
`;

const ChatQuestion = styled(PanelLeft)<imgProps>`
  top: 80%;
  left: 53.2%;
  width: 15.1%;
  visibility: visible;

  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const Projects = styled(PanelRight)<imgProps>`
  top: 2.3%;
  left: 70.1%;
  width: 29.1%;

  ${mediaQueries.tablet} {
    left: 21%;
    top: 10%;
    width: 22%;
  }

  ${mediaQueries.largeMobile} {
    top: 80%;
    width: 50%;
    left: -2%;
  }
`;

const Geese = styled(PanelLeft)<imgProps>`
  top: 66.5%;
  width: 29.5%;
  left: 23%;
  visibility: visible;

  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const HoursTravelled = styled(PanelLeft)<imgProps>`
  top: 37%;
  width: 29.5%;
  left: 23%;

  ${mediaQueries.tablet} {
    left: 60%;
    top: 7%;
    width: 21%;
  }

  ${mediaQueries.largeMobile} {
    top: 7%;
    width: 53%;
    left: 50%;
  }
`;

const Mics = styled(PanelRight)<imgProps>`
  top: 66%;
  left: 70.1%;
  width: 19%;
  visibility: visible;

  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const YtVideo = styled.div<imgProps>`
  position: absolute;
  top: 6.8%;
  width: 22.2%;
  height: 33%;
  overflow: hidden;
  left: 23%;
  ${({ hovered }) =>
    hovered
      ? css`
          transform: skew(0deg, -9.7deg) translatey(-15px) translatex(-13px);
          z-index: 1;
        `
      : css`
          transform: skew(0deg, -9.7deg) translatey(0px) translatex(0px);
          z-index: 0;
        `};
  transition: all 0.3s ease-in-out;
  filter: brightness(50%);
  -webkit-filter: brightness(50%);
  ${({ currState, hovered, animDone, hoveredExists }) =>
    (currState && !hoveredExists) || hovered || (animDone && !hoveredExists)
      ? css`
          ${LightModes.LIGHTSON}
        `
      : css`
          ${LightModes.LIGHTSOFF}
        `};
  ${({ currState, hovered, animDone, hoveredExists }) =>
    currState && !hoveredExists && !animDone
      ? css`
          ${LightModes.FLICKERING}
        `
      : css`
          ${LightModes.FLICKERINGOFF}
        `};

  ${mediaQueries.tablet} {
    top: 35%;
    left: 36%;
    width: 16%;
    height: 33%;
    transform: skew(0deg, -9.7deg) translatey(0px) translatex(0px);
    z-index: 0;
  }

  ${mediaQueries.largeMobile} {
    top: 135%;
    left: 34%;
    width: 38%;
    height: 70%;
    transform: skew(0deg, -9.7deg) translatey(0px) translatex(0px);
    z-index: 0;
  }
`;

const YtVideoBg = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  transform: skew(0deg, 9.7deg);
`;

const YtVideoOverlay = styled.img`
  position: absolute;
  top: 0%;
  left: 0;
  width: 96%;
  transform: skew(0deg, 9.7deg);
`;

const LightBulbs = styled(PanelRight)<imgProps>`
  top: 33%;
  left: 89.9%;
  width: 9.2%;
  visibility: visible;

  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const Mentors = styled(PanelLeft)<imgProps>`
  top: 1.7%;
  width: 22.2%;
  left: 46.1%;

  ${mediaQueries.tablet} {
    left: 53%;
    top: 31%;
    width: 16%;
  }

  ${mediaQueries.largeMobile} {
    top: 68%;
    width: 38%;
    left: 34%;
  }
`;

const Workshops = styled(PanelLeft)<imgProps>`
  top: 53%;
  width: 21.3%;
  left: 0.8%;

  ${mediaQueries.tablet} {
    top: 50%;
    left: 49%;
    width: 15%;
  }

  ${mediaQueries.largeMobile} {
    top: 170%;
    width: 38%;
    left: 65%;
  }
`;

const Schools = styled(PanelRight)<imgProps>`
  top: 22.8%;
  left: 70.1%;
  width: 19%;

  ${mediaQueries.tablet} {
    left: 21%;
    top: 26%;
    width: 14%;
  }

  ${mediaQueries.largeMobile} {
    top: 117%;
    width: 33%;
    left: -2%;
  }
`;

const FloppyDisks = styled(PanelLeft)<imgProps>`
  top: 77.5%;
  width: 21.3%;
  left: 0.8%;
  visibility: visible;

  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

export default Stats;
