import tw, { styled, TwStyle } from "twin.macro";

import { Link } from "..";

const ButtonLink = styled(Link).attrs({
  removeSharedStyles: true,
  underlineOnHover: false,
})`
  font-weight: 500;
  ${tw`bg-primary-blue1 text-white border-none`}
  border-radius: 88px;
  padding: 15px 35px;
  transition: 250ms;
  z-index: 1;
  &:hover {
    transition: opacity 200ms;
    &:not(:disabled) {
      opacity: 0.85;
    }
  }
  &:focus {
    opacity: 0.8;
  }
  outline: none;
  display: flex;
  align-items: center;
`;

export default ButtonLink;
