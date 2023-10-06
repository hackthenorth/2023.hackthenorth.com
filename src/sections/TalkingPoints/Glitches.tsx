import React from "react";
import {
  GearYellowImg,
  GlitchBehindGroup2,
  GlitchGlowBarsGroup2,
  GlitchGlowBarsGroup3,
  GlitchLeftGroup1,
  GlitchLeftGroup2,
  GlitchLeftGroup3,
  GlitchRightGroup1,
  GlitchSolidBarsGroup2,
  GlitchSolidBarsGroup3,
  StarFushiaImg,
  YellowStar,
} from "src/assets/img";
import GradientBar from "src/components/base/GradientBar";
import { mediaQueries, useDeviceSize, useWindowSize } from "src/utils";
import styled, { useTheme } from "styled-components";

interface GlitchProps {
  glitchFrame: number;
  glitching: boolean;
}

const Glitches: React.FC<GlitchProps> = ({ glitchFrame, glitching }) => {
  const theme = useTheme();
  const { windowWidth } = useWindowSize();
  const isMedium = useDeviceSize("medium");
  const isTablet = useDeviceSize("tablet");
  const isMobile = windowWidth ? windowWidth <= 560 : false;

  return (
    <div
      style={{
        position: "absolute",
        top: isMobile ? "84px" : "0",
        left: isMedium
          ? `calc(50vw - ${
              isTablet ? (isMobile ? "304px" : "504px") : "520px"
            })`
          : "-132px",
      }}
    >
      <GlitchWrapper
        style={{
          visibility: glitchFrame === 0 ? "visible" : "hidden",
        }}
      >
        <GlitchIcons
          src={GlitchLeftGroup1}
          alt=""
          style={{ left: 138, top: -60 }}
        />
        <GlitchIcons
          src={GlitchRightGroup1}
          alt=""
          style={{ left: 515, top: 320 }}
        />
        <StarsAndGears
          src={YellowStar}
          alt=""
          className="hoverRotate"
          style={{ left: 80, top: -110 }}
        />
        <StarsAndGears
          src={GearYellowImg}
          alt=""
          className="hoverRotate"
          style={{ width: "80px", left: 680, top: 290 }}
        />
        <FuschiaStar src={StarFushiaImg} alt="" className="hoverRotate" />
        <GradientBar
          color={theme.colors.primary.yellow}
          startDimension="60px"
          endDimension="130px"
          fixedDimension="40px"
          direction="bottom"
          top="-20px"
          left="220px"
          zIndex={5}
          glitching={glitching && glitchFrame == 0}
        />
        <GradientBar
          color={theme.colors.primary.pink}
          startDimension="120px"
          endDimension="266px"
          fixedDimension="24px"
          direction="right"
          top="-35px"
          left="230px"
          zIndex={-10}
          glitching={glitching && glitchFrame == 0}
        />
        <GradientBar
          color={theme.colors.primary.pink}
          startDimension="170px"
          endDimension="250px"
          fixedDimension="43px"
          direction="right"
          top="318px"
          left="520px"
          zIndex={0}
          glitching={glitching && glitchFrame == 0}
        />
        <GradientBar
          color={theme.colors.primary.cyan}
          startDimension="39px"
          endDimension="80px"
          fixedDimension="23px"
          direction="bottom"
          top="310px"
          left="740px"
          zIndex={5}
          glitching={glitching && glitchFrame == 0}
        />
      </GlitchWrapper>
      <GlitchWrapper
        style={{
          visibility: glitchFrame === 1 ? "visible" : "hidden",
        }}
      >
        <GlitchIcons
          src={GlitchLeftGroup2}
          alt=""
          style={{ left: 63, top: -40 }}
        />
        <GlitchIcons
          src={GlitchGlowBarsGroup2}
          alt=""
          style={{ left: 600, top: 210, zIndex: 10 }}
        />
        <GlitchIcons
          src={GlitchSolidBarsGroup2}
          alt=""
          style={{ left: 565, top: 300 }}
        />
        <GlitchIcons
          src={GlitchBehindGroup2}
          alt=""
          style={{ left: 670, top: 280, zIndex: -10 }}
        />
        <StarsAndGears
          src={YellowStar}
          alt=""
          className="hoverRotate"
          style={{ width: "200px", left: 190, top: -120 }}
        />
        <FuschiaStar src={StarFushiaImg} alt="" className="hoverRotate" />
        <StarsAndGears
          src={GearYellowImg}
          alt=""
          className="hoverRotate"
          style={{ width: "80px", left: 525, top: 300 }}
        />
        <GradientBar
          color={theme.colors.primary.yellow}
          startDimension="50px"
          endDimension="119px"
          fixedDimension="23px"
          direction="left"
          top="30px"
          left="185px"
          zIndex={-5}
          glitching={glitchFrame == 1}
        />
        <GradientBar
          color={theme.colors.primary.pink}
          startDimension="120px"
          endDimension="266px"
          fixedDimension="29px"
          direction="right"
          top="-39px"
          left="230px"
          zIndex={-10}
          glitching={glitchFrame == 1}
        />
        <GradientBar
          color={theme.colors.primary.pink}
          startDimension="170px"
          endDimension="210px"
          fixedDimension="43px"
          direction="right"
          top="282px"
          left="520px"
          zIndex={5}
          glitching={glitchFrame == 1}
        />
        <GradientBar
          color={theme.colors.primary.cyan}
          startDimension="38px"
          endDimension="80px"
          fixedDimension="23px"
          direction="bottom"
          top="295px"
          left="717px"
          zIndex={10}
          glitching={glitchFrame == 1}
        />
      </GlitchWrapper>
      <GlitchWrapper
        style={{
          visibility: glitchFrame === 2 ? "visible" : "hidden",
        }}
      >
        <GlitchIcons
          src={GlitchLeftGroup3}
          alt=""
          style={{ left: 63, top: -40 }}
        />
        <GlitchIcons
          src={GlitchGlowBarsGroup3}
          alt=""
          style={{ left: 550, top: 210, zIndex: 10 }}
        />
        <GlitchIcons
          src={GlitchSolidBarsGroup3}
          alt=""
          style={{ left: 565, top: 300 }}
        />
        <GlitchIcons
          src={GlitchBehindGroup2}
          alt=""
          style={{ left: 670, top: 280, zIndex: -10 }}
        />
        <StarsAndGears
          src={YellowStar}
          alt=""
          className="hoverRotate"
          style={{ width: "220px", left: 190, top: -140 }}
        />
        <FuschiaStar src={StarFushiaImg} alt="" className="hoverRotate" />
        <StarsAndGears
          src={GearYellowImg}
          alt=""
          className="hoverRotate"
          style={{ width: "80px", left: 510, top: 300 }}
        />
        <GradientBar
          color={theme.colors.primary.yellow}
          startDimension="50px"
          endDimension="119px"
          fixedDimension="23px"
          direction="left"
          top="30px"
          left="185px"
          zIndex={-5}
          glitching={glitchFrame == 2}
        />
        <GradientBar
          color={theme.colors.primary.yellow}
          startDimension="120px"
          endDimension="253px"
          fixedDimension="28px"
          direction="left"
          top="-39px"
          left="230px"
          zIndex={-10}
          glitching={glitchFrame == 2}
        />
        <GradientBar
          color={theme.colors.primary.pink}
          startDimension="130px"
          endDimension="180px"
          fixedDimension="43px"
          direction="left"
          top="282px"
          left="540px"
          zIndex={5}
          glitching={glitchFrame == 2}
        />
        <GradientBar
          color={theme.colors.primary.cyan}
          startDimension="38px"
          endDimension="60px"
          fixedDimension="23px"
          direction="left"
          top="310px"
          left="690px"
          zIndex={10}
          glitching={glitchFrame == 2}
        />
      </GlitchWrapper>
    </div>
  );
};

export default Glitches;

const GlitchWrapper = styled.div`
  @media screen and (min-width: 425px) and (max-width: 560px) {
    transform: scale(0.58);
  }

  ${mediaQueries.largeMobile} {
    transform: scale(0.58);
  }
`;

const GlitchIcons = styled.img`
  z-index: 5;
  position: absolute;
`;

const StarsAndGears = styled(GlitchIcons)`
  transition: transform 1.5s;
  transform: rotate(50deg);
  z-index: 10;

  @keyframes rotate {
    0% {
      transform: rotate(50deg);
    }
    100% {
      transform: rotate(410deg);
    }
  }
`;

const FuschiaStar = styled(GlitchIcons)`
  width: 100px;
  left: 190px;
  top: 270px;

  transition: transform 1.5s;
  transform: rotate(48deg);

  @keyframes rotate {
    0% {
      transform: rotate(48deg);
    }
    100% {
      transform: rotate(408deg);
    }
  }
`;
