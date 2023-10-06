import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FushiaGear, StarBlueImg } from "src/assets/img";
import {
  BrowserWindow,
  ContentWrapper,
  SectionWrapper,
} from "src/components/base";
import GlowText from "src/components/base/GlowText";
import { mediaQueries, useDeviceSize, useWindowSize } from "src/utils";
import styled, { useTheme } from "styled-components";

import Detail from "../../components/base/Detail";
import { Heading1 } from "../../styles";

import { TalkingPointsCopy } from "./constants";
import Glitches from "./Glitches";

const TalkingPoints: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [glitching, setGlitching] = useState<boolean>(false);
  const [glitchFrame, setGlitchFrame] = useState<number>(0);
  const [sectionRef, sectionInView] = useInView();
  const theme = useTheme();
  const { windowWidth } = useWindowSize();
  const isMedium = useDeviceSize("medium");
  const isTablet = useDeviceSize("tablet");
  const isMobile = windowWidth ? windowWidth <= 560 : false;

  // flipping through talking points every 10 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      if (selectedIndex == 2) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(selectedIndex + 1);
      }
    }, 10000);
    return () => clearInterval(interval);
  });

  // setting glitching animation
  useEffect(() => {
    if (glitching) {
      const intervalId = setInterval(() => {
        if (glitchFrame < 2) {
          setGlitchFrame(glitchFrame + 1);
        } else {
          clearInterval(intervalId);
          setGlitchFrame(0);
          setGlitching(false);
        }
      }, 300);
      return () => clearInterval(intervalId);
    }
  });

  useEffect(() => {
    if (sectionInView) {
      setGlitching(true);
    }
  }, [sectionInView]);

  const headerClicked = (index: number) => {
    setSelectedIndex(index);
  };

  const GradientBackground = styled.div`
    position: absolute;
    top: -150px;
    right: -150px;
    width: 400px;
    height: 600px;
    ${selectedIndex === 0 && `background: ${theme.colors.primary.cyan}26`};
    ${selectedIndex === 1 && `background: ${theme.colors.primary.pink}26`};
    ${selectedIndex === 2 && `background: ${theme.colors.primary.orange}26`};
    filter: blur(100px);
    will-change: filter;
    z-index: -20;
  `;

  return (
    <SectionWrapper>
      <ContentWrapper
        style={{
          padding: isTablet ? "48px 32px" : "96px 48px 128px 48px",
        }}
      >
        <HeadingContainer>
          <Heading1>
            Celebrating our{" "}
            <GlowText color={theme.colors.primary.cyan}>
              10th iteration
            </GlowText>
          </Heading1>
        </HeadingContainer>
        <ContentSection ref={sectionRef}>
          {isMedium ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: isTablet ? (isMobile ? "0" : "24px") : "32px",
              }}
            >
              <WindowWrapper glitching={glitching}>
                <div
                  onMouseEnter={() => {
                    setGlitching(true);
                  }}
                >
                  <BrowserWindow
                    gradientStartColor={theme.colors.primary.blue}
                    gradientEndColor={theme.colors.primary.purple}
                  >
                    <BrowserImage
                      src={String(TalkingPointsCopy[selectedIndex].image)}
                      alt={TalkingPointsCopy[selectedIndex].alt}
                      loading="lazy"
                    />
                  </BrowserWindow>
                  <GradientBackground />
                </div>
                <Glitches glitchFrame={glitchFrame} glitching={glitching} />
              </WindowWrapper>
              <TextWrapper>
                {TalkingPointsCopy.map((talkingPoint, index) => {
                  return (
                    <Detail
                      key={index}
                      onClick={headerClicked}
                      index={index}
                      header={talkingPoint.header}
                      body={talkingPoint.body}
                      clicked={selectedIndex === index}
                      color={talkingPoint.color}
                      section="Talking Points"
                    />
                  );
                })}
              </TextWrapper>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 584px" }}>
              <TextWrapper>
                {selectedIndex === 0 && <BlueStar src={StarBlueImg} alt="" />}
                {selectedIndex === 1 && <PinkGear src={FushiaGear} alt="" />}
                {TalkingPointsCopy.map((talkingPoint, index) => {
                  return (
                    <Detail
                      key={index}
                      onClick={headerClicked}
                      index={index}
                      header={talkingPoint.header}
                      body={talkingPoint.body}
                      clicked={selectedIndex === index}
                      color={talkingPoint.color}
                      section="Talking Points"
                    />
                  );
                })}
              </TextWrapper>
              <WindowWrapper glitching={glitching}>
                <div
                  onMouseEnter={() => {
                    setGlitching(true);
                  }}
                >
                  <BrowserWindow
                    gradientStartColor={theme.colors.primary.blue}
                    gradientEndColor={theme.colors.primary.purple}
                  >
                    <BrowserImage
                      src={String(TalkingPointsCopy[selectedIndex].image)}
                      alt={TalkingPointsCopy[selectedIndex].alt}
                      loading="lazy"
                    />
                  </BrowserWindow>
                  <GradientBackground />
                </div>
                <Glitches glitchFrame={glitchFrame} glitching={glitching} />
              </WindowWrapper>
            </div>
          )}
        </ContentSection>
      </ContentWrapper>
    </SectionWrapper>
  );
};

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
  text-align: center;
`;

const ContentSection = styled.div`
  margin-top: 128px;
  display: flex;

  ${mediaQueries.medium} {
    margin-top: 72px;
  }

  @media screen and (min-width: 425px) and (max-width: 560px) {
    margin-top: 0;
  }

  ${mediaQueries.largeMobile} {
    margin-top: 0;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

interface RotateGlitchProps {
  glitching: boolean;
}

const WindowWrapper = styled.div<RotateGlitchProps>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 390px;
  ${(props) =>
    props.glitching &&
    `.hoverRotate {
      animation: rotate 1.3s linear infinite;
    }`}

  ${mediaQueries.medium} {
    justify-content: center;
  }
`;

const BrowserImage = styled.img`
  width: 484px;

  @media screen and (min-width: 425px) and (max-width: 560px) {
    width: 280px;
  }

  ${mediaQueries.largeMobile} {
    width: 280px;
  }
`;

const BlueStar = styled.img`
  position: absolute;
  width: 90px;
  left: -10px;
  top: 220px;
  animation: float 2s ease-in-out infinite alternate;

  @keyframes float {
    from {
      transform: translatey(0px) translatex(0px) rotate(-30deg);
    }
    to {
      transform: translatey(10px) translatex(10px) rotate(0deg);
    }
  }
`;

const PinkGear = styled.img`
  position: absolute;
  left: 5px;
  top: 340px;
  animation: rotate 4s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default TalkingPoints;
