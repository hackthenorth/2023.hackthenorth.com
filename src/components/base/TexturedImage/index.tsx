import { styled } from "twin.macro";

export interface TextureSVGProps {
  texture?: string; // url to texture mask asset
}

const TexturedAsset = styled.div<TextureSVGProps>`
  ${({ texture }) =>
    texture &&
    `
      -webkit-mask-image: url(${texture});
      -o-mask-image: url(${texture});
      -moz-mask-image: url(${texture});
      mask-image: url(${texture});
    `}
`;

export default TexturedAsset;
