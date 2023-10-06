import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatedFrame } from "src/assets/img";
import {
  BrowserWindow,
  ContentWrapper,
  SectionWrapper,
} from "src/components/base";
import GlowText from "src/components/base/GlowText";
import { SectionId } from "src/constants";
import { mediaQueries, useDeviceSize } from "src/utils";
import styled, { useTheme } from "styled-components";

import Detail from "../../components/base/Detail";
import { Heading1, LargeBody } from "../../styles";

import { HackerTestimonialsCopy } from "./constants";
import Glitches from "./Glitches";

const Stories: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [glitching, setGlitching] = useState<boolean>(false);
  const [glitchFrame, setGlitchFrame] = useState<number>(0);
  const [sectionRef, sectionInView] = useInView();
  const theme = useTheme();
  const isMedium = useDeviceSize("medium");
  const isTablet = useDeviceSize("tablet");
  const isMobile = useDeviceSize("largeMobile");

  // flipping through stories every 15 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      if (selectedIndex == 3) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(selectedIndex + 1);
      }
    }, 15000);
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

  return (
    <SectionWrapper
      style={{ backgroundColor: "#2A2A4F" }}
      id={SectionId.STORIES}
    >
      <TopFrameContainer alt="Animated frame" src={AnimatedFrame} />
      <ContentWrapper
        style={{ padding: isTablet ? "48px 32px 0 32px" : "128px 48px 0 48px" }}
      >
        <HeadingContainer>
          <Heading1>
            Creating{" "}
            <GlowText color={theme.colors.primary.blue}>unforgettable</GlowText>{" "}
            memories
          </Heading1>
        </HeadingContainer>
        <SubHeading>
          Since 2014, Hack the North has empowered students of all levels to
          take their ideas to the next level by fostering a community of
          learning, mentorship, and fun.
        </SubHeading>
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
                <BrowserWrapper
                  color={HackerTestimonialsCopy[selectedIndex].color}
                  onMouseEnter={() => {
                    setGlitching(true);
                  }}
                >
                  <BrowserWindow
                    gradientStartColor={theme.colors.primary.blue}
                    gradientEndColor={theme.colors.primary.purple}
                  >
                    <BrowserImage
                      src={String(HackerTestimonialsCopy[selectedIndex].image)}
                      alt={HackerTestimonialsCopy[selectedIndex].alt}
                      loading="lazy"
                    />
                  </BrowserWindow>
                </BrowserWrapper>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                >
                  <Glitches glitchFrame={glitchFrame} glitching={glitching} />
                </div>
              </WindowWrapper>
              <TextWrapper>
                {HackerTestimonialsCopy.map((testimonial, index) => {
                  return (
                    <Detail
                      key={index}
                      onClick={headerClicked}
                      index={index}
                      header={testimonial.name}
                      body={testimonial.testimonial}
                      clicked={selectedIndex === index}
                      color={testimonial.color}
                      section="Hacker Testimonials"
                    />
                  );
                })}
              </TextWrapper>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 478px",
              }}
            >
              <TextWrapper>
                {HackerTestimonialsCopy.map((testimonial, index) => {
                  return (
                    <Detail
                      key={index}
                      onClick={headerClicked}
                      index={index}
                      header={testimonial.name}
                      body={testimonial.testimonial}
                      clicked={selectedIndex === index}
                      color={testimonial.color}
                      section="Hacker Testimonials"
                    />
                  );
                })}
              </TextWrapper>
              <WindowWrapper glitching={glitching}>
                <BrowserWrapper
                  color={HackerTestimonialsCopy[selectedIndex].color}
                  onMouseEnter={() => {
                    setGlitching(true);
                  }}
                >
                  <BrowserWindow
                    gradientStartColor={theme.colors.primary.blue}
                    gradientEndColor={theme.colors.primary.purple}
                  >
                    <BrowserImage
                      src={String(HackerTestimonialsCopy[selectedIndex].image)}
                      alt={HackerTestimonialsCopy[selectedIndex].alt}
                      loading="lazy"
                    />
                  </BrowserWindow>
                </BrowserWrapper>
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
  margin-bottom: 24px;
  text-align: center;
`;

const SubHeading = styled(LargeBody)`
  text-align: center;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.text.dark.gray};
`;

const ContentSection = styled.div`
  margin-top: 78px;
  display: flex;

  ${mediaQueries.medium} {
    margin-top: 48px;
  }

  ${mediaQueries.largeMobile} {
    margin-top: 0;
  }
`;

const TextWrapper = styled.div`
  min-height: 784px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${mediaQueries.medium} {
    min-height: 600px;
  }
`;

interface RotateGlitchProps {
  glitching: boolean;
}

const WindowWrapper = styled.div<RotateGlitchProps>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 600px;
  ${(props) =>
    props.glitching &&
    `.hoverRotate {
      animation: rotate 1.3s linear infinite;
    }`}

  ${mediaQueries.medium} {
    justify-content: center;
  }
`;

const BrowserWrapper = styled.div``;

const BrowserImage = styled.img`
  width: 354px;

  ${mediaQueries.largeMobile} {
    width: 280px;
  }
`;

const TopFrameContainer = styled.img`
  display: flex;
  width: 100vw;
  transform: rotate(180deg);
`;

export default Stories;
