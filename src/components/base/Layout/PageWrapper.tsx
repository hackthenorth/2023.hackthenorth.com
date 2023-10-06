import styled from "styled-components";

/**
 * A component to wrap pages
 */
const PageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.dark};
  z-index: 0;
`;

export default PageWrapper;
