import debounce from "lodash.debounce";
import React, { useState, useEffect } from "react";
import { Body, BodyBold, theme } from "src/styles";
import { mediaQueries } from "src/utils";
import { useMounted } from "src/utils/hooks/useMounted";
import styled from "styled-components";

import Arrow from "./Arrow";
export interface QuestionAnswer {
  question: string;
  /* since an answer can be a link, text or something
   * else, we can use React.ReactNode to handle all
   * the different types of answers
   */
  answer: React.ReactNode;
}

export interface AccordionProps
  extends QuestionAnswer,
    React.ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  handleOnClick: () => void;
}

export interface CollapsibleProps {
  isOpen: boolean;
  height: number; // height of the collapsible
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  height: auto;
  ${mediaQueries.tablet} {
    margin-bottom: 25px;
  }
`;

export const Collapsible = styled.div<CollapsibleProps>`
  overflow: hidden;
  transition: height 0.3s ease-out;
  height: ${(props: CollapsibleProps) => (props.isOpen ? props.height : "0")}px;
`;

const getHeight = (id: string) => {
  const el = document.getElementById(id);
  return el ? el.scrollHeight + 20 : 100;
};

const ArrowButton = styled(Arrow)`
  cursor: pointer;
  margin-right: 10px;
  margin-top: -1px;
`;

const QuestionAnswerWrapper = styled.div`
  display: block;
`;

const Question = styled(BodyBold)`
  cursor: pointer;
  color: white;
  height: full;
`;

const Answer = styled(Body)`
  line-height: 160%;
  height: auto;
  color: ${theme.colors.text.dark.gray};
`;

export const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  isOpen,
  handleOnClick,
  ...rest
}) => {
  const [height, setHeight] = useState(0);
  const mounted = useMounted();

  // delays setting height by 250 miliseconds
  const debouncedSetHeight = debounce(
    () => setHeight(getHeight(question)),
    100
  );

  useEffect(() => {
    if (mounted) {
      setHeight(getHeight(question));
      window.addEventListener("resize", debouncedSetHeight);
      debouncedSetHeight();

      return () => {
        window.removeEventListener("resize", debouncedSetHeight);
      };
    }
  }, [question, debouncedSetHeight, mounted]);

  const questionAsArray = question.split(" ");
  const questionLastWord = questionAsArray.slice(-1)[0];
  const questionMinusLastWord = questionAsArray.slice(0, -1).join(" ");

  return (
    <Wrapper {...rest}>
      <ArrowButton
        isOpen={isOpen}
        onClick={handleOnClick}
        tabIndex={0}
        onKeyPress={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            handleOnClick();
          }
        }}
      />

      <QuestionAnswerWrapper>
        <Question
          onClick={handleOnClick}
          tabIndex={0}
          onKeyPress={(e: React.KeyboardEvent) => {
            if (e.key === "Enter") {
              handleOnClick();
            }
          }}
        >
          {questionMinusLastWord}{" "}
          <span tw="whitespace-nowrap">{questionLastWord}</span>
        </Question>
        <Collapsible isOpen={isOpen} height={height}>
          <Answer id={question}>{answer}</Answer>
        </Collapsible>
      </QuestionAnswerWrapper>
    </Wrapper>
  );
};
export default Accordion;
