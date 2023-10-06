import { trackGoal } from "fathom-client";
import React, { useState } from "react";
import { ContentWrapper, SectionWrapper } from "src/components/base";
import {
  BrowserWindow,
  BrowserWindowGradient,
} from "src/components/base/BrowserWindow";
import Folder from "src/components/base/Folder";
import GlowText from "src/components/base/GlowText";
import { useDeviceSize } from "src/utils";
import { useWindowSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import styled, { useTheme } from "styled-components";

import { Heading1, LargeBody, LargeBodyBold } from "../../styles";

import { Years, Year } from "./constants";

const History: React.FC = () => {
  const [folderOpenState, setFolderOpenState] = useState<Year>(Years[8]);

  const theme = useTheme();
  const IsMobile = (pixels: number) => {
    const { windowWidth } = useWindowSize();
    if (windowWidth === undefined) {
      return windowWidth;
    }
    return windowWidth <= pixels;
  };
  const isMobile = IsMobile(767);
  const isTablet = useDeviceSize("tablet");
  const isMedium = useDeviceSize("medium");

  const handleFolderClick = (folder: Year) => {
    setFolderOpenState(folder);
    trackGoal(folder.fathomEventCode, 0); // History: 20XX Folder Click
  };

  const ImageWindow: React.FC<ImageWindowProps> = ({
    gradientStartColor,
    gradientEndColor,
    source,
    orientation,
    top,
    left,
    order,
    alt,
  }) => {
    return (
      <WindowAnimation top={top} left={left} order={order}>
        <BrowserWindow
          gradientStartColor={gradientStartColor}
          gradientEndColor={gradientEndColor}
        >
          <BrowserImageContainer orientation={orientation}>
            <GradientOverlay
              gradientStartColor={gradientStartColor}
              gradientEndColor={gradientEndColor}
            />
            <BrowserImage src={source} alt={alt} loading="lazy" />
          </BrowserImageContainer>
        </BrowserWindow>
      </WindowAnimation>
    );
  };

  const TextWindow: React.FC<TextWindowProps> = ({
    gradientStartColor,
    gradientEndColor,
    year,
    description,
    top,
    left,
    order,
  }) => {
    return (
      <TextWindowWrapper>
        <WindowAnimation top={top} left={left} order={order}>
          <BrowserWindowGradient
            gradientStartColor={gradientStartColor}
            gradientEndColor={gradientEndColor}
          >
            <BrowserTextContainer>
              <LargeBodyBold style={{ color: theme.colors.text.dark.white }}>
                ► {year}
              </LargeBodyBold>
              <LargeBody style={{ color: theme.colors.text.dark.gray }}>
                {description[0]}
              </LargeBody>
              <LargeBody
                style={{
                  color: theme.colors.text.dark.gray,
                  marginTop: "-16px",
                }}
              >
                {description[1]}
              </LargeBody>
            </BrowserTextContainer>
          </BrowserWindowGradient>
        </WindowAnimation>
      </TextWindowWrapper>
    );
  };

  return (
    <StyledSectionWrapper>
      <ContentWrapper>
        <HeadingContainer>
          <StyledHeading1>
            A look at our{" "}
            <GlowText color={theme.colors.primary.pink}>history</GlowText>
          </StyledHeading1>
        </HeadingContainer>
        <SubHeadingContainer>
          <SubHeading>
            Hack the North hits double digits! In 2023, we&apos;re celebrating
            the 10th Hack the North.{!isTablet && <br />}
            {isTablet && " "}
            Let&apos;s look back at some highlights from past events:
          </SubHeading>
        </SubHeadingContainer>
        <ContentContainer>
          <YearContainer>
            <YearContainerBackground />
            {Years.map((year, index) => {
              return (
                <FolderWrapper
                  key={index}
                  onClick={() => handleFolderClick(year)}
                >
                  <Folder
                    year={year}
                    isOpen={folderOpenState === year ? true : false}
                  />
                  <FolderYear>{year.year}</FolderYear>
                </FolderWrapper>
              );
            })}
          </YearContainer>
          <WindowContainer>
            <TextWindow
              gradientStartColor={folderOpenState.gradientStart}
              gradientEndColor={folderOpenState.gradientEnd}
              year={folderOpenState.year}
              description={folderOpenState.description}
              top={
                isMobile
                  ? folderOpenState.top.isMobile
                  : isTablet
                  ? folderOpenState.top.isTablet
                  : isMedium
                  ? folderOpenState.top.isMedium
                  : folderOpenState.top.isDesktop
              }
              left={
                isMobile
                  ? folderOpenState.left.isMobile
                  : isTablet
                  ? folderOpenState.left.isTablet
                  : isMedium
                  ? folderOpenState.left.isMedium
                  : folderOpenState.left.isDesktop
              }
              order={folderOpenState.order}
            />
            {folderOpenState.images.map((image, index) => {
              return (
                <ImageWindow
                  key={index}
                  source={String(image.source)}
                  gradientStartColor={folderOpenState.gradientStart}
                  gradientEndColor={folderOpenState.gradientEnd}
                  orientation={image.orientation}
                  top={
                    isMobile
                      ? image.top.isMobile
                      : isTablet
                      ? image.top.isTablet
                      : isMedium
                      ? image.top.isMedium
                      : image.top.isDesktop
                  }
                  left={
                    isMobile
                      ? image.left.isMobile
                      : isTablet
                      ? image.left.isTablet
                      : isMedium
                      ? image.left.isMedium
                      : image.left.isDesktop
                  }
                  order={image.order}
                  alt={image.alt}
                />
              );
            })}
          </WindowContainer>
        </ContentContainer>
      </ContentWrapper>
    </StyledSectionWrapper>
  );
};

const StyledSectionWrapper = styled(SectionWrapper)`
  margin-bottom: 150px;
  ${mediaQueries.medium} {
    margin-bottom: 125px;
  }
  ${mediaQueries.tablet} {
    margin-top: 48px;
    margin-bottom: 100px;
    max-width: 774.5px;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    margin-bottom: 750px;
  }
  ${mediaQueries.largeMobile} {
    margin-bottom: 750px;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
  margin-bottom: 24px;
  ${mediaQueries.tablet} {
    margin-bottom: 12px;
  }
`;

const StyledHeading1 = styled(Heading1)`
  text-align: center;
  ${mediaQueries.tablet} {
    font-size: 48px;
  }
  ${mediaQueries.largeMobile} {
    font-size: 24px;
  }
`;

const SubHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubHeading = styled(LargeBody)`
  text-align: center;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.text.dark.gray};
  ${mediaQueries.tablet} {
    font-size: 20px;
  }
  @media screen and (min-width: 600px) and (max-width: 767px) {
    max-width: 500px;
  }
  @media screen and (min-width: 425px) and (max-width: 600px) {
    max-width: 358px;
  }
  ${mediaQueries.largeMobile} {
    font-size: 16px;
    max-width: 358px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 94px;
  margin-top: 56px;
  padding: 140px 0;
  @media screen and (min-width: 1065px) and (max-width: 1220px) {
    gap: 29px;
    padding: 140px 20px;
  }
  @media screen and (min-width: 1025px) and (max-width: 1065px) {
    gap: 10px;
    padding: 140px 10px;
  }
  @media screen and (min-width: 980px) and (max-width: 1025px) {
    gap: 94px;
    padding: 140px 0px 140px 45px;
  }
  @media screen and (min-width: 900px) and (max-width: 980px) {
    gap: 65px;
    padding: 140px 0px 140px 20px;
  }
  @media screen and (min-width: 834px) and (max-width: 900px) {
    gap: 34px;
    padding: 140px 0;
  }
  ${mediaQueries.tablet} {
    gap: 29px;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    padding: 0;
  }
  ${mediaQueries.largeMobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    padding: 0;
  }
`;

const WindowContainer = styled.div`
  position: relative;
`;

const YearContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-content: space-between;
  height: 445px;
  width: 397px;
  @media screen and (min-width: 1100px) and (max-width: 1160px) {
    height: 400px;
    width: 330px;
  }
  @media screen and (min-width: 1025px) and (max-width: 1100px) {
    height: 370px;
    width: 290px;
  }
  ${mediaQueries.medium} {
    height: 342px;
    width: 320px;
  }
  ${mediaQueries.tablet} {
    height: 272px;
    width: 260px;
  }
  @media screen and (min-width: 450px) and (max-width: 767px) {
    height: 342px;
    width: 320px;
  }
`;

const YearContainerBackground = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.08);
  filter: blur(100px);
  will-change: filter;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const FolderWrapper = styled.div`
  width: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  ${mediaQueries.largeMobile} {
    width: 60px;
  }
`;

const FolderYear = styled(LargeBodyBold)`
  margin-top: 8px;
  line-height: 32px;
  user-select: none;
  color: ${({ theme }) => theme.colors.text.dark.white};
`;

interface GradientProps {
  gradientStartColor: string;
  gradientEndColor: string;
}

interface PositionProps {
  top: string;
  left: string;
  order: number;
}

type TextWindowProps = GradientProps &
  PositionProps & {
    year: string;
    description: string[];
  };

type ImageWindowProps = GradientProps &
  PositionProps & {
    source: string;
    orientation: string;
    alt: string;
  };

const TextWindowWrapper = styled.div`
  position: absolute;
  z-index: 10;
`;

const WindowAnimation = styled.div<PositionProps>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: scale(0);
  animation: scaleUp 0.9s 1 forwards;
  animation-delay: ${(props) => `${props.order * 0.3}s`};

  @keyframes scaleUp {
    0% {
      transform: scale(0);
    }
    70% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const BrowserTextContainer = styled.div`
  position: relative;
  width: 353px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 2;
  line-height: 32px;
  ${mediaQueries.medium} {
    width: 260px;
    padding: 24px;
  }
`;

interface ImageOrientation {
  orientation: string;
}

const BrowserImageContainer = styled.div<ImageOrientation>`
  position: relative;
  width: ${(props) => (props.orientation === "vertical" ? 334 : 428)}px;
  height: ${(props) => (props.orientation === "vertical" ? 403 : 267)}px;
  ${mediaQueries.medium} {
    width: 266px;
    height: ${(props) => (props.orientation === "vertical" ? 354 : 188)}px;
  }
`;

const GradientOverlay = styled.div<GradientProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    ${(props) => props.gradientStartColor},
    ${(props) => props.gradientEndColor}
  );
  opacity: 0.2;
`;

const BrowserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default History;
