import React from "react";
import styled from "styled-components";

interface GradientBarProps {
  color: string;
  startDimension: string;
  endDimension: string;
  fixedDimension: string;
  direction: string;
  top: string;
  left: string;
  zIndex: number;
  glitching: boolean;
}

const Gradient = styled.div<GradientBarProps>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: ${(props) => props.zIndex};
  background: linear-gradient(
    to ${(props) => props.direction},
    ${(props) => props.color},
    transparent
  );

  ${(props) =>
    props.direction === "right" || props.direction === "left"
      ? `width: ${props.startDimension};
      height: ${props.fixedDimension};
      transition: width 1s;`
      : `height: ${props.startDimension};
      width: ${props.fixedDimension};
      transition: height 1s;`}

  ${(props) =>
    props.glitching &&
    (props.direction === "left" || props.direction === "right") &&
    `width: ${props.endDimension}
  `}
    
  ${(props) =>
    props.glitching &&
    (props.direction === "top" || props.direction === "bottom") &&
    `height: ${props.endDimension}
  `}
`;

const GradientBar: React.FC<GradientBarProps> = ({
  color,
  startDimension,
  endDimension,
  fixedDimension,
  direction,
  top,
  left,
  zIndex,
  glitching,
}) => {
  return (
    <Gradient
      color={color}
      startDimension={startDimension}
      endDimension={endDimension}
      fixedDimension={fixedDimension}
      direction={direction}
      top={top}
      left={left}
      zIndex={zIndex}
      glitching={glitching}
    />
  );
};

export default GradientBar;
