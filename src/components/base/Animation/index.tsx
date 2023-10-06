import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import { useHoverEvents } from "src/utils";
import { useReducedMotion } from "src/utils/hooks/useReducedMotion";
import styled, { keyframes } from "styled-components";

import { TextureProps, maskVariants, MaskVariant } from "./constants";

export type AnimationProps = React.ComponentPropsWithoutRef<"div"> &
  TextureProps & {
    isPaused?: boolean;
    loop?: boolean;
    speed?: number;
    load: () => Promise<any>;
  };

const Container = styled.span`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;
`;

const Animation: React.FC<AnimationProps> = ({
  speed,
  isPaused,
  loop = true,
  texture,
  mask,
  load,
  ...rest
}) => {
  const [isPlaying, setIsPlaying] = useState(!isPaused);
  const [animationData, setAnimationData] = useState();
  const { onHoverStart, toggleHover } = useHoverEvents(setIsPlaying);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    load().then(setAnimationData);
  }, [load]);

  return (
    <Container
      aria-hidden
      onMouseEnter={!isPlaying ? onHoverStart : undefined}
      onClick={toggleHover}
      {...rest}
    >
      <TexturedAsset
        play={!isPaused && !prefersReducedMotion}
        speed={speed}
        texture={texture}
        mask={mask}
        loop={loop}
        animationData={animationData}
      />
    </Container>
  );
};

// only render texture mask if specified
const TexturedAsset = styled(Lottie)<TextureProps>`
  width: 100%;
  height: 100%;
  ${({ texture }) =>
    texture &&
    `
      -webkit-mask-image: url(${texture});
      -o-mask-image: url(${texture});
      -moz-mask-image: url(${texture});
      mask-image: url(${texture});
    `}
  ${({ mask }) =>
    mask &&
    `
      mask-image: ${maskVariants[mask as MaskVariant].maskImage};
      filter: ${maskVariants[mask as MaskVariant].filter};
    `}
`;

const generateFlickerKeyframes = (
  keyframeCount = 10,
  minOpacity = 0.5,
  maxOpacity = 1,
  minDuration = 0.1,
  maxDuration = 0.5
) => {
  let keyframesCSS = "";

  for (let i = 0; i <= keyframeCount; i++) {
    const opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
    const duration = Math.random() * (maxDuration - minDuration) + minDuration;
    const delay = Math.random() * (1 - 0.1) + 0.1;

    keyframesCSS += `
      ${(i * 100) / keyframeCount}% {
        opacity: ${opacity};
        visibility: ${i % 2 === 0 ? "visible" : "hidden"};
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      }
    `;
  }

  return keyframesCSS;
};

export const FlickerAnimationKeyframes: () => ReturnType<typeof keyframes> =
  () => keyframes`
  ${generateFlickerKeyframes()}
`;

export default React.memo(Animation);
