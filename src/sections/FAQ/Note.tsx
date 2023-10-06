import React from "react";
import { useInView } from "react-intersection-observer";
import {
  CheckerPinkImg,
  LongRectangleBlueImg,
  LongRectanglePinkImg,
  RectangleDarkBlueImg,
  SquareBlueImg,
  SquareOrangeImg,
  StarYellowImg,
  StarBlueImg,
  GearPurpleImg,
  GearYellowImg,
} from "src/assets/img";
import { DidWeMissAnything } from "src/components";
import { BrowserWindowGradient } from "src/components/base";
import { LargeBody } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import styled, { css, keyframes, useTheme } from "styled-components";

interface BrowserProps {
  inView: boolean;
}

const Wrapper = styled.div`
  position: relative;
  margin: 20px;
  padding-top: 7%;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 10%;
  ${mediaQueries.tablet} {
    padding-left: 10%;
    padding-right: 10%;
  }
  ${mediaQueries.largeMobile} {
    padding-left: 0%;
    padding-right: 0%;
    padding-top: 8%;
  }
`;
const BrowserWindowLeftWrapper = styled.div<BrowserProps>`
  position: relative;
  width: 53%;
  transform: scale(0);
  ${({ inView }) =>
    inView
      ? css`
          animation: scaleUp 0.9s 1 forwards;
          animation-delay: 0s;
        `
      : css`
          animation: none;
          transform: scale(0);
        `}
  ${mediaQueries.tablet} {
    width: 100%;
  }
`;
const BrowserWindowRightWrapper = styled.div<BrowserProps>`
  position: absolute;
  top: 65%;
  left: 50%;
  width: 48%;
  transform: scale(0);
  ${({ inView }) =>
    inView
      ? css`
          animation: scaleUp 0.9s 1 forwards;
          animation-delay: 0.3s;
        `
      : css`
          animation: none;
          transform: scale(0);
        `}

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

  ${mediaQueries.tablet} {
    position: relative;
    width: 100%;
    left: 0;
    margin-top: 3%;
  }

  ${mediaQueries.largeMobile} {
    margin-top: 8%;
  }
`;
const BrowserWindowLeft = styled(BrowserWindowGradient)``;
const BrowserWindowRight = styled(BrowserWindowGradient)``;

const NoteText = styled(LargeBody)`
  color: ${({ theme }) => theme.colors.text.dark.white};
  position: relative;
  padding: 7%;
  padding-right: 10%;
  line-height: 160%;
`;

const Note: React.FC = () => {
  const [noteRef, noteInView] = useInView();
  const theme = useTheme();

  return (
    <Wrapper ref={noteRef}>
      <GearYellow alt="" loading="lazy" src={GearYellowImg} />
      <GearPurple alt="" loading="lazy" src={GearPurpleImg} />
      <StarYellow alt="" loading="lazy" src={StarYellowImg} />
      <StarBlue alt="" loading="lazy" src={StarBlueImg} />
      <CheckerPink alt="" loading="lazy" src={CheckerPinkImg} />
      <SquareOrange alt="" loading="lazy" src={SquareOrangeImg} />
      <SquareBlue alt="" loading="lazy" src={SquareBlueImg} />
      <LongRectangleBlueLeft alt="" loading="lazy" src={LongRectangleBlueImg} />
      <LongRectangleBlueRight
        alt=""
        loading="lazy"
        src={LongRectangleBlueImg}
      />
      <RectangleDarkBlue alt="" loading="lazy" src={RectangleDarkBlueImg} />
      <LongRectanglePink alt="" loading="lazy" src={LongRectanglePinkImg} />
      <BrowserWindowLeftWrapper inView={noteInView}>
        <BrowserWindowLeft
          gradientStartColor={theme.colors.primary.cyan}
          gradientEndColor={theme.colors.primary.blue}
        >
          <NoteText>
            Hey Hackers! <br />
            <br />
            For 10 years, Hack the North has been one of your favorite places to
            build, connect, and learn. For our 10th iteration, we want to give
            hackers the opportunity to dream bigger than ever. This means giving
            you the best resources, activities, and learning opportunities we
            possibly can. We want you to find a space to connect with a
            community of hackers from around the world, and delve deeper into
            tech than ever before. Though we can’t give away too much yet, we
            can’t wait for you to see all the amazing activities, workshops, and
            speakers we have planned. We’re so excited to see all the amazing
            things you’ll create! <br />
            <br />— Team Hack the North 💙
          </NoteText>
        </BrowserWindowLeft>
      </BrowserWindowLeftWrapper>
      <BrowserWindowRightWrapper inView={noteInView}>
        <BrowserWindowRight
          gradientStartColor={theme.colors.primary.blue}
          gradientEndColor={theme.colors.primary.purple}
        >
          <DidWeMissAnything />
        </BrowserWindowRight>
      </BrowserWindowRightWrapper>
    </Wrapper>
  );
};

const rotateRight = keyframes`
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
`;

const rotateLeft = keyframes`
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
`;

const GearYellow = styled.img`
  position: absolute;
  width: 9%;
  top: 4%;
  left: 4%;
  height: auto;
  transition: all 0.3s ease-in-out;
  animation: 8s normal infinite linear ${rotateLeft};
  -webkit-animation: 8s normal infinite linear ${rotateLeft};
  ${mediaQueries.tablet} {
    left: 20%;
    top: 2%;
    animation: none;
  }
  ${mediaQueries.largeMobile} {
    left: 16%;
    top: -1%;
    width: 18%;
  }
`;

const GearPurple = styled.img`
  position: absolute;
  width: 11%;
  top: 12%;
  left: 50%;
  height: auto;
  transition: all 0.3s ease-in-out;
  animation: 8s normal infinite linear ${rotateRight};
  -webkit-animation: 8s normal infinite linear ${rotateRight};
  ${mediaQueries.tablet} {
    left: 40%;
    top: 57%;
    width: 9%;
    animation: none;
  }
  ${mediaQueries.largeMobile} {
    left: 60%;
    width: 20%;
    top: 66%;
  }
`;

const StarYellow = styled.img`
  position: absolute;
  width: 9%;
  top: 75%;
  left: -3%;
  height: auto;
  transition: all 0.3s ease-in-out;
  animation: 8s normal infinite linear ${rotateRight};
  -webkit-animation: 8s normal infinite linear ${rotateRight};
  ${mediaQueries.tablet} {
    top: 95%;
    left: 5%;
    animation: none;
  }
  ${mediaQueries.largeMobile} {
    top: 98%;
    width: 16%;
    transform: rotate(-20deg);
  }
`;

const StarBlue = styled.img`
  position: absolute;
  width: 9%;
  top: 53%;
  left: 94%;
  height: auto;
  transition: all 0.3s ease-in-out;
  animation: 8s normal infinite linear ${rotateLeft};
  -webkit-animation: 8s normal infinite linear ${rotateLeft};
  ${mediaQueries.tablet} {
    top: 40%;
    left: 85%;
    z-index: 1;
    animation: none;
  }
  ${mediaQueries.largeMobile} {
    left: 88%;
    width: 25%;
  }
`;

const CheckerPink = styled.img`
  position: absolute;
  width: 7%;
  top: 30%;
  left: 82%;
  height: auto;
  visibility: visible;
  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const SquareBlue = styled.img`
  position: absolute;
  width: 2%;
  top: 4%;
  left: 30%;
  height: auto;
  visibility: visible;
  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const SquareOrange = styled.img`
  position: absolute;
  width: 2%;
  top: 25%;
  left: 90%;
  height: auto;
  visibility: visible;
  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const LongRectangleBlueLeft = styled.img`
  position: absolute;
  width: 19%;
  transform: rotate(90deg);
  top: 24.3%;
  left: -8.5%;
  height: auto;
  ${mediaQueries.tablet} {
    top: 8.5%;
    left: -0.5%;
    z-index: 1;
    width: 22%;
  }
  ${mediaQueries.largeMobile} {
    top: 4.3%;
    left: -21%;
    width: 40%;
  }
`;

const RectangleDarkBlue = styled.img`
  position: absolute;
  width: 2%;
  top: 21.4%;
  left: 1%;
  height: auto;
  ${mediaQueries.tablet} {
    top: 6.7%;
    left: 10.5%;
    z-index: 2;
  }
  ${mediaQueries.largeMobile} {
    top: 3%;
    left: -1%;
    width: 5%;
  }
`;

const LongRectangleBlueRight = styled.img`
  position: absolute;
  width: 11%;
  top: 42%;
  left: 73%;
  height: auto;
  visibility: visible;
  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const LongRectanglePink = styled.img`
  position: absolute;
  width: 18%;
  top: 95%;
  left: 87%;
  height: auto;
  ${mediaQueries.tablet} {
    top: 96.5%;
    left: 80%;
    z-index: 1;
  }
  ${mediaQueries.largeMobile} {
    top: 97.6%;
    left: 82%;
    width: 30%;
  }
`;

export default Note;
