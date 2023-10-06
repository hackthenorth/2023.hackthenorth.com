import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// import { mediaQueries } from "src/utils/responsive";
import {
  FadeOutImg,
  GearBlueImg,
  GearCyanImg,
  GearFushiaImg,
  GearOrangeImg,
  GearPurpleImg,
  GearYellowImg,
  StarBlueImg,
  StarCyanImg,
  StarFushiaImg,
  StarOrangeImg,
  StarPurpleImg,
  StarYellowImg,
} from "src/assets/img";
import { ContentWrapper, SectionWrapper } from "src/components/base";
import GlowText from "src/components/base/GlowText";
import { mediaQueries } from "src/utils";
import styled from "styled-components";

import { Heading1, theme } from "../../styles";

import Stats from "./Stats";

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
`;

interface AnimationProps {
  componentStyle: string;
}

const Showcase: React.FC = () => {
  // Dynamic styles for gears and stars
  const DecorStyles = {
    GEARBLUE_OFF:
      "top: 40%; left: 30%; animation: none; -webkit-animation: none;",
    GEARBLUE_ON:
      "animation: 0.8s forwards gearBlueFlyIn ease, 8s normal infinite linear rotateLeft; -webkit-animation: 0.8s forwards gearBlueFlyIn ease, 8s normal infinite linear rotateLeft;",
    GEARPURPLE_OFF:
      "top: 20%; left: 60%; animation: none; -webkit-animation: none;",
    GEARPUPLE_ON:
      "animation: 2s forwards gearPurpleFlyIn ease, 8s normal infinite linear rotateRight; -webkit-animation: 2s forwards gearPurpleFlyIn ease, 8s normal infinite linear rotateRight;",
    STARBLUE_OFF:
      "top: 20%; left: 60%; animation: none; -webkit-animation: none;",
    STARBLUE_ON:
      "animation: 1.5s forwards starBlueFlyIn ease, 1.7s infinite alternate linear floatLeft; -webkit-animation: 1.5s forwards starBlueFlyIn ease, 1.7s infinite alternate linear floatLeft;",
    STARCYAN_OFF:
      "top: 30%; left: 50%; animation: none; -webkit-animation: none;",
    STARCYAN_ON:
      "animation: 1s forwards starCyanFlyIn ease, 2.1s infinite alternate linear floatRight; -webkit-animation: 1s forwards starCyanFlyIn ease, 2.1s infinite alternate linear floatRight;",
    STARFUSHIA_OFF:
      "top: 30%; left: 90%; animation: none; -webkit-animation: none;",
    STARFUSHIA_ON:
      "animation: 1s forwards starFushiaFlyIn ease, 1.9s infinite alternate linear floatLeft; -webkit-animation: 1s forwards starFushiaFlyIn ease, 1.9s infinite alternate linear floatLeft;",
    BG_OFF: "opacity: 0;",
    BG_ON: "opacity: 1;",
  };
  const [showcaseRef, showcaseInView] = useInView();
  const [gearBlueStyle, setGearBlueStyle] = useState(DecorStyles.GEARBLUE_OFF);
  const [gearPurpleStyle, setGearPurpleStyle] = useState(
    DecorStyles.GEARPURPLE_OFF
  );
  const [starBlueStyle, setStarBlueStyle] = useState(DecorStyles.STARBLUE_OFF);
  const [starCyanStyle, setStarCyanStyle] = useState(DecorStyles.STARCYAN_OFF);
  const [starFushiaStyle, setStarFushiaStyle] = useState(
    DecorStyles.STARFUSHIA_OFF
  );
  const [bgStyle, setBgStyle] = useState(DecorStyles.BG_OFF);

  useEffect(() => {
    if (showcaseInView) {
      setGearBlueStyle(DecorStyles.GEARBLUE_ON);
      setGearPurpleStyle(DecorStyles.GEARPUPLE_ON);
      setStarBlueStyle(DecorStyles.STARBLUE_ON);
      setStarCyanStyle(DecorStyles.STARCYAN_ON);
      setStarFushiaStyle(DecorStyles.STARFUSHIA_ON);
      setBgStyle(DecorStyles.BG_ON);
    } else {
      setGearBlueStyle(DecorStyles.GEARBLUE_OFF);
      setGearPurpleStyle(DecorStyles.GEARPURPLE_OFF);
      setStarBlueStyle(DecorStyles.STARBLUE_OFF);
      setStarCyanStyle(DecorStyles.STARCYAN_OFF);
      setStarFushiaStyle(DecorStyles.STARFUSHIA_OFF);
      setBgStyle(DecorStyles.BG_OFF);
    }
  }, [
    DecorStyles.GEARBLUE_OFF,
    DecorStyles.GEARBLUE_ON,
    DecorStyles.GEARPURPLE_OFF,
    DecorStyles.GEARPUPLE_ON,
    DecorStyles.STARBLUE_OFF,
    DecorStyles.STARBLUE_ON,
    DecorStyles.STARCYAN_OFF,
    DecorStyles.STARCYAN_ON,
    DecorStyles.STARFUSHIA_OFF,
    DecorStyles.STARFUSHIA_ON,
    DecorStyles.BG_OFF,
    DecorStyles.BG_ON,
    showcaseInView,
  ]);

  return (
    <StyledSectionWrapper>
      <RefBox ref={showcaseRef}>
        <StarOrange
          alt=""
          loading="lazy"
          src={StarOrangeImg}
          componentStyle={bgStyle}
        />
        <GearOrange
          alt=""
          loading="lazy"
          src={GearOrangeImg}
          componentStyle={bgStyle}
        />
        <StarYellow
          alt=""
          loading="lazy"
          src={StarYellowImg}
          componentStyle={bgStyle}
        />
        <GearFushia
          alt=""
          loading="lazy"
          src={GearFushiaImg}
          componentStyle={bgStyle}
        />
        <GearYellow
          alt=""
          loading="lazy"
          src={GearYellowImg}
          componentStyle={bgStyle}
        />
        <GearCyan
          alt=""
          loading="lazy"
          src={GearCyanImg}
          componentStyle={bgStyle}
        />
        <StarPurple
          alt=""
          loading="lazy"
          src={StarPurpleImg}
          componentStyle={bgStyle}
        />
        <ContentWrapper>
          <HeadingContainer>
            <Heading1>
              <GlowText color={theme.colors.primary.purple}>
                Last year{" "}
              </GlowText>
              we had...
            </Heading1>
          </HeadingContainer>
          <GearBlue
            alt=""
            loading="lazy"
            src={GearBlueImg}
            componentStyle={gearBlueStyle}
          />
          <GearPurple
            alt=""
            loading="lazy"
            src={GearPurpleImg}
            componentStyle={gearPurpleStyle}
          />
          <StarBlue
            alt=""
            loading="lazy"
            src={StarBlueImg}
            componentStyle={starBlueStyle}
          />
          <StarCyan
            alt=""
            loading="lazy"
            src={StarCyanImg}
            componentStyle={starCyanStyle}
          />
          <StarFushia
            alt=""
            loading="lazy"
            src={StarFushiaImg}
            componentStyle={starFushiaStyle}
          />
          <FadeOut alt="" loading="lazy" src={FadeOutImg} />
          <Stats />
        </ContentWrapper>
      </RefBox>
    </StyledSectionWrapper>
  );
};

const StyledSectionWrapper = styled.div`
  ${mediaQueries.largeMobile} {
    margin-top: 100px;
  }
`;

const RefBox = styled.div`
  position: relative;
  height: auto;
  padding-top: 8%;
  padding-bottom: 8%;

  ${mediaQueries.tablet} {
    padding-top: 0%;
    padding-bottom: 0%;
    margin-bottom: -10%;
  }

  ${mediaQueries.largeMobile} {
    padding-top: 0%;
    padding-bottom: 90%;
  }
`;

const FadeOut = styled.img`
  position: absolute;
  bottom: -6%;
  width: 100%;
  height: auto;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  visibility: visible;

  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const GearBlue = styled.img<AnimationProps>`
  position: absolute;
  width: 8%;
  height: auto;
  transition: all 0.3s ease-in-out;
  ${mediaQueries.tablet} {
    animation: none;
    left: 6%;
    top: 30%;
    width: 7%;
  }
  ${mediaQueries.largeMobile} {
    left: 7%;
    top: 19%;
    width: 16%;
  }
  ${(props) => props.componentStyle}

  @keyframes gearBlueFlyIn {
    from {
      top: 40%;
      left: 30%;
    }
    to {
      left: -3%;
      top: 26%;
    }
  }

  @keyframes rotateLeft {
    from {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
    }
  }
`;

const GearPurple = styled.img<AnimationProps>`
  position: absolute;
  width: 8%;
  height: auto;
  transition: all 0.3s ease-in-out;
  ${mediaQueries.tablet} {
    animation: none;
    left: 75%;
    top: 70%;
    width: 6%;
  }
  ${mediaQueries.largeMobile} {
    left: 14%;
    top: 173%;
    width: 14%;
  }
  ${(props) => props.componentStyle}

  @keyframes gearPurpleFlyIn {
    from {
      top: 20%;
      left: 60%;
    }
    to {
      top: -6%;
      left: 76%;
    }
  }

  @keyframes rotateRight {
    from {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }
`;

const StarBlue = styled.img<AnimationProps>`
  position: absolute;
  width: 7%;
  height: auto;
  top: 2%;
  left: 8%;
  transition: all 0.3s ease-in-out;
  ${mediaQueries.tablet} {
    animation: none;
    left: 33%;
    top: 22%;
    width: 6%;
  }
  ${mediaQueries.largeMobile} {
    left: 84%;
    top: -2%;
    width: 13%;
  }
  ${(props) => props.componentStyle}

  @keyframes starBlueFlyIn {
    from {
      top: 20%;
      left: 20%;
    }
    to {
      top: 2%;
      left: 8%;
    }
  }

  @keyframes floatLeft {
    from {
      transform: translatey(0px) translatex(0px) rotate(-20deg);
      -ms-transform: translatey(0px) translatex(0px) rotate(-20deg);
      -webkit-transform: translatey(0px) translatex(0px) rotate(-20deg);
    }
    to {
      transform: translatey(12px) translatex(10px) rotate(0deg);
      -ms-transform: translatey(12px) translatex(10px) rotate(0deg);
      -webkit-transform: translatey(12px) translatex(10px) rotate(0deg);
    }
  }
`;

const StarCyan = styled.img<AnimationProps>`
  position: absolute;
  width: 7%;
  height: auto;
  transition: all 0.3s ease-in-out;
  ${mediaQueries.tablet} {
    animation: none;
    left: 87%;
    top: 40%;
    width: 6%;
    transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
  }
  ${mediaQueries.largeMobile} {
    left: 72%;
    top: 144%;
    width: 13%;
    transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
  }
  ${(props) => props.componentStyle}

  @keyframes starCyanFlyIn {
    from {
      top: 30%;
      left: 40%;
    }
    to {
      top: 10%;
      left: 30%;
    }
  }

  @keyframes floatRight {
    from {
      transform: translatey(0px) translatex(0px) rotate(0deg);
      -ms-transform: translatey(0px) translatex(0px) rotate(0deg);
      -webkit-transform: translatey(0px) translatex(0px) rotate(0deg);
    }
    to {
      transform: translatey(-10px) translatex(10px) rotate(20deg);
      -ms-transform: translatey(-10px) translatex(10px) rotate(20deg);
      -webkit-transform: translatey(-10px) translatex(10px) rotate(20deg);
    }
  }
`;

const StarFushia = styled.img<AnimationProps>`
  position: absolute;
  width: 7%;
  height: auto;
  transition: all 0.3s ease-in-out;
  ${(props) => props.componentStyle}
  ${mediaQueries.tablet} {
    animation: none;
    left: 14%;
    top: 55%;
    width: 6%;
    transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
  }
  ${mediaQueries.largeMobile} {
    left: -4%;
    top: 90%;
    width: 13%;
    transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
  }

  @keyframes starFushiaFlyIn {
    from {
      top: 50%;
      left: 70%;
    }
    to {
      top: 15%;
      left: 88%;
    }
  }
`;

const BgDecor = styled.img<AnimationProps>`
  visibility: visible;
  position: absolute;
  width: 5%;
  height: auto;
  transition: all 1s ease-in-out;
  ${(props) => props.componentStyle}

  ${mediaQueries.large} {
    visibility: hidden;
    opacity: 0;
  }
`;

const StarOrange = styled(BgDecor)<AnimationProps>`
  top: 40%;
  left: 8%;
  animation: 1.4s infinite alternate linear floatLeft;
  -webkit-animation: 1.4s infinite alternate linear floatLeft;
`;

const GearOrange = styled.img<AnimationProps>`
  visibility: visible;
  position: absolute;
  width: 5%;
  height: auto;
  transition: opacity 1s ease-in-out;
  ${(props) => props.componentStyle}
  top: 15%;
  left: 1%;
  animation: 8s normal infinite linear rotateRight;
  -webkit-animation: 8s normal infinite linear rotateRight;

  @media (min-width: 834px) and (max-width: 1440px) {
    visibility: hidden;
  }

  ${mediaQueries.tablet} {
    visibility: visible;
    animation: none;
    left: 66%;
    top: 13%;
    width: 7%;
    transition: none;
  }
  ${mediaQueries.largeMobile} {
    visibility: visible;
    left: 50%;
    top: 50%;
    width: 16%;
    z-index: 3;
  }
`;

const StarYellow = styled(BgDecor)<AnimationProps>`
  top: 20%;
  left: 10%;
  animation: 1.8s infinite alternate linear floatRight;
  -webkit-animation: 1.8s infinite alternate linear floatRight;
`;

const GearFushia = styled(BgDecor)<AnimationProps>`
  top: 12%;
  left: 80%;
  animation: 8s normal infinite linear rotateRight;
  -webkit-animation: 8s normal infinite linear rotateRight;
`;

const GearYellow = styled(BgDecor)<AnimationProps>`
  top: 38%;
  left: 82%;
  animation: 8s normal infinite linear rotateRight;
  -webkit-animation: 8s normal infinite linear rotateRight;
`;

const GearCyan = styled(BgDecor)<AnimationProps>`
  top: 30%;
  left: 93%;
  animation: 8s normal infinite linear rotateRight;
  -webkit-animation: 8s normal infinite linear rotateRight;
`;

const StarPurple = styled(BgDecor)<AnimationProps>`
  top: 10%;
  left: 90%;
  animation: 1.8s infinite alternate linear floatRight;
  -webkit-animation: 1.8s infinite alternate linear floatRight;
`;

export default Showcase;
