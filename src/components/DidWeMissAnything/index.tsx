import { trackGoal } from "fathom-client";
import React from "react";
import { MailingListSignup } from "src/components";
import { Icon } from "src/components/base";
import { SOCIALS } from "src/constants/social";
import { Body, Heading2 } from "src/styles";
import { theme } from "src/styles";
import { mediaQueries, useWindowSize } from "src/utils";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 5%;
  margin: 0;
  padding-bottom: 7%;
  width: 88%;
  max-width: 600px;
`;

const Heading = styled(Heading2)`
  color: white;
`;

const Subtext = styled(Body)`
  color: ${theme.colors.text.dark.gray};
`;
const SubtextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2%;
  margin-bottom: 3%;
`;

const StyledLink = styled.a`
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 700;
  width: fit-content;
  text-decoration: none;
  outline: none;
  &:hover,
  &:focus {
    background-image: linear-gradient(
      to left,
      ${theme.colors.primary.cyan} 0%,
      ${theme.colors.primary.purple} 100%
    );
    cursor: pointer;
  }
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(
    to left,
    ${theme.colors.primary.blue} 0%,
    ${theme.colors.primary.purple} 100%
  );
  -webkit-background-image: linear-gradient(
    to left,
    ${theme.colors.primary.blue} 0%,
    ${theme.colors.primary.purple} 100%
  );
`;
const SocialsWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-bottom: 5%;
  ${mediaQueries.tablet} {
    width: 80%;
  }
`;
const DidWeMissAnything: React.FC = () => {
  const windowWidth = useWindowSize().windowWidth || 0;
  return (
    <Wrapper>
      <Heading>Did we miss anything?</Heading>
      <SubtextWrapper>
        <Subtext>Reach out to us at&nbsp;</Subtext>
        <StyledLink
          href="mailto:hello@hackthenorth.com"
          onClick={
            () => trackGoal("DDFIB6DS", 0) // Sign Up: Clicked Email Contact
          }
        >
          hello@hackthenorth.com
        </StyledLink>{" "}
        <span role="img" aria-label="heart emoji">
          &nbsp;😊
        </span>
      </SubtextWrapper>
      <SocialsWrapper>
        {Object.entries(SOCIALS).map(
          ([id, { icon, link, fathomEventCode }]) => (
            <a
              key={id}
              href={link}
              aria-label={id}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackGoal(fathomEventCode, 0)}
            >
              <Icon name={icon} width={24} height={24} hover={true} />
            </a>
          )
        )}
      </SocialsWrapper>
      <MailingListSignup
        placeholder={
          windowWidth > 1125
            ? "Sign up for the latest news from Hack the North!"
            : "Sign up for the latest!"
        }
      >
        <p>Submit</p>
      </MailingListSignup>
    </Wrapper>
  );
};

export default DidWeMissAnything;
