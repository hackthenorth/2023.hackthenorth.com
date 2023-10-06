import React from "react";
import { useInView } from "react-intersection-observer";
import {
  YouBelongInTech1,
  YouBelongInTech2,
  YouBelongInTech3,
} from "src/assets/img";
import { BrowserWindow, BrowserWindowGradient } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import styled, { useTheme } from "styled-components";

import {
  YouBelongText,
  PopUpWrapper,
  Column,
  Row,
  ResponsiveH2,
  ResponsiveLB,
  GradientOverlay,
} from "./Constants";

const YouBelongInTech: React.FC = () => {
  const [ref, isInView] = useInView();
  const theme = useTheme();

  return (
    <TechContainer ref={ref}>
      <PopUpWrapper inView={isInView} style={{ zIndex: 8 }}>
        <ImgContainer0>
          <BrowserWindowGradient
            gradientStartColor={theme.colors.primary.blue}
            gradientEndColor={theme.colors.primary.purple}
          >
            <TextContainer>
              <ResponsiveH2>You belong in tech</ResponsiveH2>
              <ResponsiveLB>{YouBelongText}</ResponsiveLB>
            </TextContainer>
          </BrowserWindowGradient>
        </ImgContainer0>
      </PopUpWrapper>
      <Column>
        <ResponsiveFlexRow>
          <PopUpWrapper1 inView={isInView}>
            <ImgContainer1>
              <BrowserWindow
                gradientStartColor={theme.colors.primary.pink}
                gradientEndColor={theme.colors.primary.purple}
              >
                <div style={{ position: "relative" }}>
                  <GradientOverlay
                    gradientStartColor={theme.colors.primary.pink}
                    gradientEndColor={theme.colors.primary.purple}
                  />
                  <Img1
                    src={YouBelongInTech1}
                    alt="Hacker walking with food in their hands"
                    loading="lazy"
                  />
                </div>
              </BrowserWindow>
            </ImgContainer1>
          </PopUpWrapper1>
          <PopUpWrapper2 inView={isInView}>
            <ImgContainer2>
              <BrowserWindow
                gradientStartColor={theme.colors.primary.yellow}
                gradientEndColor={theme.colors.primary.orange}
              >
                <div style={{ position: "relative" }}>
                  <GradientOverlay
                    gradientStartColor={theme.colors.primary.yellow}
                    gradientEndColor={theme.colors.primary.orange}
                  />
                  <Img2
                    src={YouBelongInTech3}
                    alt="Two hackers holding sleeping bags"
                    loading="lazy"
                  />
                </div>
              </BrowserWindow>
            </ImgContainer2>
          </PopUpWrapper2>
        </ResponsiveFlexRow>
        <PopUpWrapper3 inView={isInView}>
          <ImgContainer3>
            <BrowserWindow
              gradientStartColor={theme.colors.primary.cyan}
              gradientEndColor={theme.colors.primary.blue}
            >
              <div style={{ position: "relative" }}>
                <GradientOverlay
                  gradientStartColor={theme.colors.primary.cyan}
                  gradientEndColor={theme.colors.primary.blue}
                />
                <Img3
                  src={YouBelongInTech2}
                  alt="10 Hackers posing with umbrellas outdoors in front of a Hack the North banner"
                  loading="lazy"
                />
              </div>
            </BrowserWindow>
          </ImgContainer3>
        </PopUpWrapper3>
      </Column>
    </TechContainer>
  );
};

export default YouBelongInTech;

const TechContainer = styled(Row)`
  overflow: hidden;
  margin-bottom: 130px;
  padding-bottom: 50px;
  padding-top: 240px;
  @media (max-width: 1205px) {
    flex-direction: column;
    padding: 100px 40px 0 40px;
  }
  ${mediaQueries.largeMobile} {
    padding: 50px 24px 0 24px;
  }
`;

const TextContainer = styled.div`
  padding: 40px;
  width: 430px;
  color: @media (max-width: 1205px) {
    width: 470px;
    padding: 48px;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 36px;
  }
  @media (max-width: 500px) {
    padding: 30px;
  }
  ${mediaQueries.largeMobile} {
    width: 338px;
    padding: 30px;
  }
  ${mediaQueries.mobile} {
    width: 310px;
    padding: 30px;
  }
`;

const ResponsiveFlexRow = styled(Row)`
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  position: relative;
`;

const ImgContainer0 = styled(ImgContainer)`
  left: 60px;
  @media (max-width: 1205px) {
    left: 0;
  }
`;
const ImgContainer1 = styled(ImgContainer)`
  bottom: 110px;
  right: 30px;
  @media (max-width: 1205px) {
    bottom: 50px;
    right: -36px;
  }
  ${mediaQueries.tablet} {
    bottom: 36px;
    right: -36px;
  }
  @media (max-width: 750px) {
    bottom: 25px;
    right: -15px;
  }
  @media (max-width: 500px) {
    bottom: 15px;
    right: -10px;
  }
`;

const ImgContainer2 = styled(ImgContainer)`
  bottom: 20px;
  right: 80px;
  @media (max-width: 1205px) {
    bottom: -36px;
    right: 20px;
  }
  ${mediaQueries.tablet} {
    bottom: -36px;
    right: 20px;
  }
  @media (max-width: 750px) {
    bottom: 50px;
    right: 30px;
  }
  @media (max-width: 500px) {
    bottom: 40px;
    right: 20px;
  }
`;

const ImgContainer3 = styled(ImgContainer)`
  bottom: -20px;
  right: 125px;
  @media (max-width: 1205px) {
    bottom: 0px;
    right: 40px;
  }
  ${mediaQueries.tablet} {
    bottom: 0px;
    right: 80px;
  }
  @media (max-width: 750px) {
    bottom: 70px;
    right: -10px;
  }
  @media (max-width: 500px) {
    bottom: 60px;
    right: -5px;
  }
`;

const Img1 = styled.img`
  width: 390px;
  height: 100%;
  object-fit: cover;
  @media (max-width: 1205px) {
    width: 36vw;
  }
  ${mediaQueries.tablet} {
    width: 305px;
  }
  @media (max-width: 750px) {
    width: 70vw;
  }
  @media (max-width: 600px) {
    width: 80vw;
  }
  ${mediaQueries.largeMobile} {
    width: 266px;
  }
`;

const Img2 = styled.img`
  width: 410px;
  height: 100%;
  object-fit: cover;
  @media (max-width: 1205px) {
    width: 45vw;
  }
  @media (max-width: 750px) {
    width: 70vw;
  }
  @media (max-width: 600px) {
    width: 75vw;
  }
  ${mediaQueries.largeMobile} {
    width: 266px;
  }
`;

const Img3 = styled.img`
  width: 520px;
  height: 100%;
  object-fit: cover;
  @media (max-width: 1205px) {
    width: 65vw;
  }
  @media (max-width: 750px) {
    width: 70vw;
  }
  @media (max-width: 600px) {
    width: 80vw;
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
  z-index: -1;
  @media (max-width: 1205px) {
    z-index: 10;
  }
`;

const PopUpWrapper3 = styled(PopUpWrapper)`
  @media (max-width: 1205px) {
    z-index: 11;
  }
`;
