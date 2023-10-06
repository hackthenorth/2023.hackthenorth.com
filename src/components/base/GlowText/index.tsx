import { mediaQueries } from "src/utils";
import styled from "styled-components";

interface GlowTextProps {
  color: string;
}

const GlowText = styled.span<GlowTextProps>`
  text-shadow: 0 0 10px ${(props) => props.color};
  ${mediaQueries.tablet} {
    text-shadow: none;
  }
`;

export default GlowText;
