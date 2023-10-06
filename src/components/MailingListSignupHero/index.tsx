import { trackGoal } from "fathom-client";
import React, { useState, useMemo, useCallback, FormEvent } from "react";
import Spinner from "src/components/Spinner";
import { BodyBold, Body } from "src/styles";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";

import {
  validateEmailAddress,
  getResultMessage,
  signupRequest,
  SignUpState,
} from "../MailingListSignup/utils";

interface MailingListSignupProps
  extends React.ComponentPropsWithoutRef<"form"> {
  placeholder: string;
  mobilePlaceholder?: string;
}

interface CheckErrorsProps {
  hasErrors: boolean;
}

const MailingListSignup: React.FC<MailingListSignupProps> = ({
  mobilePlaceholder,
  placeholder,
  ...rest
}) => {
  const [email, setEmail] = useState("");
  const [hasErrors, setHasErrors] = useState(false);
  const [signUpState, updateSignUpState] = useState(SignUpState.INITIAL);
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (email === "") {
        updateSignUpState(SignUpState.EMPTY);
        setHasErrors(true);
        return;
      }
      if (validateEmailAddress(email)) {
        updateSignUpState(SignUpState.SUBMITTING);
        signupRequest(email)
          .then(({ alreadySignup }) => {
            if (alreadySignup) {
              updateSignUpState(SignUpState.DUPLICATE);
              setHasErrors(true);
              trackGoal("2EGFUOVZ", 0); // Sign Up: Duplicate
            } else {
              updateSignUpState(SignUpState.SUBMITTED);
              trackGoal("O8XQVCWX", 0); // Sign Up: Success
            }
          })
          .catch(() => {
            updateSignUpState(SignUpState.ERROR);
            trackGoal("8MVEHSYT", 0); // Sign Up: Error
          });
      } else {
        updateSignUpState(SignUpState.INVALID);
        setHasErrors(true);
        trackGoal("4PKQESPT", 0); // Sign Up: Invalid
      }
    },
    [email]
  );

  const refinedPlaceholder =
    mobilePlaceholder && isLargeMobileOrSmaller
      ? mobilePlaceholder
      : placeholder;

  const resultMessage = useMemo(
    () => getResultMessage(signUpState),
    [signUpState]
  );

  return (
    <form
      onSubmit={onSubmit}
      onBlur={() => updateSignUpState(SignUpState.INITIAL)}
      {...rest}
      style={{ width: "100%" }}
    >
      <InputWrapper>
        <FormWrapper>
          <StyledInput
            value={email}
            hasErrors={hasErrors}
            onChange={(e: any) => {
              setEmail(e.target.value);
              setHasErrors(false);
            }}
            placeholder={refinedPlaceholder}
            aria-label="Sign up for the latest news from Hack the North!"
            aria-required
          />
          <StyledButton
            isSubmitted={signUpState === SignUpState.SUBMITTED}
            disabled={signUpState === SignUpState.SUBMITTING || hasErrors}
            onClick={(e: any) => {
              if (
                signUpState !== SignUpState.SUBMITTED &&
                signUpState !== SignUpState.SUBMITTING
              )
                onSubmit(e);
            }}
            aria-label="Submit email"
          >
            {signUpState === SignUpState.SUBMITTED ? (
              <BodyBold>Submit</BodyBold>
            ) : signUpState === SignUpState.SUBMITTING ? (
              <Spinner color="white" size={isLargeMobileOrSmaller ? 18 : 24} />
            ) : (
              <BodyBold>Submit</BodyBold>
            )}
          </StyledButton>
        </FormWrapper>
        {(hasErrors || signUpState === SignUpState.SUBMITTED) && (
          <ResultText hasErrors={hasErrors}>{resultMessage}</ResultText>
        )}
      </InputWrapper>
    </form>
  );
};

const FormWrapper = styled.div`
  border: 2px solid white;
  display: flex;
  width: 448px;
  ${mediaQueries.tablet} {
    width: 100%;
  }
`;

const StyledInput = styled.input<CheckErrorsProps>`
  font-family: "Satoshi";
  font-size: 16px;
  width: 70%;
  height: 100%;
  margin: auto;
  border: none;
  outline: none;
  margin-left: 15px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.text.dark.gray};
  }
  background: transparent;
  color: ${({ hasErrors }) =>
    hasErrors
      ? ({ theme }) => theme.colors.state.error
      : ({ theme }) => theme.colors.text.dark.white};
  &:disabled {
    cursor: not-allowed;
    filter: grayscale(1);
  }
  ${mediaQueries.tablet} {
    padding: 12px 16px;
  }
  ${mediaQueries.largeMobile} {
    padding: 0;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  ${mediaQueries.medium} {
    width: 100%;
  }
  ${mediaQueries.tablet} {
    width: 100%;
  }
  ${mediaQueries.largeMobile} {
    width: 100%;
  }
`;

const StyledButton = styled.button<{ isSubmitted: boolean }>`
  color: ${({ theme }) => theme.colors.text.dark.white};
  cursor: pointer;
  border: white 2px solid;
  height: 39px;
  width: 117px;
  margin: 8px;
  background: linear-gradient(
    270deg,
    rgba(25, 251, 255, 0.5) 0%,
    rgba(31, 166, 255, 0.5) 98.64%
  );

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary.cyan};
    background: linear-gradient(
      270deg,
      rgba(25, 251, 255, 0.75) 0%,
      rgba(31, 166, 255, 0.75) 98.64%
    );
  }

  &:disabled {
    cursor: not-allowed;
    filter: grayscale(1);
    background: linear-gradient(
      270deg,
      rgba(25, 251, 255, 0.5) 0%,
      rgba(31, 166, 255, 0.5) 98.64%
    );
    box-shadow: none;
  }
  ${mediaQueries.largeMobile} {
    margin: 6px;
  }
`;

const ResultText = styled(Body)<CheckErrorsProps>`
  color: ${({ hasErrors }) =>
    hasErrors
      ? ({ theme }) => theme.colors.state.error
      : ({ theme }) => theme.colors.state.success};
  margin-top: 8px;
`;

export default MailingListSignup;
