import React, { ComponentPropsWithoutRef } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "twin.macro";

export interface SpinnerProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Color of the spinner rings. Defaults to darkText theme color.
   */
  color?: string;
  /**
   * Size of the spinner in px. Defaults to 24px;
   */
  size?: number;
}

const Container = styled.div`
  display: inline-grid;
  justify-content: center;
  align-content: center;
  & > * {
    grid-row: 1;
    grid-column: 1;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ANIMATION_DURATION_S = 1.2;

const LoadingRing = styled.div<SpinnerProps>`
  position: relative;
  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-width: ${({ size }) => size! / 8}px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${({ color }) => color} transparent transparent transparent;
  animation: ${spin} ${ANIMATION_DURATION_S}s linear infinite;
  &:nth-child(2) {
    animation-delay: -${ANIMATION_DURATION_S / 2}s;
  }
  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

/**
 * Two spinning semicircles, intended to indicate
 * loading or progress of some sort.
 */
const Spinner: React.FC<SpinnerProps> = ({
  color = theme`colors.primary.blue1`,
  size = 24,
  ...rest
}) => (
  <Container {...rest}>
    <LoadingRing size={size} color={color} />
    <LoadingRing size={size} color={color} />
  </Container>
);

export default Spinner;
