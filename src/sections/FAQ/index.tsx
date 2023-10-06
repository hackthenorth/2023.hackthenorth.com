import React from "react";
import { AnimatedFrame } from "src/assets/img";
import {
  AccordionGroup,
  ContentWrapper,
  SectionWrapper,
  UnstyledLink,
} from "src/components/base";
import GlowText from "src/components/base/GlowText";
import { SectionId } from "src/constants";
import { LEFT_QUESTION_SET, RIGHT_QUESTION_SET } from "src/copy/FAQ";
import { mediaQueries, useDeviceSize } from "src/utils";
import styled from "styled-components";

import { Heading1, theme } from "../../styles";

import Note from "./Note";

const TopFrameContainer = styled.img`
  display: flex;
  width: 100vw;
  margin-top: -3vh;
`;

const Wrapper = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 8%;
`;
const InternalLink = styled(UnstyledLink)`
  color: white;
  outline: none;
  width: fit-content;
  text-decoration: underline;
`;

const StyledAccordionGroup = styled(AccordionGroup)`
  flex: 1;
  height: auto;
  width: 50%;

  ${mediaQueries.tablet} {
    width: 100%;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: left;
  color: ${({ theme }) => theme.colors.text.dark.white};
`;

const AccordionWrapper = styled.div`
  display: flex;
  justify-content: between;
  column-gap: 96px;
  margin-top: 6%;
  height: auto;

  ${mediaQueries.tablet} {
    display: block;
  }

  ${mediaQueries.largeMobile} {
    margin-top: 15%;
  }
`;

const FAQ: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");
  return isTabletOrSmaller !== undefined ? (
    <SectionWrapper id={SectionId.FAQ}>
      <TopFrameContainer
        alt="Animated frame"
        src={AnimatedFrame}
        loading="lazy"
      />
      <ContentWrapper>
        <Wrapper>
          <HeadingContainer>
            <Heading1 style={{ left: 0 }}>
              <GlowText color={theme.colors.primary.orange}>
                Frequently{" "}
              </GlowText>
              asked questions
            </Heading1>
          </HeadingContainer>
          <AccordionWrapper>
            <StyledAccordionGroup
              questionSet={LEFT_QUESTION_SET.map((cur) =>
                cur.question ==
                "I’m not currently enrolled as a student, can I still attend Hack the North?"
                  ? {
                      question: cur.question,
                      answer: (
                        <p>
                          Hack the North is geared towards students who are
                          interested in tech, but we also want to open the doors
                          for anyone who wants to learn. If your situation falls
                          within this category, please reach out to us at{" "}
                          <InternalLink
                            tw="text-white underline"
                            href="mailto:hello@hackthenorth.com"
                          >
                            hello@hackthenorth.com
                          </InternalLink>{" "}
                          and we can chat more regarding certain exemptions!
                        </p>
                      ),
                    }
                  : cur.question ==
                    "What kind of workshops, talks, and activities will there be?"
                  ? {
                      question: cur.question,
                      answer: (
                        <>
                          <p>
                            Previously, we’ve held workshops and talks for a
                            range of skill levels from beginner to advanced like
                            Intro to React and Exploring and Wrangling Data with
                            Pandas. Other workshops also explore various
                            programming tools such as APIs, databases, and
                            platforms.
                          </p>
                          <p>
                            Activities like VR demos, meetups, and even karaoke
                            happen throughout the weekend. Whether it’s for
                            relaxation or health, novelty or competition, our
                            team has something exciting prepared for you to
                            enjoy!
                          </p>
                        </>
                      ),
                    }
                  : {
                      question: cur.question,
                      answer: <p>{cur.answer}</p>,
                    }
              )}
            />
            <StyledAccordionGroup
              shouldOpenFirst={!isTabletOrSmaller}
              questionSet={RIGHT_QUESTION_SET.map((cur) =>
                cur.question ==
                "What if I need to travel internationally to attend Hack the North?"
                  ? {
                      question: cur.question,
                      answer: (
                        <>
                          <p>
                            Please note that visitor visa wait times may be as
                            long as several months, depending on the country of
                            departure. We recommend you apply for your visa, if
                            required, immediately after receiving your
                            acceptance to Hack the North. More information can
                            be found on our{" "}
                            <InternalLink
                              tw="text-white underline"
                              href="/travel-guidelines"
                            >
                              Travel Guidelines
                            </InternalLink>{" "}
                            page.
                          </p>
                          <p>
                            COVID-19: If you’re traveling to Hack the North from
                            outside of Canada, you must follow the{" "}
                            <InternalLink
                              tw="text-white underline"
                              href="https://travel.gc.ca/travel-covid"
                              target="_blank"
                              // eslint-disable-next-line react/jsx-no-duplicate-props
                              rel="noreferrer"
                            >
                              Government of Canada’s travel guidelines
                            </InternalLink>{" "}
                            in order to attend. As of June 2023, the guidelines
                            do not require any sort of pre-flight testing or
                            proof of vaccination. However, please ensure that
                            you are fully compliant with your home country’s
                            COVID-19 guidelines in order to ensure a smooth
                            trip. Hack the North will not reimburse any
                            additional fees that event attendees incur due to
                            COVID-19 related complications.
                          </p>
                        </>
                      ),
                    }
                  : cur.question == "What are your COVID-19 regulations?"
                  ? {
                      question: cur.question,
                      answer: (
                        <>
                          <p>
                            At this time, Hack the North does not have a
                            COVID-19 policy. Taking your own health/safety
                            precautions is recommended, but attendance at Hack
                            the North is at your own risk.
                          </p>
                          <p>
                            Following the Government of Canada’s decision to
                            remove all COVID-19 travel restrictions, Hack the
                            North will not be enforcing any COVID-related
                            restrictions or regulations at our event. In the
                            event that the COVID-19 situation changes in our
                            region, we will follow the Canadian and Ontario
                            government guidelines and restrictions as necessary.
                          </p>
                          <p>
                            A small reserve of masks, hand sanitizer, and rapid
                            tests will be available at the event.
                          </p>
                          <p>
                            We kindly ask that if you are feeling unwell, please
                            do not attend the event for the safety of other
                            hackers and guests.
                          </p>
                        </>
                      ),
                    }
                  : {
                      question: cur.question,
                      answer: <p>{cur.answer}</p>,
                    }
              )}
            />
          </AccordionWrapper>
        </Wrapper>
        <Note />
      </ContentWrapper>
    </SectionWrapper>
  ) : null;
};

export default FAQ;
