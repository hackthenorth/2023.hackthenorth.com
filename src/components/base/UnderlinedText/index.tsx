import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

import GlowText from "../GlowText";

// source: https://codepen.io/mteplitski/pen/NWGQRZV

interface UnderlinedTextProps extends ComponentPropsWithoutRef<"h2"> {
  color: string;
  glow: boolean;
}

const Underline = styled.span<UnderlinedTextProps>`
  color: white;
  position: relative;
  width: fit-content;

  &::after {
    content: "";
    position: absolute;
    z-index: -5;
    transition: width 500ms;
    left: -6px;
    bottom: 0px;
    background: linear-gradient(
      to right,
      ${(props) => props.color},
      transparent
    );
    width: ${(props) => (props.glow ? `calc(100% + 12px)` : `100px`)};
    height: 20px;
    opacity: 0.5;
  }

  &:focus-visible::after,
  &:hover::after {
    width: calc(100% + 12px);
  }
`;

const UnderlinedText: React.FC<UnderlinedTextProps> = ({
  color,
  glow,
  ...props
}) => {
  return (
    <>
      {glow ? (
        <GlowText color={color}>
          <Underline color={color} glow={glow}>
            {props.children}
          </Underline>
        </GlowText>
      ) : (
        <Underline color={color} glow={glow}>
          {props.children}
        </Underline>
      )}
    </>
  );
};

export default UnderlinedText;
