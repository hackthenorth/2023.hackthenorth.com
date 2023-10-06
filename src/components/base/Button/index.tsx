import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface ButtonGradientColors {
  gradientStartColor: string;
  gradientEndColor: string;
  hoverGradientStartColor: string;
  hoverGradientEndColor: string;
  width: number;
  boxShadow: string;
}

type Props = ComponentPropsWithoutRef<"button"> & ButtonGradientColors;

const ButtonContainer = styled.div<ButtonGradientColors>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.text.dark.white};
  padding: 8px 32px 10px 32px;
  background: linear-gradient(
    270deg,
    ${(props) => props.gradientStartColor} 0%,
    ${(props) => props.gradientEndColor} 98.64%
  );
  width: ${(props) => props.width}px;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0 0 10px ${(props) => props.boxShadow};
    background: linear-gradient(
      270deg,
      ${(props) => props.hoverGradientStartColor} 0%,
      ${(props) => props.hoverGradientEndColor} 98.64%
    );
  }
`;

const ButtonText = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
`;

const Button: React.FC<Props> = ({
  gradientStartColor,
  gradientEndColor,
  hoverGradientStartColor,
  hoverGradientEndColor,
  width,
  boxShadow,
  ...props
}) => (
  <ButtonContainer
    gradientStartColor={gradientStartColor}
    gradientEndColor={gradientEndColor}
    hoverGradientEndColor={hoverGradientEndColor}
    hoverGradientStartColor={hoverGradientStartColor}
    width={width}
    boxShadow={boxShadow}
  >
    <ButtonText>{props.children}</ButtonText>
  </ButtonContainer>
);

export default Button;
