import React from "react";
import {
  GearYellowImg,
  GlitchBehindGroup1,
  GlitchBottomGroup1,
  GlitchBottomGroup2,
  GlitchTopGroup1,
  GlitchTopGroup2,
  GlitchTopGroup3,
  StarFushiaImg,
  YellowStar,
  orangeGear,
  squareGlow,
} from "src/assets/img";
import GradientBar from "src/components/base/GradientBar";
import { mediaQueries, useDeviceSize } from "src/utils";
import styled, { useTheme } from "styled-components";

interface GlitchProps {
  glitchFrame: number;
  glitching: boolean;
}

const Glitches: React.FC<GlitchProps> = ({ glitchFrame, glitching }) => {
  const theme = useTheme();
  const isMedium = useDeviceSize("medium");
  const isTablet = useDeviceSize("tablet");
  const isMobile = useDeviceSize("largeMobile");

  return (
    <div
      style={{
        position: "absolute",
        top: isMobile ? "64px" : "0",
        left: isMedium
          ? `calc(50vw - ${
              isTablet ? (isMobile ? "308px" : "384px") : "400px"
            })`
          : "-53px",
      }}
    >
      <GlitchWrapper
        style={{
          visibility: glitchFrame === 0 ? "visible" : "hidden",
        }}
      >
        <GlitchIcons
          src={GlitchBehindGroup1}
          alt=""
          style={{ left: 85, top: -10, zIndex: -5 }}
        />
        <GlitchIcons
          src={GlitchTopGroup1}
          alt=""
          style={{ left: 170, top: 5 }}
        />
        <GlitchIcons
          src={squareGlow}
          alt=""
          style={{ width: 50, left: 475, top: 525 }}
        />
        <GlitchIcons
          src={GlitchBottomGroup1}
          alt=""
          style={{ left: 140, top: 365 }}
        />
        <StarsAndGears
          src={YellowStar}
          alt=""
          className="hoverRotate"
          style={{ width: 180, left: 40, top: 10 }}
        />
        <StarsAndGears
          src={orangeGear}
          alt=""
          className="hoverRotate"
          style={{ width: "90px", left: 230, top: 540 }}
        />
        <FuschiaStar src={StarFushiaImg} alt="" className="hoverRotate" />
        <GradientBar
          color={theme.colors.primary.cyan}
          startDimension="50px"
          endDimension="80px"
          fixedDimension="23px"
          direction="top"
          top="36px"
          left="153px"
          zIndex={3}
          glitching={glitching && glitchFrame == 0}
        />
        <GradientBar
          color={theme.colors.primary.cyan}
          startDimension="80px"
          endDimension="140px"
          fixedDimension="31px"
          direction="bottom"
          top="195px"
          left="515px"
          zIndex={3}
          glitching={glitching && glitchFrame == 0}
        />
        <GradientBar
          color={theme.colors.primary.yellow}
          startDimension="100px"
          endDimension="192px"
          fixedDimension="16px"
          direction="left"
          top="504px"
          left="80px"
          zIndex={-5}
          glitching={glitching && glitchFrame == 0}
        />
        <GradientBar
          color={theme.colors.primary.pink}
          startDimension="160px"
          endDimension="237px"
          fixedDimension="52px"
          direction="left"
          top="520px"
          left="80px"
          zIndex={3}
          glitching={glitching && glitchFrame == 0}
        />
        <GradientBar
          color={theme.colors.primary.purple}
          startDimension="70px"
          endDimension="110px"
          fixedDimension="33px"
          direction="right"
          top="555px"
          left="420px"
          zIndex={3}
          glitching={glitching && glitchFrame == 0}
        />
      </GlitchWrapper>
      <GlitchWrapper
        style={{
          visibility: glitchFrame === 1 ? "visible" : "hidden",
        }}
      >
        <GlitchIcons
          src={GlitchTopGroup2}
          alt=""
          style={{ left: 95, top: -10, zIndex: -5 }}
        />
        <GlitchIcons
          src={squareGlow}
          alt=""
          style={{ width: 50, left: 140, top: 250 }}
        />
        <GlitchIcons
          src={GlitchBottomGroup2}
          alt=""
          style={{ left: 175, top: 442 }}
        />
        <StarsAndGears
          src={orangeGear}
          alt=""
          className="hoverRotate"
          style={{ width: "110px", left: 70, top: 470 }}
        />
        <StarsAndGears
          src={GearYellowImg}
          alt=""
          className="hoverRotate"
          style={{ width: "90px", left: 470, top: 520 }}
        />
        <FuschiaStar src={StarFushiaImg} alt="" className="hoverRotate" />
        <GradientBar
          color={theme.colors.primary.yellow}
          startDimension="50px"
          endDimension="85px"
          fixedDimension="23px"
          direction="top"
          top="5px"
          left="154px"
          zIndex={3}
          glitching={glitchFrame == 1}
        />
        <GradientBar
          color={theme.colors.primary.orange}
          startDimension="85px"
          endDimension="118px"
          fixedDimension="24px"
          direction="right"
          top="43px"
          left="130px"
          zIndex={5}
          glitching={glitchFrame == 1}
        />
        <GradientBar
          color={theme.colors.primary.cyan}
          startDimension="55px"
          endDimension="105px"
          fixedDimension="18px"
          direction="right"
          top="180px"
          left="130px"
          zIndex={5}
          glitching={glitchFrame == 1}
        />
        <GradientBar
          color={theme.colors.primary.cyan}
          startDimension="80px"
          endDimension="140px"
          fixedDimension="31px"
          direction="bottom"
          top="195px"
          left="515px"
          zIndex={3}
          glitching={glitchFrame == 1}
        />
        <GradientBar
          color={theme.colors.primary.pink}
          startDimension="180px"
          endDimension="237px"
          fixedDimension="52px"
          direction="left"
          top="518px"
          left="70px"
          zIndex={2}
          glitching={glitchFrame == 1}
        />
        <GradientBar
          color={theme.colors.primary.cyan}
          startDimension="110px"
          endDimension="130px"
          fixedDimension="35px"
          direction="bottom"
          top="480px"
          left="141px"
          zIndex={5}
          glitching={glitchFrame == 1}
        />
      </GlitchWrapper>
      <GlitchWrapper
        style={{
          visibility: glitchFrame === 2 ? "visible" : "hidden",
        }}
      >
        <GlitchIcons
          src={GlitchTopGroup3}
          alt=""
          style={{ left: 95, top: -12, zIndex: -5 }}
        />
        <GlitchIcons
          src={GlitchBottomGroup2}
          alt=""
          style={{ left: 175, top: 442 }}
        />
        <GlitchIcons
          src={squareGlow}
          alt=""
          style={{ width: 50, left: 140, top: 250 }}
        />
        <StarsAndGears
          src={orangeGear}
          alt=""
          className="hoverRotate"
          style={{ width: "110px", left: 70, top: 470 }}
        />
        <StarsAndGears
          src={GearYellowImg}
          alt=""
          className="hoverRotate"
          style={{ width: "90px", left: 470, top: 520 }}
        />
        <FuschiaStar src={StarFushiaImg} alt="" className="hoverRotate" />
        <GradientBar
          color={theme.colors.primary.yellow}
          startDimension="50px"
          endDimension="85px"
          fixedDimension="23px"
          direction="top"
          top="5px"
          left="154px"
          zIndex={3}
          glitching={glitchFrame == 2}
        />
        <GradientBar
          color={theme.colors.primary.orange}
          startDimension="85px"
          endDimension="118px"
          fixedDimension="24px"
          direction="left"
          top="43px"
          left="130px"
          zIndex={5}
          glitching={glitchFrame == 2}
        />
        <GradientBar
          color={theme.colors.primary.cyan}
          startDimension="55px"
          endDimension="105px"
          fixedDimension="18px"
          direction="right"
          top="180px"
          left="130px"
          zIndex={5}
          glitching={glitchFrame == 2}
        />
        <GradientBar
          color={theme.colors.primary.cyan}
          startDimension="80px"
          endDimension="140px"
          fixedDimension="31px"
          direction="top"
          top="50px"
          left="510px"
          zIndex={3}
          glitching={glitchFrame == 2}
        />
        <GradientBar
          color={theme.colors.primary.pink}
          startDimension="180px"
          endDimension="237px"
          fixedDimension="52px"
          direction="left"
          top="518px"
          left="70px"
          zIndex={2}
          glitching={glitchFrame == 2}
        />
        <GradientBar
          color={theme.colors.primary.yellow}
          startDimension="110px"
          endDimension="130px"
          fixedDimension="35px"
          direction="bottom"
          top="480px"
          left="141px"
          zIndex={5}
          glitching={glitchFrame == 2}
        />
      </GlitchWrapper>
    </div>
  );
};

export default Glitches;

const GlitchWrapper = styled.div`
  ${mediaQueries.largeMobile} {
    transform: scale(0.79);
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
  width: 90px;
  left: 490px;
  top: 150px;

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
