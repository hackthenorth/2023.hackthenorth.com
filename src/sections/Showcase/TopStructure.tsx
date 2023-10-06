import React, { useEffect, useState } from "react";
import { TopStructureRightImg, TopStructureLeftImg } from "src/assets/img";
import { LargeBodyMedium } from "src/styles";
import { mediaQueries, useWindowSize } from "src/utils";
import styled, { css } from "styled-components";

const ROLLINGTEXT = "HACK THE NORTH 10 ".repeat(12);

interface TextProps {
  w: number;
}

const TopStructure: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const [currWindowWidth, setCurrWindowWidth] = useState(1200);
  useEffect(() => {
    if (!windowWidth || windowWidth > 1200) {
      setCurrWindowWidth(1200);
    } else {
      setCurrWindowWidth(windowWidth);
    }
  }, [currWindowWidth, windowWidth]);
  return (
    <Wrapper>
      <TopStructureRight
        draggable="false"
        alt=""
        loading="lazy"
        src={TopStructureRightImg}
      />
      <TopStructureLeft
        draggable="false"
        alt=""
        loading="lazy"
        src={TopStructureLeftImg}
      />
      <RollingTextWrapperLeft>
        <RollingTextLeft w={currWindowWidth}>{ROLLINGTEXT}</RollingTextLeft>
      </RollingTextWrapperLeft>
      <RollingTextWrapperRight>
        <RollingTextRight w={currWindowWidth}>{ROLLINGTEXT}</RollingTextRight>
      </RollingTextWrapperRight>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: -3%;
  width: 100%;
  height: auto;
  visibility: visible;

  ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;

const TopStructureRight = styled.img`
  position: absolute;
  top: 0;
  width: 10%;
  display: block;
  left: 53%;
  height: auto;
`;

const TopStructureLeft = styled.img`
  position: relative;
  top: 0;
  width: 47.1%;
  display: block;
  left: 6%;
  height: auto;
`;

const RollingTextWrapper = styled.span`
  position: absolute;
  display: block;
  height: auto;
  overflow: hidden;
`;

const RollingTextWrapperLeft = styled(RollingTextWrapper)`
  top: 19%;
  width: 46.76%;
  left: 6.18%;
  transform: skew(0deg, -9.7deg);
`;

const RollingTextWrapperRight = styled(RollingTextWrapper)`
  top: 12.6%;
  width: 12%;
  left: 53.14%;
  transform: skew(-2deg, 20deg);
`;

const RollingText = styled(LargeBodyMedium)`
  position: relative;
  display: block;
  color: white;
  white-space: nowrap;
  @keyframes roll {
    0% {
      transform: translateX(-815px);
    }
    100% {
      transform: translateX(0);
    }
  }
  text-align: left;
  animation: 10s linear infinite roll;
`;

const RollingTextLeft = styled(RollingText)<TextProps>``;

const RollingTextRight = styled(RollingText)<TextProps>`
  text-align: left;
  ${({ w }) =>
    css`
      left: ${-w * 0.45}px;
    `}
  opacity: 0.5;
`;

export default TopStructure;
