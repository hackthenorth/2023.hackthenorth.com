import React, { useState } from "react";

import { Accordion, QuestionAnswer } from "../Accordion";

interface AccordionGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  questionSet: QuestionAnswer[];
  shouldOpenFirst?: boolean;
}

const FIRST_QUESTION_OPEN = 0;
const NOT_OPEN = -1;

const AccordionGroup: React.FC<AccordionGroupProps> = ({
  questionSet,
  shouldOpenFirst = true,
  ...rest
}) => {
  // by default, the first question in an accordion group is open
  const [openIndices, setOpenIndices] = useState([
    shouldOpenFirst ? FIRST_QUESTION_OPEN : NOT_OPEN,
  ]);

  const getNewIndices = (prevIndices: number[], index: number) => {
    if (prevIndices.includes(index)) {
      return prevIndices.filter((i) => i != index);
    } else {
      return prevIndices.concat([index]);
    }
  };

  const handleClick = (index: number) => {
    setOpenIndices((prevIndices) => getNewIndices(prevIndices, index));
  };

  return (
    <div {...rest}>
      {questionSet.map((cur, index) => (
        <Accordion
          className="accordion"
          key={cur.question}
          question={cur.question}
          answer={cur.answer}
          isOpen={openIndices.includes(index)}
          handleOnClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
