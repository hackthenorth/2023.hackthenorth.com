import styled from "styled-components";

const Flex = styled.div<{
  column?: boolean;
  reverse?: boolean;
  justify?: string;
  align?: string;
}>`
  display: flex;
  flex-direction: ${({ column, reverse }) =>
    reverse
      ? column
        ? "column-reverse"
        : "row-reverse"
      : column
      ? "column"
      : "row"};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

export default Flex;
