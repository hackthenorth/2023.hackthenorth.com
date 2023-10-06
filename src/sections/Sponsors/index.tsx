import React from "react";
import {
  GearGlowCyan,
  GearGlowOrange,
  LongRectGlowBlue,
  LongRectGlowFushia,
  LongRectGlowOrange,
  LongRectGlowPurple,
  LongRectGlowPurple2,
  LongRectGlowYellow,
  RectGlowCyan,
  RectGlowFushia,
  RectGlowYellow,
  SquareGlowCyan,
  SquareGlowCyan2,
  SquareGlowCyan3,
  SquareGlowYellow,
  StarGlowCyan,
  StarGlowPurple,
  StarGlowYellow,
  StarGlowYellow2,
} from "src/assets/img";
import { ContentWrapper, SectionWrapper } from "src/components/base";
import Button from "src/components/base/Button";
import GlowText from "src/components/base/GlowText";
import { SectionId } from "src/constants";
import { mediaQueries } from "src/utils";
import { useWindowSize } from "src/utils";
import styled, { keyframes, useTheme } from "styled-components";

import { Heading1, LargeBody, LargeBodyBold } from "../../styles";

import {
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  startUps,
  partners,
} from "./sponsors";
import SponsorsCarousel from "./SponsorsCarousel";

const Sponsors: React.FC = () => {
  const theme = useTheme();

  const CheckDeviceSize = (pixels: number) => {
    const { windowWidth } = useWindowSize();
    if (windowWidth === undefined) {
      return windowWidth;
    }
    return windowWidth <= pixels;
  };

  const isTablet = CheckDeviceSize(1200);
  const isMobile = CheckDeviceSize(700);

  //calculateRGBA splits the gradient into several parts (solid purple, gradient, solid blue)
  //value is the current vertical index
  const calculateRGBA = (value: number, arrayLength: number) => {
    const firstGradient = Math.floor((arrayLength - 1) / 3);

    const secondGradient =
      firstGradient > 0 ? arrayLength - firstGradient - 1 : arrayLength - 1;

    if (firstGradient === secondGradient) {
      return [`rgba(137, 107, 255, 1)`, `rgba(25, 251, 255)`];
    }

    if (value === firstGradient) {
      return [`rgba(137, 107, 255, 1)`, `rgba(31, 166, 255, 1)`];
    } else if (value < firstGradient) {
      return [`rgba(137, 107, 255, 1)`, `rgba(137, 107, 255, 1)`];
    } else if (value > firstGradient && value < secondGradient) {
      return [`rgba(31, 166, 255, 1)`, `rgba(31, 166, 255, 1)`];
    } else if (value === secondGradient) {
      return [`rgba(31, 166, 255, 1)`, `rgba(25, 251, 255)`];
    } else {
      return [`rgba(25, 251, 255)`, `rgba(25, 251, 255)`];
    }
  };

  return (
    <StyledSectionWrapper id={SectionId.SPONSORS}>
      <StarGlowCyanIcon
        alt="Star glow cyan"
        src={StarGlowCyan}
        loading="lazy"
      />
      <SquareGlowYellowIcon
        alt="Square glow yellow"
        src={SquareGlowYellow}
        loading="lazy"
      />
      <SquareGlowCyanIcon
        alt="Square glow blue"
        src={SquareGlowCyan}
        loading="lazy"
      />
      <LongRectGlowYellowIcon
        alt="Long rectangle glow yellow"
        src={LongRectGlowYellow}
        loading="lazy"
      />
      <GearGlowCyanIcon
        alt="Gear glow cyan"
        src={GearGlowCyan}
        loading="lazy"
      />
      <LongRectGlowPurpleIcon
        alt="Long rectangle glow purple"
        src={LongRectGlowPurple}
        loading="lazy"
      />
      <StarGlowYellowIcon
        alt="Star glow orange"
        src={StarGlowYellow}
        loading="lazy"
      />
      <RectGlowCyanIcon
        alt="Rectangle glow cyan"
        src={RectGlowCyan}
        loading="lazy"
      />
      <LongRectGlowFushiaIcon
        alt="Long rectangle glow fushia"
        src={LongRectGlowFushia}
        loading="lazy"
      />
      <RectGlowYellowIcon
        alt="Rectangle glow yellow"
        src={RectGlowYellow}
        loading="lazy"
      />
      <StarGlowYellow2Icon
        alt="Star glow yellow"
        src={StarGlowYellow2}
        loading="lazy"
      />
      <LongRectGlowBlueIcon
        alt="Long rectangle glow blue"
        src={LongRectGlowBlue}
        loading="lazy"
      />
      <SquareGlowCyan2Icon
        alt="Square glow cyan"
        src={SquareGlowCyan2}
        loading="lazy"
      />
      <RectGlowFushiaIcon
        alt="Rectangle glow purple"
        src={RectGlowFushia}
        loading="lazy"
      />
      <SquareGlowCyan3Icon
        alt="Square glow cyan"
        src={SquareGlowCyan3}
        loading="lazy"
      />
      <LongRectGlowOrangeIcon
        alt="Long rectangle glow orange"
        src={LongRectGlowOrange}
        loading="lazy"
      />
      <LongRectGlowPurple2Icon
        alt="Long rectangle glow purple"
        src={LongRectGlowPurple2}
        loading="lazy"
      />
      <StarGlowPurpleIcon
        alt="Star glow purple"
        src={StarGlowPurple}
        loading="lazy"
      />
      <GearGlowOrangeIcon
        alt="Gear glow orange"
        src={GearGlowOrange}
        loading="lazy"
      />
      <StyledContentWrapper>
        <HeadingContainer>
          <StyledHeading1>
            Sponsor a{" "}
            <GlowText color={theme.colors.primary.blue}>special</GlowText>{" "}
            weekend
          </StyledHeading1>
        </HeadingContainer>
        <SummaryContainer>
          <SummaryTextContainer>
            <LargeBodyWhite>
              Each year, our sponsors help us unite thousands of emerging
              developers, designers, and builders. Hackers make lasting
              connections with our sponsors that extend past just our hackathon
              weekend. Stay tuned as we confirm more sponsors for the event.
            </LargeBodyWhite>
          </SummaryTextContainer>
          <Button
            gradientStartColor="rgba(25, 251, 255, 0.5)"
            gradientEndColor="rgba(31, 166, 255, 0.5)"
            hoverGradientStartColor="rgba(25, 251, 255, 0.75)"
            hoverGradientEndColor="rgba(31, 166, 255, 0.75)"
            boxShadow={theme.colors.primary.cyan}
            width={240}
            aria-label="Become a sponsor"
          >
            <LargeBodyBold>
              <a
                href="mailto:sponsor@hackthenorth.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Become a sponsor
              </a>
            </LargeBodyBold>
          </Button>
        </SummaryContainer>
        <SponsorsCarousel />
        <SponsorsRowsContainer>
          <SponsorsSectionDivider>
            {goldSponsors.map((value, index) => (
              <SponsorsContainer
                num={isMobile ? 342 : isTablet ? 632 : 1111}
                key={index}
              >
                <GradientBackground
                  gradientStartColor={
                    calculateRGBA(
                      Math.floor(index),
                      Math.floor(goldSponsors.length)
                    )[0]
                  }
                  gradientEndColor={
                    calculateRGBA(
                      Math.floor(index),
                      Math.floor(goldSponsors.length)
                    )[1]
                  }
                  height={isMobile ? 127.55 : isTablet ? 277.02 : 194}
                >
                  <WhiteBackgroundContainer
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    height={isMobile ? 127.55 : isTablet ? 277.02 : 194}
                  >
                    <SponsorImage
                      alt={value.alt}
                      src={value.src}
                      title={value.title}
                      width={410}
                      loading="lazy"
                    />
                  </WhiteBackgroundContainer>
                </GradientBackground>
              </SponsorsContainer>
            ))}
          </SponsorsSectionDivider>
          <SponsorsSectionDivider>
            {silverSponsors.map((value, index) => (
              <SponsorsContainer
                num={
                  (isTablet && !isMobile && 304) || (isMobile && 164) || 531.5
                }
                key={index}
              >
                <GradientBackground
                  gradientStartColor={
                    calculateRGBA(
                      Math.floor(index / 2),
                      Math.ceil(silverSponsors.length / 2)
                    )[0]
                  }
                  gradientEndColor={
                    calculateRGBA(
                      Math.floor(index / 2),
                      Math.ceil(silverSponsors.length / 2)
                    )[1]
                  }
                  height={isMobile ? 111.06 : isTablet ? 241.2 : 194}
                >
                  <WhiteBackgroundContainer
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    height={isMobile ? 111.06 : isTablet ? 241.2 : 194}
                  >
                    <SponsorImage
                      alt={value.alt}
                      src={value.src}
                      title={value.title}
                      loading="lazy"
                    />
                  </WhiteBackgroundContainer>
                </GradientBackground>
              </SponsorsContainer>
            ))}
          </SponsorsSectionDivider>
          <SponsorsSectionDivider>
            {bronzeSponsors.map((value, index) => (
              <SponsorsContainer
                num={isMobile ? 105.33 : isTablet ? 194.67 : 338.33}
                key={index}
              >
                <GradientBackground
                  gradientStartColor={
                    calculateRGBA(
                      Math.floor(index / 3),
                      Math.ceil(bronzeSponsors.length / 3)
                    )[0]
                  }
                  gradientEndColor={
                    calculateRGBA(
                      Math.floor(index / 3),
                      Math.ceil(bronzeSponsors.length / 3)
                    )[1]
                  }
                  height={isMobile ? 64.69 : isTablet ? 140.5 : 194}
                >
                  <WhiteBackgroundContainer
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    height={isMobile ? 64.69 : isTablet ? 140.5 : 194}
                  >
                    <SponsorImage
                      alt={value.alt}
                      src={value.src}
                      title={value.title}
                      loading="lazy"
                    />
                  </WhiteBackgroundContainer>
                </GradientBackground>
              </SponsorsContainer>
            ))}
          </SponsorsSectionDivider>
          <SponsorsSectionDivider>
            {startUps.map((value, index) => (
              <SponsorsContainer
                num={isMobile ? 76 : isTablet ? 140 : 241.75}
                key={index}
              >
                <GradientBackground
                  gradientStartColor={
                    calculateRGBA(
                      Math.floor(index / 4),
                      Math.ceil(startUps.length / 4)
                    )[0]
                  }
                  gradientEndColor={
                    calculateRGBA(
                      Math.floor(index / 4),
                      Math.ceil(startUps.length / 4)
                    )[1]
                  }
                  height={isMobile ? 60.81 : isTablet ? 132.07 : 194}
                >
                  <WhiteBackgroundContainer
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    height={isMobile ? 60.81 : isTablet ? 132.07 : 194}
                  >
                    <SponsorImage
                      alt={value.alt}
                      src={value.src}
                      title={value.title}
                      loading="lazy"
                    />
                  </WhiteBackgroundContainer>
                </GradientBackground>
              </SponsorsContainer>
            ))}
          </SponsorsSectionDivider>
        </SponsorsRowsContainer>
        <EndTextContainer>
          <StyledHeading1 style={{ marginBottom: "24px" }}>
            ...and more to come
          </StyledHeading1>
        </EndTextContainer>
        <OurPartnersContainer>
          <StyledHeading1>
            Our{" "}
            <GlowText color={theme.colors.primary.purple}>partners</GlowText>
          </StyledHeading1>
        </OurPartnersContainer>
        <SponsorsRowsContainer style={{ marginBottom: "64px" }}>
          <SponsorsSectionDivider>
            {partners.map((value, index) => (
              <SponsorsContainer
                num={
                  (isTablet && !isMobile && 140) ||
                  (isMobile && 63.75) ||
                  241.75
                }
                key={index}
              >
                <GradientBackground
                  gradientStartColor={
                    calculateRGBA(
                      Math.floor(index / 4),
                      Math.ceil(partners.length / 4)
                    )[0]
                  }
                  gradientEndColor={
                    calculateRGBA(
                      Math.floor(index / 4),
                      Math.ceil(partners.length / 4)
                    )[1]
                  }
                  height={isMobile ? 60.81 : isTablet ? 132.07 : 194}
                >
                  <WhiteBackgroundContainer
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    height={isMobile ? 60.81 : isTablet ? 132.07 : 194}
                  >
                    <SponsorImage
                      alt={value.alt}
                      src={value.src}
                      title={value.title}
                      loading="lazy"
                    />
                  </WhiteBackgroundContainer>
                </GradientBackground>
              </SponsorsContainer>
            ))}
          </SponsorsSectionDivider>
        </SponsorsRowsContainer>
      </StyledContentWrapper>
    </StyledSectionWrapper>
  );
};

const StyledSectionWrapper = styled(SectionWrapper)`
  background-color: #2a2a4f;
  padding-top: 64px;
  ${mediaQueries.largeMobile} {
    padding-top: 24px;
  }
`;

const StyledContentWrapper = styled(ContentWrapper)`
  padding-bottom: 128px;
  @media screen and (min-width: 425px) and (max-width: 700px) {
    padding-bottom: 48px;
  }
  ${mediaQueries.largeMobile} {
    padding-bottom: 48px;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
  margin-bottom: 24px;
  margin-top: 64px;
  text-align: center;
  ${mediaQueries.medium} {
    margin-bottom: 16px;
  }
  ${mediaQueries.tablet} {
    margin-top: 0;
  }
`;

const StyledHeading1 = styled(Heading1)`
  align-text: center;
  ${mediaQueries.largeMobile} {
    font-size: 24px;
  }
`;

const LargeBodyWhite = styled(LargeBody)`
  color: ${({ theme }) => theme.colors.text.light.white};
  text-align: center;
  ${mediaQueries.medium} {
    font-size: 20px;
  }
  ${mediaQueries.largeMobile} {
    font-size: 16px;
  }
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 72px;
  ${mediaQueries.largeMobile} {
    margin-bottom: 48px;
  }
`;

const SummaryTextContainer = styled.div`
  display: flex;
  max-width: 896px;
  margin-bottom: 72px;
  ${mediaQueries.medium} {
    max-width: 738px;
    margin-bottom: 24px;
  }
  ${mediaQueries.tablet} {
    max-width: 632px;
  }
  @media screen and (min-width: 425px) and (max-width: 700px) {
    max-width: 400px;
  }
  ${mediaQueries.largeMobile} {
    max-width: 342px;
  }
`;

const SponsorsRowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 825px) and (max-width: 1200px) {
    gap: 26px;
  }
  ${mediaQueries.medium} {
    gap: 26px;
  }
  ${mediaQueries.largeMobile} {
    gap: 12px;
  }
`;

//change name
const SponsorsSectionDivider = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 48px;
  column-gap: 48px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    row-gap: 26px;
    column-gap: 24px;
    max-width: 642px;
  }
  ${mediaQueries.medium} {
    row-gap: 26px;
    column-gap: 24px;
    max-width: 642px;
  }
  @media screen and (min-width: 425px) and (max-width: 700px) {
    row-gap: 20px;
    column-gap: 12px;
    max-width: 351px;
  }
  ${mediaQueries.largeMobile} {
    row-gap: 12px;
    column-gap: 12px;
    max-width: 342px;
  }
`;

const SponsorsContainer = styled.div<{ num: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.num}px;
`;

const GradientBackground = styled.div<{
  gradientStartColor: string;
  gradientEndColor: string;
  height: number;
}>`
  display: flex;
  width: inherit;
  height: ${(props) => props.height}px;
  background: linear-gradient(
    180deg,
    ${(props) => props.gradientStartColor},
    ${(props) => props.gradientEndColor}
  );
`;

const WhiteBackgroundContainer = styled.a<{ height: number }>`
  display: flex;
  width: inherit;
  height: ${(props) => props.height}px;
  background-color: white;
  justify-content: center;
  align-items: center;
  left: 10px;
  bottom: 10px;
  position: relative;
  scale: 1;
  transition: scale 0.1s ease-in-out;
  &:hover,
  &:focus {
    scale: 1.1;
  }
  @media screen and (max-width: 1200px) {
    &:hover,
    &:focus {
      scale: 1;
    }
  }
  ${mediaQueries.medium} {
    left: 6px;
    bottom: 6px;
  ${mediaQueries.tablet} {
    left: 5px;
    bottom: 5px;
  }
  ${mediaQueries.largeMobile} {
    left: 4px;
    bottom: 4px;
  }
`;

const SponsorImage = styled.img`
  max-width: 80%;
  max-height: 80%;
`;

const EndTextContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
  text-align: center;
  margin-bottom: 72px;
  margin-top: 72px;
  ${mediaQueries.tablet} {
    margin-top: 48px;
    margin-bottom: 0;
  }
`;

const OurPartnersContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
  margin-bottom: 72px;
  margin-top: 64px;
  text-align: center;
  ${mediaQueries.tablet} {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

const Icons = styled.img`
  position: absolute;

  ${mediaQueries.large} {
    display: none;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinIcons = styled(Icons)`
  transition: transform 0.7s ease-in-out;
  &:hover {
    animation: ${rotate} 1s linear;
    transform: rotate(360deg);
  }
`;

const StarGlowCyanIcon = styled(SpinIcons)`
  margin-right: 15vw;
  right: 0;
`;

const SquareGlowYellowIcon = styled(Icons)`
  top: 230px;
  margin-right: 7vw;
  right: 0;
`;

const SquareGlowCyanIcon = styled(Icons)`
  top: 340px;
  margin-left: 6.5vw;
  @media screen and (min-width: 1440px) and (max-width: 1600px) {
    margin-left: 0vw;
  }
  @media screen and (min-width: 1600px) and (max-width: 1800px) {
    margin-left: 2vw;
  }
`;

const LongRectGlowYellowIcon = styled(Icons)`
  top: 500px;
  margin-left: 8.5vw;
  @media screen and (min-width: 1440px) and (max-width: 1600px) {
    margin-left: 1vw;
  }
  @media screen and (min-width: 1600px) and (max-width: 1800px) {
    margin-left: 4vw;
  }
`;

const GearGlowCyanIcon = styled(SpinIcons)`
  top: 1010px;
  margin-left: 3vw;
  @media only screen and (min-width: 1440px) and (max-width: 1600px) {
    margin-left: 1vw;
  }
`;

const LongRectGlowPurpleIcon = styled(Icons)`
  top: 1470px;
  margin-right: 3vw;
  right: 0;
  @media only screen and (min-width: 1440px) and (max-width: 1600px) {
    margin-right: -8vw;
  }
  @media only screen and (min-width: 1600px) and (max-width: 1800px) {
    margin-right: -2vw;
  }
`;

const StarGlowYellowIcon = styled(SpinIcons)`
  top: 2165px;
  margin-right: 9vw;
  right: 0;
  @media only screen and (min-width: 1440px) and (max-width: 1600px) {
    margin-right: 1vw;
  }
  @media only screen and (min-width: 1600px) and (max-width: 1800px) {
    margin-right: 4vw;
  }
`;

const RectGlowCyanIcon = styled(Icons)`
  top: 2525px;
  margin-right: 3vw;
  right: 0;
  @media only screen and (min-width: 1440px) and (max-width: 1600px) {
    margin-right: -2vw;
  }
  @media only screen and (min-width: 1600px) and (max-width: 1800px) {
    margin-right: 4vw;
  }
`;

const LongRectGlowFushiaIcon = styled(Icons)`
  top: 2860px;
  margin-left: 6vw;
  @media only screen and (min-width: 1440px) and (max-width: 1600px) {
    margin-left: 0;
  }
  @media only screen and (min-width: 1600px) and (max-width: 1800px) {
    margin-right: 4vw;
  }
`;

const RectGlowYellowIcon = styled(Icons)`
  top: 3570px;
  margin-left: 9vw;
  @media only screen and (min-width: 1440px) and (max-width: 1600px) {
    margin-left: 1vw;
  }
  @media only screen and (min-width: 1600px) and (max-width: 1800px) {
    margin-right: 4vw;
  }
`;

const StarGlowYellow2Icon = styled(SpinIcons)`
  top: 3670px;
  margin-right: 1.5vw;
  right: 0;
`;

const LongRectGlowBlueIcon = styled(Icons)`
  top: 3880px;
  margin-right: 7vw;
  right: 0;
`;

const SquareGlowCyan2Icon = styled(Icons)`
  top: 4190px;
  margin-right: 13vw;
  right: 0;
`;

const RectGlowFushiaIcon = styled(Icons)`
  top: 4350px;
  margin-left: 13vw;
`;

const SquareGlowCyan3Icon = styled(Icons)`
  top: 4550px;
  margin-left: 4vw;
`;

const LongRectGlowOrangeIcon = styled(Icons)`
  top: 4650px;
  margin-left: 8vw;
  @media only screen and (min-width: 1440px) and (max-width: 1600px) {
    margin-left: 6vw;
  }
`;

const LongRectGlowPurple2Icon = styled(Icons)`
  top: 5100px;
  margin-right: 10vw;
  right: 0;
  @media only screen and (min-width: 1440px) and (max-width: 1600px) {
    margin-right: 4vw;
  }
`;

const StarGlowPurpleIcon = styled(SpinIcons)`
  top: 5470px;
  margin-right: 2.5vw;
  right: 0;
`;

const GearGlowOrangeIcon = styled(SpinIcons)`
  top: 5700px;
  margin-right: 11vw;
  right: 0;
`;

export default Sponsors;
