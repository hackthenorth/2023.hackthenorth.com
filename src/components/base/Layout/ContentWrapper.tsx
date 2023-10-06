import React from "react";
import styled from "styled-components";

/**
 * A component to hold content for a section
 */
const ContentWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0;
  z-index: 20;
`;

export default React.memo(ContentWrapper);
