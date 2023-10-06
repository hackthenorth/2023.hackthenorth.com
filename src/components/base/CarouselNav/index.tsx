import React from "react";
import styled from "styled-components";

interface CarouselNavProps {
  selectCallback: (index: number) => void;
  selectPreviousIndex: (index: number) => void;
  lengthOfCarousel: number;
  currentIndex: number;
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

const ActiveButton = styled.button`
  color: white;
  width: 18px;
`;

const NonActiveButtons = styled(ActiveButton)`
  opacity: 0.6;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

const CarouselNav: React.FC<CarouselNavProps> = ({
  lengthOfCarousel,
  currentIndex,
  selectCallback,
  selectPreviousIndex,
}) => {
  const numberOfIndices = Array.from(Array(lengthOfCarousel).keys());
  return (
    <ButtonContainer>
      {numberOfIndices.map((_, index) => (
        <div key={index}>
          {currentIndex === index ? (
            <ActiveButton aria-label="Active navigation button" />
          ) : (
            <NonActiveButtons
              onClick={() => {
                const newIndex = index;
                selectCallback(newIndex);
                selectPreviousIndex(currentIndex);
              }}
              aria-label="Non-active navigation button"
            />
          )}
        </div>
      ))}
    </ButtonContainer>
  );
};

export default CarouselNav;
