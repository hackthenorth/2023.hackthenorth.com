import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

type SpacerProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * horizontal space the spacer takes up. Defaults to `100%` when `width` is set, otherwise 0
   */
  width?: number | string | boolean;
  /**
   * vertical space the spacer takes up. Defaults to `100%` when `height` is set, otherwise 0
   */
  height?: number | string | boolean;
  /**
   * display of the spacer. Defaults to `block`
   */
  display?: string;
};

export type SpacerType = React.FC<SpacerProps>;

const getSpacerSize = (size: number | string | boolean | undefined) => {
  if (typeof size === "number") {
    return `${size}px`;
  } else if (typeof size === "string") {
    return size;
  } else if (size) {
    return "100%";
  } else {
    return "0";
  }
};

const RawSpacer = styled.div<SpacerProps>`
  width: ${({ width }) => getSpacerSize(width)};
  min-width: ${({ width }) => getSpacerSize(width)};
  height: ${({ height }) => getSpacerSize(height)};
  min-height: ${({ height }) => getSpacerSize(height)};
  display: ${({ display }) => display};
`;

export const Spacer: SpacerType = ({
  width,
  height,
  display = "block",
  ...rest
}) => <RawSpacer width={width} height={height} display={display} {...rest} />;

export default Spacer;
