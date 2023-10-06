import React, { ComponentPropsWithoutRef } from "react";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";

interface WindowProps {
  gradientStartColor: string;
  gradientEndColor: string;
}

type Props = ComponentPropsWithoutRef<"div"> & WindowProps;

const WindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.text.dark.white};
`;

const WindowToolbar = styled.div<WindowProps>`
  padding: 12px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 8px;
  background: linear-gradient(
    90deg,
    ${(props) => props.gradientStartColor},
    ${(props) => props.gradientEndColor}
  );

  ${mediaQueries.largeMobile} {
    padding: 9px;
    gap: 6px;
  }
`;

const ShadowBox = styled.div<WindowProps>`
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    ${(props) => props.gradientStartColor},
    ${(props) => props.gradientEndColor}
  );
  filter: blur(13px);
  opacity: 0.4;
  transition: opacity 0.3s;
  border-radius: inherit;
`;

const WindowToolbarIcon = styled.div`
  width: 14px;
  height: 14px;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid ${({ theme }) => theme.colors.text.dark.white};

  ${mediaQueries.largeMobile} {
    width: 11px;
    height: 11px;
  }
`;

const WindowContent = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
`;

const WindowContentGradient = styled.div<WindowProps>`
  display: flex;
  justify-content: center;
  background: linear-gradient(
      90deg,
      ${(props) => props.gradientStartColor}33,
      ${(props) => props.gradientEndColor}33
    ),
    #141425;
`;

const BrowserWindow: React.FC<Props> = ({
  gradientStartColor,
  gradientEndColor,
  ...props
}) => (
  <WindowContainer>
    <ShadowBox
      gradientStartColor={gradientStartColor}
      gradientEndColor={gradientEndColor}
    />
    <WindowToolbar
      gradientStartColor={gradientStartColor}
      gradientEndColor={gradientEndColor}
    >
      <WindowToolbarIcon />
      <WindowToolbarIcon />
      <WindowToolbarIcon />
    </WindowToolbar>
    <WindowContent>{props.children}</WindowContent>
  </WindowContainer>
);

const BrowserWindowGradient: React.FC<Props> = ({
  gradientStartColor,
  gradientEndColor,
  ...props
}) => (
  <WindowContainer>
    <ShadowBox
      gradientStartColor={gradientStartColor}
      gradientEndColor={gradientEndColor}
    />
    <WindowToolbar
      gradientStartColor={gradientStartColor}
      gradientEndColor={gradientEndColor}
    >
      <WindowToolbarIcon />
      <WindowToolbarIcon />
      <WindowToolbarIcon />
    </WindowToolbar>
    <WindowContentGradient
      gradientStartColor={gradientStartColor}
      gradientEndColor={gradientEndColor}
    >
      {props.children}
    </WindowContentGradient>
  </WindowContainer>
);

export {
  BrowserWindow as BrowserWindow,
  BrowserWindowGradient as BrowserWindowGradient,
};
