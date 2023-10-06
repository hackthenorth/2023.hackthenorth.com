import { theme } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import styled, { css } from "styled-components";

import { Heading2, LargeBody } from "../../styles";

export const AboutText =
  "This September, join 1,000+ hackers from all around the world for a hackathon like no other. Discover a community of like-minded hackers, connect with world-class mentors, and build because you love to build. At Hack the North 10, you'll experience engaging workshops, exciting activities, and have the chance to network with the most exciting companies in tech – you're in for a great time. Not from Waterloo? We cover food, travel expenses, and lodging so you can focus on turning your ideas into reality.";

export const YouBelongText =
  "Getting into tech can be hard. We're here to make that easier. Hack the North is dedicated to building an inclusive experience for attendees from across the globe. We strive to foster a space where everyone feels welcomed to pursue their dreams and create something they're proud of.";

interface BrowserProps {
  inView: boolean;
}

export const PopUpWrapper = styled.div<BrowserProps>`
  transform: scale(0);
  ${({ inView }) =>
    inView
      ? css`
          animation: scaleUp 0.9s 1 forwards;
          animation-delay: 0.1s;
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
`;

interface GradientProps {
  gradientStartColor: string;
  gradientEndColor: string;
}

export const GradientOverlay = styled.div<GradientProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    ${(props) => props.gradientStartColor},
    ${(props) => props.gradientEndColor}
  );
  opacity: 0.2;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ResponsiveH2 = styled(Heading2)`
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.text.dark.white};
  ${mediaQueries.tablet} {
    font-size: 36px;
    font-weight: 900;
    line-height: 43px;
  }
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 36px;
  }
  ${mediaQueries.largeMobile} {
    font-size: 24px;
  }
`;

export const ResponsiveLB = styled(LargeBody)`
  color: ${({ theme }) => theme.colors.text.dark.gray};
  line-height: 32px;
  ${mediaQueries.tablet} {
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 28px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 25.6px;
  }
`;
