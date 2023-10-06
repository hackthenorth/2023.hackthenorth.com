import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { DarkLeftChevron, DarkRightChevron } from "src/assets/img";
import CarouselNav from "src/components/base/CarouselNav";
import { useWindowSize } from "src/utils";
import { mediaQueries } from "src/utils";
import styled from "styled-components";

import { carouselSponsors } from "./sponsors";

const SponsorsCarousel: React.FC = () => {
  const CheckDeviceSize = (pixels: number) => {
    const { windowWidth } = useWindowSize();
    if (windowWidth === undefined) {
      return windowWidth;
    }
    return windowWidth <= pixels;
  };

  const isTablet = CheckDeviceSize(1200);
  const isMobile = CheckDeviceSize(700);
  const middleCarouselIndex: number = Math.floor(carouselSponsors.length / 2);

  const [currentCarouselIndex, setCurrentCarouselIndex] =
    useState(middleCarouselIndex);
  const [isHovering, setIsHovering] = useState(-1);
  const [prevIndex, setPrevIndex] = useState(carouselSponsors.length + 1);

  //this resets the prev index after the animation in order for the hover effect to work on the prev index div
  useEffect(() => {
    const resetPrevIndex = setInterval(() => {
      setPrevIndex(carouselSponsors.length + 1);
    }, 1000);
    return () => clearInterval(resetPrevIndex);
  }, [prevIndex]);

  useEffect(() => {
    const rotateCarousel = setInterval(() => {
      if (currentCarouselIndex < carouselSponsors.length - 1) {
        setPrevIndex(currentCarouselIndex);
        setCurrentCarouselIndex(currentCarouselIndex + 1);
      } else if (currentCarouselIndex == carouselSponsors.length - 1) {
        setPrevIndex(currentCarouselIndex);
        setCurrentCarouselIndex(0);
      }
    }, 5000);
    return () => clearInterval(rotateCarousel);
  });

  const handleClicked = (index: number, prevIndex: number) => {
    setCurrentCarouselIndex(index);
    setPrevIndex(prevIndex);
    setIsHovering(carouselSponsors.length + 1);
  };

  return (
    <SponsorCarouselContainer>
      <CarouselImagesAndNavContainer onMouseEnter={() => setIsHovering(-1)}>
        <CarouselImagesContainer>
          {carouselSponsors.map((value, index) => (
            <div key={index}>
              {/* this is the expanded sponsor */}
              {currentCarouselIndex === index ? (
                <FocusDiv
                  initial={{ width: isMobile ? 342 : isTablet ? 632 : 20 }}
                  animate={{
                    width: isMobile ? 342 : isTablet ? 632 : 460,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  {isTablet && currentCarouselIndex > 0 && (
                    <>
                      <ChevronWrapper
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentCarouselIndex(currentCarouselIndex - 1);
                        }}
                        style={{ left: "0" }}
                      >
                        <img alt="Left chevron" src={DarkLeftChevron} />
                      </ChevronWrapper>
                    </>
                  )}
                  <a
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      textDecoration: "none",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "inherit",
                      pointerEvents: "none",
                    }}
                  >
                    <FocusCarouselImage
                      initial={{
                        opacity: 0,
                        width: isMobile ? 50 : isTablet ? 100 : 150,
                      }}
                      animate={{
                        opacity: 1,
                        width: isMobile ? 180.59 : isTablet ? 290 : 340,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      alt={value.alt}
                      src={value.src}
                      width={340}
                      loading="lazy"
                    />
                  </a>
                  {isTablet &&
                    currentCarouselIndex < carouselSponsors.length - 1 && (
                      <>
                        <ChevronWrapper
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentCarouselIndex(currentCarouselIndex + 1);
                          }}
                        >
                          <img alt="Right chevron" src={DarkRightChevron} />
                        </ChevronWrapper>
                      </>
                    )}
                </FocusDiv>
              ) : (
                <>
                  {/* this animates the closing of the original sponsor */}
                  {index === prevIndex && index != isHovering && !isTablet ? (
                    <NonFocusedHoverContainer
                      initial={{ width: 460 }}
                      animate={{ width: 20 }}
                      transition={{
                        duration: 1,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      onMouseOut={() => setIsHovering(-1)}
                      onClick={() => handleClicked(index, currentCarouselIndex)}
                    >
                      <FocusCarouselImage
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0.5 }}
                        transition={{
                          duration: 1,
                          delay: 0,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                        alt={value.alt}
                        src={value.src}
                        width={340}
                        loading="lazy"
                      />
                    </NonFocusedHoverContainer>
                  ) : (
                    <>
                      {/* this animates the hover effect on the white tabs */}
                      {index === isHovering && !isTablet ? (
                        <NonFocusedHoverContainer
                          initial={{ width: 20 }}
                          animate={{ width: 40 }}
                          transition={{
                            duration: 0.2,
                            delay: 0,
                            ease: [0, 0.71, 0.2, 1.01],
                          }}
                          onMouseOut={() => setIsHovering(-1)}
                          onClick={() =>
                            handleClicked(index, currentCarouselIndex)
                          }
                        >
                          <FocusCarouselImage
                            transition={{
                              duration: 1,
                              delay: 0,
                              ease: [0, 0.71, 0.2, 1.01],
                            }}
                            alt={value.alt}
                            src={value.src}
                            width={100}
                            loading="lazy"
                          />
                        </NonFocusedHoverContainer>
                      ) : (
                        <>
                          {/* this is for all other white tabs */}
                          {!isTablet && (
                            <NonFocusedCarouselContainer
                              onMouseOver={() => setIsHovering(index)}
                              onMouseOut={() => setIsHovering(-1)}
                            />
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </CarouselImagesContainer>
        <CarouselNav
          lengthOfCarousel={carouselSponsors.length}
          currentIndex={currentCarouselIndex}
          selectCallback={(newIndex) => setCurrentCarouselIndex(newIndex)}
          selectPreviousIndex={(previousIndex) => setPrevIndex(previousIndex)}
        />
      </CarouselImagesAndNavContainer>
      <FocusedCarouselTextContainer>
        {carouselSponsors[currentCarouselIndex].text}
      </FocusedCarouselTextContainer>
    </SponsorCarouselContainer>
  );
};
const SponsorCarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 69px;
  margin-bottom: 72px;
  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    column-gap: 35px;
    flex-direction: column;
  }
  ${mediaQueries.medium} {
    flex-direction: column;
  }
  ${mediaQueries.tablet} {
    margin-bottom: 64px;
  }
  ${mediaQueries.largeMobile} {
    margin-bottom: 24px;
  }
`;

const CarouselImagesAndNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  column-gap: 48px;
  width: 600px;
  margin: 64px 0;
  @media screen and (min-width: 835px) and (max-width: 1200px) {
    margin: 0;
  }
  ${mediaQueries.tablet} {
    margin: 0;
  }
`;

const CarouselImagesContainer = styled.div`
  display: flex;
  gap: 12px;
  float: left;
  @media screen and (min-width: 835px) and (max-width: 1200px) {
    gap: 0;
  }
  ${mediaQueries.tablet} {
    gap: 0;
  }
`;

const FocusCarouselImage = styled(motion.img)<{ width: number }>`
  max-width: ${(props) => props.width}px;
  height: auto;
  pointer-events: none;
`;

const NonFocusedCarouselContainer = styled.div`
  width: 20px;
  height: 363px;
  background-color: white;
`;

const NonFocusedHoverContainer = styled(motion.div)`
  display: flex;
  width: 40px;
  height: 363px;
  background-color: white;
  justify-content: center;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

const FocusDiv = styled(motion.div)`
  display: flex;
  width: 460px;
  height: 363px;
  background-color: white;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  ${mediaQueries.medium} {
    width: 632px;
    height: 345px;
  }
  @media screen and (min-width: 425px) and (max-width: 700px) {
    width: 342px;
    height: 189px;
  }
  ${mediaQueries.largeMobile} {
    width: 342px;
    height: 189px;
  }
`;

const FocusedCarouselTextContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
  @media screen and (min-width: 835px) and (max-width: 1200px) {
    margin-top: 64px;
  }
  ${mediaQueries.medium} {
    margin-top: 64px;
  }
  @media screen and (min-width: 425px) and (max-width: 700px) {
    max-width: 342px;
  }
  ${mediaQueries.largeMobile} {
    max-width: 342px;
    margin-top: 24px;
    padding-bottom: 24px;
  }
`;

const ChevronWrapper = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
`;

export default SponsorsCarousel;
