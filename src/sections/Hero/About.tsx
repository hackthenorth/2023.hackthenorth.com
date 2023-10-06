import React from "react";
import { useInView } from "react-intersection-observer";
import { About1, About2 } from "src/assets/img";
import { BrowserWindow, BrowserWindowGradient } from "src/components/base";
import { SectionId } from "src/constants";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import styled, { useTheme } from "styled-components";

import {
  AboutText,
  PopUpWrapper,
  Column,
  Row,
  ResponsiveH2,
  ResponsiveLB,
  GradientOverlay,
} from "./Constants";

const About: React.FC = () => {
  const [ref, isInView] = useInView();
  const theme = useTheme();

  return (
    <AboutContainer ref={ref} id={SectionId.ABOUT}>
      <PopUpWrapper inView={isInView} style={{ zIndex: 8 }}>
        <BrowserWindowGradient
          gradientStartColor={theme.colors.primary.blue}
          gradientEndColor={theme.colors.primary.purple}
        >
          <TextContainer>
            <ResponsiveH2>
              {!useDeviceSize(499) && "Welcome to "}Canada&apos;s biggest
              hackathon
            </ResponsiveH2>
            <ResponsiveLB>{AboutText}</ResponsiveLB>
          </TextContainer>
        </BrowserWindowGradient>
      </PopUpWrapper>
      <ImagesContainer>
        <PopUpWrapper1 inView={isInView}>
          <ImgContainer1>
            <BrowserWindow
              gradientStartColor={theme.colors.primary.cyan}
              gradientEndColor={theme.colors.primary.blue}
            >
              <div style={{ position: "relative" }}>
                <GradientOverlay
                  gradientStartColor={theme.colors.primary.cyan}
                  gradientEndColor={theme.colors.primary.blue}
                />
                <Img1
                  src={About1}
                  alt="Hacker in blue shirt eating"
                  loading="lazy"
                />
              </div>
            </BrowserWindow>
          </ImgContainer1>
        </PopUpWrapper1>
        <PopUpWrapper2 inView={isInView}>
          <ImgContainer2>
            <BrowserWindow
              gradientStartColor={theme.colors.primary.orange}
              gradientEndColor={theme.colors.primary.pink}
            >
              <div style={{ position: "relative" }}>
                <GradientOverlay
                  gradientStartColor={theme.colors.primary.orange}
                  gradientEndColor={theme.colors.primary.pink}
                />
                <Img2
                  src={About2}
                  alt="A group of hackers celebrating a tall tower of plastic cups"
                  loading="lazy"
                />
              </div>
            </BrowserWindow>
          </ImgContainer2>
        </PopUpWrapper2>
      </ImagesContainer>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled(Row)`
  overflow: hidden;
  padding-top: 50px;
  @media (max-width: 1205px) {
    flex-direction: column;
    padding: 0 40px;
    padding-top: 100px;
    margin-top: 20px;
  }
  ${mediaQueries.largeMobile} {
    padding: 0 24px;
    padding-top: 100px;
  }
`;

const TextContainer = styled.div`
  padding: 40px;
  width: 570px;
  @media (max-width: 1100px) {
    width: 60vw;
    padding: 56px;
  }
  @media (max-width: 675px) {
    width: 100%;
    padding: 42px;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 36px;
  }
  @media (max-width: 500px) {
    padding: 30px;
  }
  ${mediaQueries.largeMobile} {
    padding: 24px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  z-index: -100;
`;

const ImagesContainer = styled(Column)`
  padding-top: 15px;
  padding-right: 45px;
  @media (max-width: 1205px) {
    padding: 0;
  }
`;

const ImgContainer1 = styled(ImgContainer)`
  bottom: 15px;
  right: 40px;
  @media (max-width: 1205px) {
    bottom: 30px;
    right: 60px;
  }
  ${mediaQueries.tablet} {
    bottom: 40px;
    right: 35px;
  }
  @media (max-width: 675px) {
    bottom: 15px;
    right: -15px;
  }
`;

const ImgContainer2 = styled(ImgContainer)`
  bottom: 60px;
  left: 90px;
  @media (max-width: 1205px) {
    bottom: 70px;
    left: 30px;
  }
  ${mediaQueries.tablet} {
    bottom: 45px;
    left: 0px;
  }
  @media (max-width: 675px) {
    bottom: 25px;
    left: -25px;
  }
`;

const Img1 = styled.img`
  width: 480px;
  height: 100%;
  object-fit: cover;
  @media (max-width: 1205px) {
    width: 62vw;
  }
  @media (max-width: 675px) {
    width: 70vw;
  }
  ${mediaQueries.largeMobile} {
    width: 266px;
  }
`;

const Img2 = styled.img`
  width: 390px;
  height: 100%;
  object-fit: cover;
  @media (max-width: 1205px) {
    width: 60vw;
  }
  @media (max-width: 675px) {
    width: 72vw;
  }
  ${mediaQueries.largeMobile} {
    width: 266px;
  }
`;

const PopUpWrapper1 = styled(PopUpWrapper)`
  @media (max-width: 1205px) {
    z-index: 9;
  }
`;

const PopUpWrapper2 = styled(PopUpWrapper)`
  @media (max-width: 1205px) {
    z-index: 10;
  }
`;
