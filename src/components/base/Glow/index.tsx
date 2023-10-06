import React, { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { useWindowSize } from "src/utils";
import { styled } from "twin.macro";

type TGlowProps = ComponentPropsWithoutRef<"div"> & {
  radius: number;
  color: string; // css color (rgba, hex, etc.)
  opacity: number;
  horizAlignment: "left" | "right";
  vertAlignment: "top" | "bottom";
};

const Glow: React.FC<TGlowProps> = (props) => {
  const { windowWidth } = useWindowSize();
  const [scaleFactor, setScaleFactor] = useState<number>(1);

  // somewhat "smart" scaling: glows should get bigger w/ the screen
  useEffect(() => {
    if (!windowWidth || windowWidth < 1920) return;
    setScaleFactor(windowWidth / 1920);
  }, [windowWidth]);

  return <GlowWrapper scaleFactor={scaleFactor} {...props} />;
};

/*
 * The transform makes sure that all "positioning" happens relative to the center of the glow
 * Since the weight can be in four corners (tr, tl, br, bl), we need to know which direction to move
 * hence the need for horizAlignment and vertAlignment
 */
const GlowWrapper = styled.div<TGlowProps & { scaleFactor: number }>(
  ({ radius, color, opacity, horizAlignment, vertAlignment, scaleFactor }) => `
  pointer-events: none;
  position: absolute;
  height: ${radius * 2 * scaleFactor}px;
  width: ${radius * 2 * scaleFactor}px;
  background: radial-gradient(circle farthest-side, ${color}, transparent);
  opacity: ${opacity};
  transform: translateX(${
    horizAlignment === "left" ? "-" : ""
  }50%) translateY(${vertAlignment === "top" ? "-" : ""}50%);
  z-index: -1;
`
);

export default Glow;
