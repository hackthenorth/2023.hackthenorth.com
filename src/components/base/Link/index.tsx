import React, { ComponentPropsWithRef, useMemo } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { ArrowLink } from "src/assets/img";
import { LargeBodyBold } from "src/styles";
import { mediaQueries } from "src/utils";
import styled from "styled-components";

export type LinkProps = ComponentPropsWithRef<"a"> & {
  /**
   *
   */
  newTab?: boolean;
};

const isRelativeHref = (href: string) => {
  try {
    new URL(href);
    return false;
  } catch (err) {
    return true;
  }
};

const LargeBodyBoldWhite = styled(LargeBodyBold)`
  color: ${({ theme }) => theme.colors.text.dark.white};
  width: fit-content;
  line-height: 160%;
  display: inline-block;
`;

const RawLink = styled.a`
  color: inherit;
  width: fit-content;
  text-decoration: none;
`;

const Link: React.FC<LinkProps> = ({
  newTab,
  href = "",
  children,
  ...rest
}) => {
  const isInternal: boolean = useMemo(() => isRelativeHref(href), [href]);
  const target = newTab ? "_blank" : undefined;
  const rel = newTab ? "noopener noreferrer" : "";

  return isInternal ? (
    <RouterLink to={href}>
      <a target={target} href={href} rel={rel} {...rest}>
        {children}
      </a>
    </RouterLink>
  ) : (
    <RawLink
      href={href}
      target={target}
      rel={rel}
      {...(rest as ComponentPropsWithRef<"a">)}
    >
      {children}
    </RawLink>
  );
};

// source: https://codepen.io/mteplitski/pen/NWGQRZV
const UnderlineWrapper = styled.span`
  outline: none;
  width: fit-content;
  text-decoration: underline;
  text-underline-offset: 5px;
  &:hover,
  &:focus {
    opacity: 0.6;
    cursor: pointer;
  }
`;

const Image = styled.img`
  position: absolute;
  padding-top: 5px;
  padding-left: 8px;
  ${mediaQueries.tablet} {
    padding-top: 1px;
  }
`;

const StyledLink: React.FC<LinkProps> = ({ children, ...rest }) => (
  <Link {...(rest as any)}>
    <LargeBodyBoldWhite>
      <UnderlineWrapper>{children}</UnderlineWrapper>
    </LargeBodyBoldWhite>
  </Link>
);

const SponsorLink: React.FC<LinkProps> = ({ children, ...rest }) => (
  <Link {...(rest as any)}>
    <LargeBodyBoldWhite>
      <UnderlineWrapper>
        {children}
        <Image alt="Arrow link" src={ArrowLink} />
      </UnderlineWrapper>
    </LargeBodyBoldWhite>
  </Link>
);

export { StyledLink as Link, Link as UnstyledLink, SponsorLink as SponsorLink };
