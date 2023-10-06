import React, { ComponentPropsWithoutRef } from "react";
import { SectionId } from "src/constants/section";
import styled from "styled-components";

/**
 * A component to hold all styles common between sections.
 */
const StyledSection = styled.section`
  margin: 0 auto;
  // Fixes an off by one rounding error for section boundaries
  margin-top: -1px;
  width: 100%;
  position: relative;
`;

type Props = ComponentPropsWithoutRef<"section"> & {
  id?: SectionId;
};

const SectionWrapper: React.FC<Props> = ({ id, children, ...props }) => (
  <StyledSection id={id} {...props}>
    {children}
  </StyledSection>
);

export default SectionWrapper;
