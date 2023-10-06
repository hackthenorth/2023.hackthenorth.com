import React, { useEffect, useState } from "react";
import {
  Collaboration,
  Connection,
  Dreaming,
  Friendship,
  Learning,
} from "src/assets/img";
import {
  ContentWrapper,
  SectionWrapper,
  BrowserWindow,
} from "src/components/base";
import { SectionId } from "src/constants";
import { useDeviceSize, useWindowSize } from "src/utils";
import styled, { useTheme } from "styled-components";

import About from "./About";
import { Column, GradientOverlay } from "./Constants";
import FullPageScroller from "./FullPageScroller";
import Heading from "./Heading";
import SignUpBrowser from "./SignUpBrowser";
import YouBelongInTech from "./YouBelongInTech";

const Hero: React.FC = () => {
  const theme = useTheme();
  const { windowWidth } = useWindowSize();
  const [glitchOn, setGlitchOn] = useState(true);
  const isUltraWide = windowWidth && windowWidth > 1440;
  useEffect(() => {
    const timeoutId = setTimeout(() => setGlitchOn(false), 1710);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <SectionWrapper id={SectionId.HERO}>
      <ContentWrapper
        style={{
          maxWidth: glitchOn && !isUltraWide ? "100vw" : "1200px",
        }}
      >
        {!useDeviceSize("tablet") ? (
          <FullPageScroller Background={Heading}>
            <SignUpBrowser />
            <LeftImgContainer style={{ paddingLeft: "30px" }}>
              <BrowserWindow
                gradientStartColor={theme.colors.primary.blue}
                gradientEndColor={theme.colors.primary.purple}
              >
                <div style={{ position: "relative" }}>
                  <GradientOverlay
                    gradientStartColor={theme.colors.primary.blue}
                    gradientEndColor={theme.colors.primary.purple}
                  />
                  <img
                    src={Friendship}
                    alt="Three hackers pose for a selfie in front of a banner showing the Hack the North logo"
                    style={{
                      width: "496px",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </BrowserWindow>
            </LeftImgContainer>
            <RightImgContainer style={{ paddingRight: "20px" }}>
              <BrowserWindow
                gradientStartColor={theme.colors.primary.yellow}
                gradientEndColor={theme.colors.primary.orange}
              >
                <div style={{ position: "relative" }}>
                  <GradientOverlay
                    gradientStartColor={theme.colors.primary.yellow}
                    gradientEndColor={theme.colors.primary.orange}
                  />
                  <img
                    src={Learning}
                    alt="Hackers sitting at tables with their laptops"
                    style={{
                      width: "480px",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </BrowserWindow>
            </RightImgContainer>
            <LeftImgContainer style={{ paddingLeft: "20px" }}>
              <BrowserWindow
                gradientStartColor={theme.colors.primary.orange}
                gradientEndColor={theme.colors.primary.pink}
              >
                <div style={{ position: "relative" }}>
                  <GradientOverlay
                    gradientStartColor={theme.colors.primary.orange}
                    gradientEndColor={theme.colors.primary.pink}
                  />
                  <img
                    src={Collaboration}
                    alt="Two hackers consult a mentor for assistance at the Mentor Hub"
                    style={{
                      width: "496px",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </BrowserWindow>
            </LeftImgContainer>
            <RightImgContainer>
              <BrowserWindow
                gradientStartColor={theme.colors.primary.cyan}
                gradientEndColor={theme.colors.primary.blue}
              >
                <div style={{ position: "relative" }}>
                  <GradientOverlay
                    gradientStartColor={theme.colors.primary.cyan}
                    gradientEndColor={theme.colors.primary.blue}
                  />
                  <img
                    src={Connection}
                    alt="Hackers gathered in the sponsor bay"
                    style={{
                      width: "510px",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </BrowserWindow>
            </RightImgContainer>
            <LeftImgContainer>
              <BrowserWindow
                gradientStartColor={theme.colors.primary.pink}
                gradientEndColor={theme.colors.primary.purple}
              >
                <div style={{ position: "relative" }}>
                  <GradientOverlay
                    gradientStartColor={theme.colors.primary.pink}
                    gradientEndColor={theme.colors.primary.purple}
                  />
                  <img
                    src={Dreaming}
                    alt="Two hackers present a project on stage"
                    style={{
                      width: "540px",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </BrowserWindow>
            </LeftImgContainer>
            <LastContainer>
              <SignUpBrowser />
            </LastContainer>
          </FullPageScroller>
        ) : (
          <Column>
            <Heading currentStepIndex={0} />
            <SignUpBrowser />
          </Column>
        )}
        <About />
        <YouBelongInTech />
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default Hero;

const LeftImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
`;

const RightImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: right;
`;

const LastContainer = styled(Column)`
  padding-top: 270px;
`;
