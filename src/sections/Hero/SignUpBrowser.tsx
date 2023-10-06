import { trackGoal } from "fathom-client";
import React from "react";
import { MailingListSignupHero } from "src/components";
import { UnstyledLink, BrowserWindowGradient } from "src/components/base";
import Button from "src/components/base/Button";
import { mediaQueries } from "src/utils/responsive";
import styled, { useTheme } from "styled-components";

import { LargeBodyMedium, BodyBold } from "../../styles";

import { Column } from "./Constants";

const SignUpBrowser: React.FC = () => {
  const theme = useTheme();

  return (
    <SignUpContainer>
      <BrowserWindowGradient
        gradientStartColor={theme.colors.primary.blue}
        gradientEndColor={theme.colors.primary.purple}
      >
        <BrowserContainer>
          <TextContainer>
            Hacker applications for Hack the North 2023 are now closed.
            <br />
            Thank you to everyone who applied!
          </TextContainer>
          <UnstyledLink
            newTab={true}
            href="mailto:sponsorship@hackthenorth.com"
            onClick={
              () => trackGoal("DDFIB6DS", 0) // Sign Up: Clicked Email Contact
            }
            style={{
              marginTop: "24px",
            }}
          >
            <Subtext>Interested in becoming a sponsor?</Subtext>
          </UnstyledLink>
          <UnstyledLink
            newTab={true}
            href="https://docs.google.com/forms/d/e/1FAIpQLSc0eogd8Hix599Ar0QTDpmKu7cg46fiTUkQqhj3HZDlrLH26w/viewform"
            style={{
              marginTop: "4px",
            }}
          >
            <Subtext>Interested in becoming a mentor?</Subtext>
          </UnstyledLink>
        </BrowserContainer>
      </BrowserWindowGradient>
    </SignUpContainer>
  );
};

export default SignUpBrowser;

const BrowserContainer = styled(Column)`
  padding: 25px;
  text-align: left;
  line-height: 32px;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.text.dark.white};
  ${mediaQueries.tablet} {
    padding: 20px;
    line-height: 21px;
  }
`;

const SignUpContainer = styled(Column)`
  width: fit-content;
  ${mediaQueries.tablet} {
    margin: 120px 24px 0 24px;
  }
`;

const TextContainer = styled(LargeBodyMedium)`
  width: fit-content;
  text-align: left;
  margin-bottom: 24px;
  ${mediaQueries.tablet} {
    font-weight: 400;
    margin-bottom: 18px;
  }
`;

const Subtext = styled(BodyBold)`
  width: fit-content;
  text-align: left;
  line-height: 20px;
  border-bottom: 1px solid white;
  margin-bottom: 10px;
  ${mediaQueries.tablet} {
    font-weight: 400;
    font-size: 14px;
    margin: 8px 0 0 0;
  }
`;
