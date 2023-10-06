import React, { useMemo, useState, useEffect } from "react";
import useDimensions from "react-cool-dimensions";
import { useInView } from "react-intersection-observer";
import { useHoverEvents } from "src/utils";
import { keyframes } from "styled-components";
import { css, styled } from "twin.macro";

/**
 * TYPES
 */
export type CarouselDirection = "left" | "right";

export interface CarouselSpacerProps {
  width: number;
}

export interface CarouselProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Name of the carousel. Must be unique.
   */
  name: string;
  /**
   * amount of time to complete a full cycle, in seconds
   */
  speed?: number;
  /**
   * amount of space between each element, in px
   */
  spacing?: number;
  /**
   * which direction the carousel will scroll in
   */
  direction?: CarouselDirection;
  /**
   * whether or not the carousel should stop scrolling when hovering over it
   */
  stopOnHover?: boolean;
}

export interface CarouselTrackProps {
  resetPos: number;
  direction: CarouselDirection;
  speed: number;
  isPaused: boolean;
}

/**
 * HELPERS & CONSTANTS
 */
let resizeObserverPolyfill: any; // eslint-disable-line @typescript-eslint/no-explicit-any

const moveRight = (pos: number) => keyframes`
from {
  transform: translateX(-${pos}px);
}
to {
  transform: translateX(0);
}
`;

const moveLeft = (pos: number) => keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-${pos}px);
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselSpacer = styled.div<CarouselSpacerProps>`
  width: ${({ width }) => width}px;
`;

const carouselAnimation = css<CarouselTrackProps>`
  animation-name: ${({ direction, resetPos }) =>
    direction === "left" ? moveLeft(resetPos) : moveRight(resetPos)};
  animation-duration: ${({ speed }) => speed}s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-play-state: ${({ isPaused }) => (isPaused ? "paused" : "running")};
`;

const CarouselTrack = styled.div<CarouselTrackProps>`
  display: flex;
  align-items: center;
  position: relative;
  width: max-content;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  ${carouselAnimation}
  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

/**
 * COMPONENT
 */
const InfiniteCarousel: React.FC<CarouselProps> = ({
  name,
  speed = 20,
  spacing = 0,
  direction = "left",
  stopOnHover,
  children,
  ...rest
}) => {
  useEffect(() => {
    (async () => {
      const isResizeObserverSupported = "ResizeObserver" in window;
      if (!isResizeObserverSupported) {
        const module = await import("@juggle/resize-observer");
        resizeObserverPolyfill = module.ResizeObserver;
      }
    })();
  }, []);

  /**
   * Find the width of the original elements to determine when
   * to reset carousel animation
   */
  // const [mounted, setMounted] = useState(false)
  const { observe: elementsRef, width: originalElementsWidth } = useDimensions({
    polyfill: resizeObserverPolyfill,
  });

  /**
   * When hovering, stop the carousel from scrolling (if `stopOnHover` enabled)
   */
  const [isHovering, setIsHovering] = useState(false);

  const { onHoverStart, onHoverEnd, toggleHover } =
    useHoverEvents(setIsHovering);

  /**
   * When not visible, stop the carousel from scrolling.
   */
  const [containerRef, isInView] = useInView();

  // whether or not the carousel should stop scrolling
  const shouldStop = useMemo(
    () => (isHovering && stopOnHover) || !isInView,
    [stopOnHover, isHovering, isInView]
  );

  /**
   * Duplicate each element to simulate elements wrapping
   * around infinitely and add spacing to each element
   */
  const clonedElements = useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    const clonedArray = childrenArray.concat(childrenArray);
    return clonedArray.map((child, i) => (
      <React.Fragment key={`${name}-${i}`}>
        {child}
        <CarouselSpacer width={spacing} />
      </React.Fragment>
    ));
  }, [name, children, spacing]);

  return (
    <CarouselContainer
      ref={containerRef}
      className="infinite-carousel"
      role="region"
      aria-live="polite"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={toggleHover}
      {...rest}
    >
      <CarouselTrack
        ref={elementsRef}
        className="infinite-carousel--track"
        resetPos={originalElementsWidth / 2} // since we duplicated the elements
        direction={direction}
        speed={speed}
        isPaused={shouldStop}
      >
        {clonedElements}
      </CarouselTrack>
    </CarouselContainer>
  );
};

export default React.memo(InfiniteCarousel);
