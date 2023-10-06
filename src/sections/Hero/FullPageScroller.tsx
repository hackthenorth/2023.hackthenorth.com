import React, { useState, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import styled, { css } from "styled-components";

import { ScrollComponent } from "../../constants";

interface StepProps {
  index: number;
}

const FullPageScroller: React.FC<{
  Background: ScrollComponent;
  children: React.ReactNode;
}> = ({ Background, children }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const onStepEnter: React.FC<{ data: number }> = ({ data }) => {
    setCurrentStepIndex(data);
    return null;
  };

  const steps = React.Children.toArray(children);
  const [showStepContainer, setShowStepContainer] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowStepContainer(true);
    }, 1200);
    return () => clearInterval(intervalId);
  }, [showStepContainer]);

  return (
    <div style={{ marginBottom: "430px" }}>
      <BackgroundContainer>
        <FluidContainer>
          <Background currentStepIndex={currentStepIndex} />
        </FluidContainer>
      </BackgroundContainer>
      <Scrollama offset={0.5} onStepEnter={onStepEnter}>
        {steps.map((step, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <StepContainer
              index={stepIndex}
              style={{
                opacity: currentStepIndex === stepIndex ? 1 : 0.2,
                visibility: showStepContainer ? "visible" : "hidden",
              }}
            >
              {step}
            </StepContainer>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default FullPageScroller;

const FluidContainer = styled.div`
  width: 100%;
`;

const BackgroundContainer = styled.div`
  position: sticky;
  top: 0px;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -100;
  margin-bottom: 70px;
`;

const StepContainer = styled.div<StepProps>`
  width: 100%;
  transition: opacity 0.5s;
  z-index: 100;

  ${({ index }) =>
    css`
      padding-top: ${index === 0 ? 0 : "min(25vh, 300px)"};
      padding-bottom: ${index === 6 ? 0 : "min(25vh, 300px)"};
      height: ${index === 6 ? "200px" : "auto"};
    `}

  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
