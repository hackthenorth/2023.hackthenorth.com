import React from "react";
import { mediaQueries } from "src/utils/responsive";
import styled, { keyframes } from "styled-components";

const myAnimation = keyframes`
  0% {
    filter: none;
  }
  20% {
    filter: url(#filter);
  }
  50% {
    filter: url(#filter-2);
  }
  80% {
    filter: url(#filter-3);
  }
  94% {
    filter: none;
  }
`;

const Image = styled.image`
  filter: url(#filter);
  animation: 0.6s ${myAnimation} alternate infinite;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

interface GlitchEffectProps {
  image: string;
  alt: string;
  style?: React.CSSProperties;
}

const GlitchEffect: React.FC<GlitchEffectProps> = ({ image, alt, style }) => {
  const SvgContainer = styled.svg`
    max-width: 40vw;
    width: 450px;
    ${mediaQueries.large} {
      width: 35vw;
    }
    position: relative;
    ${style && { ...style }}; // Spread the style object
  `;

  return (
    <SvgContainer viewBox="0 0 900 900" style={style}>
      <defs>
        <filter
          id="filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feMorphology
            operator="dilate"
            radius="10 0"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            result="morphology1"
          ></feMorphology>
        </filter>
        <filter
          id="filter-2"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feMorphology
            operator="dilate"
            radius="10 2"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            result="morphology1"
          ></feMorphology>
        </filter>
        <filter
          id="filter-3"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feMorphology
            operator="dilate"
            radius="15 0"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            result="morphology1"
          ></feMorphology>
        </filter>
      </defs>
      <g>
        <title>{alt}</title>
        <Image
          x="0%"
          y="0%"
          // height="100%"
          // width="100%"
          preserveAspectRatio="xMidYMid meet"
          href={image}
          id="my-image"
        />
      </g>
    </SvgContainer>
  );
};

export default GlitchEffect;
