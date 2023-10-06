import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  yellowSquare,
  orangeGear,
  orangeStripe,
  stars,
  purpleStripe,
  glitches,
  purpleStripe2,
  purpleSquare,
  longRectGlow,
  longRectPurple,
  longRectPurple2,
  longRectPurple3,
  violetStripe,
  rectGlow,
  squareGlow,
  rectGlow2,
  ultraPurpGear,
  ultraPurpStar,
  ultraPurpSquare,
  ultraPinkGear,
  ultraYellowSquare,
  ultraBlueStar,
} from "src/assets/img";
import { JUDGES_SET } from "src/copy/judges";
import { LargeBody } from "src/styles";
import { mediaQueries } from "src/utils";
import styled, { keyframes, css } from "styled-components";

const JudgesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 50px;
  position: relative;
  margin: 0px 50px;

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-left: 50px;
    margin-right: 50px;
  }

  ${mediaQueries.custom(540)} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin: 0px 50px;
  }
`;

const Grid = styled.div`
  position: relative;
`;

const JudgeImage = styled.img`
  width: 142.79px;
  height: 142.79px;
  border: 2.28463px solid #ffffff;
  object-fit: cover;

  ${mediaQueries.custom(500)} {
    width: 80px;
    height: 80px;
  }
`;

const JudgeName = styled(LargeBody)`
  font-size: 27px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.text.dark.white};
  margin: 0px;
  text-align: start;
`;

const JudgeDescription = styled(LargeBody)`
  font-size: 16px;
  line-height: 120%;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text.dark.gray};
  margin: 0px;
  text-align: start;
`;

const SideInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: rgba(42, 42, 79, 0.1);
  z-index: 50;
  backdrop-filter: blur(2px);
`;

const ColourfulBg = styled.div<{ i: number }>`
  position: absolute;
  top: 10px;
  left: -5px;
  width: 143px;
  height: 143px;

  ${({ i }) =>
    i % 3 === 0 &&
    css`
      background: linear-gradient(90deg, #f09343 0%, #f8609f 100%);
    `}

  ${({ i }) =>
    i % 3 === 1 &&
    css`
      background: linear-gradient(90deg, #f8609f 0%, #d841fc 100%);
    `}

${({ i }) =>
    i % 3 === 2 &&
    css`
      background: linear-gradient(90deg, #d841fc 0%, #896bff 100%);
    `}

  ${mediaQueries.tablet} {
    ${({ i }) =>
      i % 2 === 0 &&
      css`
        background: linear-gradient(
          90deg,
          #f09343 0%,
          #cfb86a 50%,
          #addd90 100%
        );
      `}

    ${({ i }) =>
      i % 2 === 1 &&
      css`
        background: linear-gradient(
          90deg,
          #1fa6ff 0%,
          #8f69fd 60%,
          #ff2cfb 100%
        );
      `}
  }

  ${mediaQueries.custom(540)} {
    ${({ i }) =>
      i % 6 === 0 &&
      css`
        background: #19fbff;
      `}

    ${({ i }) =>
      i % 6 === 1 &&
      css`
        background: #1fa6ff;
      `}

    ${({ i }) =>
      i % 6 === 2 &&
      css`
        background: #896bff;
      `}
    
    ${({ i }) =>
      i % 6 === 3 &&
      css`
        background: #ff2cfb;
      `}
    
    ${({ i }) =>
      i % 6 === 4 &&
      css`
        background: #f7ce58;
      `}
    
    ${({ i }) =>
      i % 6 === 4 &&
      css`
        background: #f09343;
      `}
  }

  ${mediaQueries.custom(500)} {
    width: 80px;
    height: 80px;
  }
`;

const ZContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  gap: 10px;
`;

const GlitchIcons = styled.img`
  position: absolute;
  z-index: -1;

  ${mediaQueries.custom(500)} {
    display: none;
  }
`;

const GearSpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const StarSpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(720deg);
  }
`;

const GearsOnly = styled(GlitchIcons)<{ spin: boolean }>`
  ${(props) =>
    props.spin
      ? css`
          animation: ${GearSpinAnimation} 1.5s linear 1;
        `
      : ""}
`;

const StarsOnly = styled(GlitchIcons)<{ spin: boolean }>`
  ${(props) =>
    props.spin
      ? css`
          animation: ${StarSpinAnimation} 1.5s linear 1;
        `
      : ""}
`;

const YellowSquare = styled(GlitchIcons)`
  left: -40px;
  top: 227px;
`;

const OrangeGear = styled(GearsOnly)`
  left: 180px;
  top: 350px;
`;

const OrangeStripe = styled(GlitchIcons)`
  left: 70px;
  top: 380px;
`;

const PurpleStripe = styled(GlitchIcons)`
  left: 440px;
  top: 180px;
`;

const Stars1 = styled(StarsOnly)`
  left: 515px;
  top: 150px;
`;

const Stars2 = styled(StarsOnly)`
  left: 530px;
  bottom: 170px;
`;

const Glitch1 = styled(GlitchIcons)`
  left: 525px;
  top: 540px;

  ${mediaQueries.tablet} {
    left: 530px;
    top: 800px;
  }
`;

const Glitch2 = styled(GlitchIcons)`
  left: 340px;
  bottom: 400px;

  ${mediaQueries.tablet} {
    left: -40px;
    bottom: 580px;
  }
`;

const PurpleStripe2 = styled(GlitchIcons)`
  left: 500px;
  top: 495px;

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const PurpleSquare = styled(GlitchIcons)`
  left: 510px;
  bottom: 120px;

  ${mediaQueries.tablet} {
    left: 100px;
    bottom: 130px;
  }
`;

const LongRectGlow = styled(GlitchIcons)`
  left: 460px;
  bottom: 140px;

  ${mediaQueries.tablet} {
    left: 40px;
  }
`;

const LongRectPurple = styled(GlitchIcons)`
  right: 330px;
  top: 100px;

  ${mediaQueries.tablet} {
    top: 120px;
  }
`;

const LongRectPurple2 = styled(GlitchIcons)`
  right: 240px;
  bottom: 160px;
`;

const LongRectPurple3 = styled(GlitchIcons)`
  right: 300px;
  bottom: 10px;

  ${mediaQueries.tablet} {
    bottom: 0px;
  }
`;

const VioletStripe = styled(GlitchIcons)`
  right: 160px;
  top: 335px;

  ${mediaQueries.tablet} {
    top: 380px;
  }
`;

const RectGlow = styled(GlitchIcons)`
  right: 180px;
  top: 330px;
`;

const RectGlow2 = styled(GlitchIcons)`
  right: 330px;
  bottom: 200px;

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const SquareGlow = styled(GlitchIcons)`
  right: 220px;
  top: 525px;

  ${mediaQueries.tablet} {
    left: 0px;
  }
`;

const UltraPurpGear = styled(GearsOnly)`
  top: -150px;
  left: -280px;

  ${mediaQueries.large} {
    display: none;
  }
`;

const UltraPurpStar = styled(StarsOnly)`
  top: 480px;
  left: -360px;

  ${mediaQueries.large} {
    display: none;
  }
`;

const UltraPurpSquare = styled(GlitchIcons)`
  bottom: 20px;
  left: -280px;

  ${mediaQueries.large} {
    display: none;
  }
`;

const UltraPinkGear = styled(GearsOnly)`
  top: -150px;
  right: -200px;

  ${mediaQueries.large} {
    display: none;
  }
`;

const UltraYellowSquare = styled(GlitchIcons)`
  top: -50px;
  right: -280px;
`;

const UltraBlueStar = styled(StarsOnly)`
  bottom: -60px;
  right: -200px;
`;

const JudgesGrid: React.FC = () => {
  const [sectionRef, sectionInView] = useInView();
  const [spin, setSpin] = useState<boolean>(false);

  useEffect(() => {
    if (sectionInView) {
      setSpin(true);
    } else {
      setSpin(false);
    }
  }, [sectionInView]);

  return (
    <JudgesContainer ref={sectionRef}>
      <YellowSquare src={yellowSquare} alt="yellow square" loading="lazy" />
      <OrangeStripe src={orangeStripe} alt="orange stripe" loading="lazy" />
      <OrangeGear
        spin={spin}
        src={orangeGear}
        alt="orange gear"
        loading="lazy"
      />
      <PurpleStripe src={purpleStripe} alt="purple stripe" loading="lazy" />
      <Stars1 spin={spin} src={stars} alt="stars" loading="lazy" />
      <Stars2 spin={spin} src={stars} alt="stars" loading="lazy" />
      <PurpleStripe2 src={purpleStripe2} alt="purple stripe" loading="lazy" />
      <Glitch1 src={glitches} alt="glitch" loading="lazy" />
      <Glitch2 src={glitches} alt="glitch" loading="lazy" />
      <PurpleSquare src={purpleSquare} alt="purple square" loading="lazy" />
      <LongRectGlow src={longRectGlow} alt="long rect glow" loading="lazy" />
      <LongRectPurple
        src={longRectPurple}
        alt="long rect purple"
        loading="lazy"
      />
      <RectGlow src={rectGlow} alt="rect glow" loading="lazy" />
      <VioletStripe src={violetStripe} alt="violet stripe" loading="lazy" />
      <SquareGlow src={squareGlow} alt="square glow" loading="lazy" />
      <RectGlow2 src={rectGlow2} alt="rect glow" loading="lazy" />
      <LongRectPurple2
        src={longRectPurple2}
        alt="long rect purple"
        loading="lazy"
      />
      <LongRectPurple3
        src={longRectPurple3}
        alt="long rect purple"
        loading="lazy"
      />
      <UltraPurpGear
        spin={spin}
        src={ultraPurpGear}
        alt="ultra purple gear"
        loading="lazy"
      />
      <UltraPurpStar
        spin={spin}
        src={ultraPurpStar}
        alt="ultra purple star"
        loading="lazy"
      />
      <UltraPurpSquare
        src={ultraPurpSquare}
        alt="ultra purple square"
        loading="lazy"
      />
      <UltraPinkGear
        spin={spin}
        src={ultraPinkGear}
        alt="ultra pink gear"
        loading="lazy"
      />
      <UltraYellowSquare
        src={ultraYellowSquare}
        alt="ultra yellow square"
        loading="lazy"
      />
      <UltraBlueStar
        spin={spin}
        src={ultraBlueStar}
        alt="ultra blue star"
        loading="lazy"
      />

      {JUDGES_SET.map((judge, i) => (
        <Grid key={i}>
          <ColourfulBg i={i} />
          <ZContainer>
            <div>
              <JudgeImage src={judge.imgUrl} alt={judge.name} loading="lazy" />
            </div>
            <SideInfo>
              <JudgeName>{judge.name}</JudgeName>
              <JudgeDescription>{judge.description}</JudgeDescription>
            </SideInfo>
          </ZContainer>
        </Grid>
      ))}
    </JudgesContainer>
  );
};

export default JudgesGrid;
