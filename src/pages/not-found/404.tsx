import React from "react";
import {
  BlueGearImg,
  BlueGear2Img,
  BlueVectorImg,
  BlueVector2Img,
  ComputerImg,
  CyanSquareImg,
  CyanVectorImg,
  FushiaStarImg,
  FushiaVectorImg,
  OrangeVectorImg,
  PurpleStar2Img,
  PurpleStarImg,
  PurpleVectorImg,
  PurpleVector2Img,
  YellowVectorImg,
} from "src/assets/img";
import { Navbar } from "src/components";
import { ContentWrapper, Layout, SectionWrapper } from "src/components/base";
import { SponsorLink } from "src/components/base";
import { Heading1 } from "src/styles";
import { mediaQueries, useDeviceSize } from "src/utils";
import styled, { keyframes } from "styled-components";

const NotFoundPage: React.FC = () => {
  const isTablet = useDeviceSize("tablet");
  return (
    <Layout>
      <Navbar />
      <SectionWrapper>
        <ContentWrapper>
          <Wrapper>
            <TextWrapper>
              <StyledWhiteHeading1>
                Whoops!
                {!isTablet && <GradientHeading>Whoops!</GradientHeading>}
              </StyledWhiteHeading1>
              <WhiteHeading1 style={{ marginTop: "-10px" }}>
                looks like this page doesn&#8217;t exist...
              </WhiteHeading1>
              <StyledLinkWrapper>
                <SponsorLink href="https://hackthenorth.com">
                  Back to Home Page
                </SponsorLink>
              </StyledLinkWrapper>
            </TextWrapper>
            <StyledComputer alt="Computer logo" src={ComputerImg} />
          </Wrapper>
        </ContentWrapper>
        <CyanIcon
          src={CyanVectorImg}
          alt="Cyan rectangle icon"
          loading="lazy"
        />
        <BlueIcon
          src={BlueVectorImg}
          alt="Blue rectangle icon"
          loading="lazy"
        />
        <PurpleIcon
          src={PurpleVectorImg}
          alt="Purple glow rectangle icon"
          loading="lazy"
        />
        <CyanSquareIcon
          src={CyanSquareImg}
          alt="Cyan square icon"
          loading="lazy"
        />
        <BlueGearIcon src={BlueGearImg} alt="Blue gear icon" loading="lazy" />
        <PurpleStarIcon
          src={PurpleStarImg}
          alt="Purple star icon"
          loading="lazy"
        />
        <CyanSquare2Icon
          src={CyanSquareImg}
          alt="Cyan square icon"
          loading="lazy"
        />
        <FushiaIcon
          src={FushiaVectorImg}
          alt="Fushia rectangle icon"
          loading="lazy"
        />
        <YellowIcon
          src={YellowVectorImg}
          alt="Yellow rectangle icon"
          loading="lazy"
        />
        <FushiaStarIcon
          src={FushiaStarImg}
          alt="Fushia star icon"
          loading="lazy"
        />
        <CyanSquare3Icon
          src={CyanSquareImg}
          alt="Cyan square icon"
          loading="lazy"
        />
        <PurpleStar2Icon
          src={PurpleStar2Img}
          alt="Purple star icon"
          loading="lazy"
        />
        <CyanSquare4Icon
          src={CyanSquareImg}
          alt="Cyan square icon"
          loading="lazy"
        />
        <BlueGear2Icon
          src={BlueGear2Img}
          alt="Second blue gear icon"
          loading="lazy"
        />
        <OrangeIcon
          src={OrangeVectorImg}
          alt="Orange rectangle icon"
          loading="lazy"
        />
        <Blue2Icon
          src={BlueVector2Img}
          alt="Blue glow rectangle icon"
          loading="lazy"
        />
        <Purple2Icon
          src={PurpleVector2Img}
          alt="Purple rectangle icon"
          loading="lazy"
        />
      </SectionWrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  ${mediaQueries.tablet} {
    place-items: center;
    flex-direction: column;
  }
`;

const WhiteHeading1 = styled(Heading1)`
  color: ${({ theme }) => theme.colors.text.dark.white};
  z-index: 20;
`;

const StyledWhiteHeading1 = styled(WhiteHeading1)`
  font-size: 56px;
  ${mediaQueries.tablet} {
    background: linear-gradient(
      270deg,
      #ff2cfb 0%,
      #896bff 35.42%,
      #1fa6ff 68.75%,
      #19fbff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const GradientHeading = styled.span`
  background: linear-gradient(
    270deg,
    #ff2cfb 0%,
    #896bff 35.42%,
    #1fa6ff 68.75%,
    #19fbff 100%
  );
  filter: blur(20px);
  width: fit-content;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  left: 0;
  z-index: -20;
  @media screen and (min-width: 825px) and (max-width: 1230px) {
    margin-left: 4vw;
  }
  ${mediaQueries.tablet} {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;

  @media screen and (min-width: 825px) and (max-width: 1230px) {
    margin-left: 4vw;
  }

  ${mediaQueries.tablet} {
    place-items: center;
    text-align: center;
    width: 100%;
  }

  ${mediaQueries.mobile} {
    width: 90vw;
  }
`;

const StyledLinkWrapper = styled.div`
  margin-top: 40px;
`;

const StyledComputer = styled.img`
  scale: 0.9;
  ${mediaQueries.largeMobile} {
    width: 90%;
    height: auto;
  }
  ${mediaQueries.mobile} {
    width: 60%;
    height: auto;
  }
`;

const Icons = styled.img`
  position: absolute;
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
  z-index: 20;
  &:hover {
    animation: ${rotate} 1s linear;
    transform: rotate(360deg);
  }
  ${mediaQueries.tablet} {
    z-index: 0;
  }
`;

const CyanIcon = styled(Icons)`
  top: 100px;
  right: 0;
  ${mediaQueries.tablet} {
    width: 25%;
    height: auto;
  }
  ${mediaQueries.largeMobile} {
    top: 70px;
  }
`;

const BlueIcon = styled(Icons)`
  top: 150px;
  ${mediaQueries.tablet} {
    width: 25%;
    height: auto;
  }
  ${mediaQueries.largeMobile} {
    top: 90px;
  }
`;

const PurpleIcon = styled(Icons)`
  top: 125px;
  margin-left: 180px;
  ${mediaQueries.tablet} {
    width: 25%;
    height: auto;
    margin-left: 80px;
    top: 130px;
  }
  ${mediaQueries.largeMobile} {
    top: 80px;
    margin-left: 50px;
  }
`;

const CyanSquareIcon = styled(Icons)`
  top: 220px;
  margin-left: 100px;
  ${mediaQueries.tablet} {
    top: 420px;
    margin-left: 60px;
  }
  ${mediaQueries.largeMobile} {
    top: 140px;
    margin-left: 20px;
  }
`;

const BlueGearIcon = styled(SpinIcons)`
  top: 240px;
  margin-left: 370px;
  ${mediaQueries.tablet} {
    top: 450px;
    margin-left: 100px;
  }
  ${mediaQueries.largeMobile} {
    top: 270px;
    margin-left: 25px;
    scale: 0.9;
  }
`;

const PurpleStarIcon = styled(SpinIcons)`
  top: 150px;
  right: 0;
  margin-right: 500px;
  ${mediaQueries.tablet} {
    top: 200px;
    margin-right: 20px;
    scale: 0.8;
  }
  ${mediaQueries.largeMobile} {
    margin-right: -10px;
    top: 230px;
    scale: 0.7;
  }
`;

const CyanSquare2Icon = styled(Icons)`
  top: 230px;
  right: 0;
  margin-right: 40px;
  ${mediaQueries.tablet} {
    top: 550px;
    margin-right: 20px;
  }
  ${mediaQueries.largeMobile} {
    margin-right: -5px;
  }
  ${mediaQueries.mobile} {
    top: 440px;
    margin-right: 5px;
  }
`;

const FushiaIcon = styled(Icons)`
  top: 300px;
  right: 0;
  ${mediaQueries.tablet} {
    width: 20%;
    height: auto;
    top: 600px;
  }
  ${mediaQueries.mobile} {
    top: 490px;
  }
`;

const YellowIcon = styled(Icons)`
  bottom: 0;
  margin-bottom: 220px;
  margin-left: 90px;
  ${mediaQueries.tablet} {
    width: 35%;
    height: auto;
    margin-bottom: 240px;
  }
  ${mediaQueries.largeMobile} {
    margin-bottom: 130px;
    margin-left: 50px;
  }
`;

const FushiaStarIcon = styled(SpinIcons)`
  bottom: 0;
  margin-bottom: 105px;
  margin-left: 130px;
  ${mediaQueries.tablet} {
    scale: 0.9;
    margin-bottom: 360px;
    margin-left: 120px;
  }
  ${mediaQueries.largeMobile} {
    margin-bottom: 50px;
    margin-left: 20px;
    scale: 0.7;
  }
`;

const CyanSquare3Icon = styled(Icons)`
  bottom: 0;
  margin-bottom: 105px;
  margin-left: 250px;
  ${mediaQueries.tablet} {
    margin-bottom: 170px;
    margin-left: 100px;
  }
  ${mediaQueries.largeMobile} {
    margin-bottom: 50px;
    margin-left: 90px;
  }
`;

const PurpleStar2Icon = styled(SpinIcons)`
  bottom: 0;
  margin-bottom: 150px;
  right: 0;
  margin-right: 50px;
  ${mediaQueries.tablet} {
    margin-bottom: 180px;
  }
  ${mediaQueries.mobile} {
    margin-right: 25px;
    margin-bottom: 220px;
    scale: 0.9;
  }
`;

const CyanSquare4Icon = styled(Icons)`
  bottom: 0;
  margin-bottom: 60px;
  right: 0;
  margin-right: 640px;
  ${mediaQueries.tablet} {
    margin-bottom: 130px;
    margin-right: 300px;
  }
  ${mediaQueries.largeMobile} {
    margin-bottom: 60px;
    margin-right: 130px;
  }
`;

const BlueGear2Icon = styled(SpinIcons)`
  bottom: 0;
  margin-bottom: 30px;
  right: 0;
  margin-right: 450px;
  ${mediaQueries.tablet} {
    scale: 0.9;
    margin-bottom: 40px;
    left: 0;
    margin-left: 270px;
  }
  ${mediaQueries.largeMobile} {
    scale: 0.7;
  }
  ${mediaQueries.mobile} {
    scale: 0.6;
    margin-bottom: 30px;
    margin-left: 250px;
  }
`;

const OrangeIcon = styled(Icons)`
  bottom: 0;
  margin-bottom: 80px;
  right: 0;
  ${mediaQueries.tablet} {
    width: 25%;
    height: auto;
  }
  ${mediaQueries.largeMobile} {
    margin-bottom: 40px;
  }
  ${mediaQueries.mobile} {
    margin-bottom: 30px;
  }
`;

const Blue2Icon = styled(Icons)`
  bottom: 0;
  right: 0;
  margin-right: 40px;
  ${mediaQueries.tablet} {
    width: 25%;
    height: auto;
    margin-bottom: 30px;
    margin-right: 90px;
  }
  ${mediaQueries.largeMobile} {
    margin-right: 40px;
    margin-bottom: 15px;
  }
  ${mediaQueries.mobile} {
    margin-bottom: 10px;
  }
`;

const Purple2Icon = styled(Icons)`
  bottom: 0;
  margin-bottom: 20px;
  ${mediaQueries.tablet} {
    width: 25%;
    height: auto;
    margin-bottom: 40px;
  }
  ${mediaQueries.largeMobile} {
    margin-bottom: 25px;
  }
  ${mediaQueries.mobile} {
    margin-bottom: 15px;
  }
`;

export default NotFoundPage;
