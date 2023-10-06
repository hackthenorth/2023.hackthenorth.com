import React, { useEffect } from "react";
import {
  blueRect,
  greenRect,
  longGreenRect,
  longGreenRect2,
  longPinKRect,
  longYellowRect,
  longYellowRect2,
  medPinkRect,
  medYellowRect,
  pinkRect,
  yellowRect,
  yellowRect2,
} from "src/assets/img";
import { ContentWrapper, SectionWrapper } from "src/components/base";
import { ORGANIZERS } from "src/copy/organizers";
import { LargeBodyBold, theme } from "src/styles";
import { mediaQueries } from "src/utils";
import styled, { css } from "styled-components";

const OrganizerContentWrapper = styled(ContentWrapper)`
  margin: 100px 0px;
  max-width: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .default {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    width: 45px;
    height: 45px;
    pointer-events: none;

    ${mediaQueries.medium} {
      width: 40px;
      height: 40px;
    }

    ${mediaQueries.largeMobile} {
      width: 35px;
      height: 35px;
    }
  }

  .active {
    border: 4px solid #ffffff;
  }

  ${mediaQueries.custom(768)} {
    flex-direction: column;
    gap: 30px;
  }
`;

const LeftGrid = styled.div`
  color: white;
  display: grid;
  grid-template-areas:
    "a . . . . . . . . ."
    "b . h . . . . . . ."
    ". e . j . n . . t ."
    ". . i . . o q . u ."
    "c f . k . p . s . ."
    "d . . . m . r . . w"
    ". g . l . . . . v .";
`;

const OrganizerImg = styled.img`
  z-index: 100;
  width: 45px;
  height: 45px;
  border: 2.28463px solid #ffffff;
  object-fit: cover;

  ${mediaQueries.medium} {
    width: 40px;
    height: 40px;
  }

  ${mediaQueries.largeMobile} {
    width: 35px;
    height: 35px;
  }
`;

const RightGrid = styled.div`
  color: white;
  display: grid;
  grid-template-areas:
    ". . . f h . . . . t"
    ". . . . . . n p . u"
    ". . d . i l . . . v"
    ". b . g . . o . s ."
    "a . . . j m . q . w"
    ". c e . k . . r . .";
`;

const FooterContainer = styled.div`
  ${mediaQueries.custom(1200)} {
    position: absolute;
    top: -100px;
  }

  ${mediaQueries.custom(768)} {
    position: static;
  }
`;

const FooterText = styled(LargeBodyBold)`
  color: ${({ theme }) => theme.colors.text.dark.white};
  text-align: center;
  line-height: 200%;
`;

const ColourfulBg1 = styled.div<{ i: number }>`
  ${({ i }) =>
    i < 4 &&
    css`
      background: linear-gradient(90deg, #f09343 0%, #f4b14e 100%);
    `}
  ${({ i }) =>
    i >= 4 &&
    i < 7 &&
    css`
      background: linear-gradient(90deg, #f4b14e 0%, #f7ce58 100%);
    `}
  ${({ i }) =>
    i >= 7 &&
    i < 9 &&
    css`
      background: linear-gradient(90deg, #f7ce58 0%, #addd90 100%);
    `}

  ${({ i }) =>
    i >= 9 &&
    i < 13 &&
    css`
      background: linear-gradient(90deg, #addd90 0%, #63ecc7 100%);
    `}

  ${({ i }) =>
    i >= 13 &&
    i < 16 &&
    css`
      background: linear-gradient(90deg, #63ecc7 0%, #3ef4e3 100%);
    `}
  
  ${({ i }) =>
    i >= 16 &&
    i < 18 &&
    css`
      background: linear-gradient(90deg, #3ef4e3 0%, #19fbff 100%);
    `}
  
  ${({ i }) =>
    i === 18 &&
    css`
      background: linear-gradient(90deg, #3ef4e3 0%, #19fbff 100%);
    `}
  
  ${({ i }) =>
    i >= 19 &&
    i < 21 &&
    css`
      background: linear-gradient(90deg, #19fbff 0%, #1cd1ff 100%);
    `}

  ${({ i }) =>
    i >= 21 &&
    i < 24 &&
    css`
      background: linear-gradient(90deg, #1cd1ff 0%, #1fa6ff 100%);
    `}

  position: absolute;
  z-index: -1;
  top: -5px;
  left: 5px;
  width: 45px;
  height: 45px;
  opacity: 0.8;

  ${mediaQueries.medium} {
    width: 40px;
    height: 40px;
  }

  ${mediaQueries.largeMobile} {
    width: 35px;
    height: 35px;
  }
`;

const ColourfulBg2 = styled.div<{ i: number }>`
  ${({ i }) =>
    i < 1 &&
    css`
      background: linear-gradient(90deg, #1fa6ff 0%, #3a97ff 100%);
    `}

  ${({ i }) =>
    i >= 1 &&
    i < 3 &&
    css`
      background: linear-gradient(90deg, #3a97ff 0%, #5489ff 100%);
    `}
  
  ${({ i }) =>
    i >= 3 &&
    i < 5 &&
    css`
      background: linear-gradient(90deg, #5489ff 0%, #6f7aff 100%);
    `}
  
  ${({ i }) =>
    i >= 5 &&
    i < 7 &&
    css`
      background: linear-gradient(90deg, #6f7aff 0%, #896bff 100%);
    `}
  
  ${({ i }) =>
    i >= 7 &&
    i < 11 &&
    css`
      background: linear-gradient(90deg, #896bff 0%, #9d61fe 100%);
    `}

  ${({ i }) =>
    i >= 11 &&
    i < 13 &&
    css`
      background: linear-gradient(90deg, #9d61fe 0%, #b056fe 100%);
    `}
  
  ${({ i }) =>
    i >= 13 &&
    i < 15 &&
    css`
      background: linear-gradient(90deg, #b056fe 0%, #c44cfd 100%);
    `}
  
  ${({ i }) =>
    i >= 15 &&
    i < 18 &&
    css`
      background: linear-gradient(90deg, #c44cfd 0%, #d841fc 100%);
    `}
  
  ${({ i }) =>
    i === 18 &&
    css`
      background: linear-gradient(90deg, #d841fc 0%, #eb37fc 100%);
    `}

  ${({ i }) =>
    i >= 19 &&
    i < 24 &&
    css`
      background: linear-gradient(90deg, #eb37fc 0%, #ff2cfb 100%);
    `}

  position: absolute;
  z-index: -1;
  top: -5px;
  left: -5px;
  width: 45px;
  height: 45px;
  opacity: 0.8;

  ${mediaQueries.medium} {
    width: 40px;
    height: 40px;
  }

  ${mediaQueries.largeMobile} {
    width: 35px;
    height: 35px;
  }
`;

const BottomTextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaQueries.custom(515)} {
    flex-direction: column;
    gap: 20px;
  }
`;

const MinorBottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  ${mediaQueries.custom(515)} {
    flex-direction: column;
    align-items: start;
    gap: 0px;
  }
`;

const BottomText = styled.a`
  padding: 0px 20px 10px 20px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.text.dark.white};
  text-decoration: none;
  z-index: 30;
  white-space: nowrap;

  :hover {
    transition: opacity 200ms ease-in-out;
    opacity: 0.85;
  }
`;

const CopyrightText = styled.p`
  padding: 0px 20px 10px 20px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.text.dark.white};
  text-decoration: none;
  z-index: 30;
  white-space: nowrap;

  :hover {
    transition: opacity 200ms ease-in-out;
    opacity: 0.85;
  }
`;

const GlitchIcons = styled.img`
  position: absolute;
  z-index: 10;

  ${mediaQueries.custom(768)} {
    display: none;
  }
`;

const YellowRect = styled(GlitchIcons)`
  bottom: 70px;
  left: 20px;
`;

const YellowRect2 = styled(GlitchIcons)`
  bottom: 220px;
  left: 220px;
`;

const LongYellowRect = styled(GlitchIcons)`
  bottom: 200px;
  left: 90px;
`;

const LongYellowRect2 = styled(GlitchIcons)`
  top: 140px;
  left: 200px;
`;

const MedYellowRect = styled(GlitchIcons)`
  bottom: 80px;
  left: 340px;
`;

const BlueRect = styled(GlitchIcons)`
  top: 140px;
  left: 460px;
`;

const GreenRect = styled(GlitchIcons)`
  bottom: 130px;
  right: 470px;
`;

const LongGreenRect = styled(GlitchIcons)`
  top: 160px;
  right: 370px;
`;

const LongGreenRect2 = styled(GlitchIcons)`
  bottom: 80px;
  right: 250px;
`;

const PinkRect = styled(GlitchIcons)`
  top: 220px;
  right: 105px;
`;

const LongPinkRect = styled(GlitchIcons)`
  top: 70px;
  right: 80px;
`;

const MedPinkRect = styled(GlitchIcons)`
  bottom: 140px;
  right: 25px;
`;

const Footer: React.FC = () => {
  useEffect(() => {
    let intervalId: number | undefined;
    let curOrganizer = 0;

    const startInterval = () => {
      intervalId = window.setInterval(() => {
        const prevOrganizer = curOrganizer;
        curOrganizer = Math.floor(Math.random() * (ORGANIZERS.length - 1));
        showOrganizer(curOrganizer, prevOrganizer);
      }, 1800);
    };

    const stopInterval = () => {
      clearInterval(intervalId);
      intervalId = undefined;
    };

    const onMouseEnter = (e: any): void => {
      if (e.target.dataset.key) {
        const prevOrganizer = curOrganizer;
        curOrganizer = e.target.dataset.key;
        stopInterval();
        showOrganizer(curOrganizer, prevOrganizer);
      }
    };

    const onMouseLeave = (): void => {
      if (!intervalId) {
        startInterval();
      }
    };

    startInterval();
    const randomOrganizerContainers = document.querySelectorAll("[data-key]");
    randomOrganizerContainers.forEach((container) => {
      container.addEventListener("mouseover", onMouseEnter);
      container.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      clearInterval(intervalId);
      randomOrganizerContainers.forEach((container) => {
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  function showOrganizer(curOrganizer: number, prevOrganizer: number): void {
    const randomOrganizer = ORGANIZERS[curOrganizer];
    const randomOrganizerContainer = document.querySelector(
      `[data-key="${curOrganizer}"]`
    );
    const darkBox = randomOrganizerContainer?.querySelector(".darkbox");
    darkBox?.classList.remove("default");
    const randomOrganizerImg =
      randomOrganizerContainer?.querySelector("#organizer");
    randomOrganizerImg?.classList.add("active");

    const personalText = document.getElementById("personal");
    if (personalText) {
      personalText.innerText = `${randomOrganizer.name}, ${randomOrganizer.team} ${randomOrganizer.emoji}`;
    }

    if (curOrganizer !== prevOrganizer) {
      const prevOrganizerContainer = document.querySelector(
        `[data-key="${prevOrganizer}"]`
      );
      const prevDarkBox = prevOrganizerContainer?.querySelector(".darkbox");
      prevDarkBox?.classList.add("default");
      const prevOrganizerImg =
        prevOrganizerContainer?.querySelector("#organizer");
      prevOrganizerImg?.classList.remove("active");
    }
  }

  const HALF_ORGANIZERS = ORGANIZERS.length / 2;
  const firstHalf = ORGANIZERS.slice(0, HALF_ORGANIZERS);
  const secondHalf = ORGANIZERS.slice(HALF_ORGANIZERS, ORGANIZERS.length);

  return (
    <SectionWrapper>
      <YellowRect src={yellowRect} alt="yellow rectangle" />
      <YellowRect2 src={yellowRect2} alt="yellow rectangle" />
      <LongYellowRect src={longYellowRect} alt="long yellow rectangle" />
      <LongYellowRect2 src={longYellowRect2} alt="long yellow rectangle" />
      <MedYellowRect src={medYellowRect} alt="med yellow rectangle" />
      <BlueRect src={blueRect} alt="blue rectangle" />
      <GreenRect src={greenRect} alt="green rectangle" />
      <LongGreenRect src={longGreenRect} alt="long green rectangle" />
      <LongGreenRect2 src={longGreenRect2} alt="long green rectangle" />
      <PinkRect src={pinkRect} alt="pink rectangle" />
      <LongPinkRect src={longPinKRect} alt="long pink rectangle" />
      <MedPinkRect src={medPinkRect} alt="med pink rectangle" />
      <OrganizerContentWrapper>
        <LeftGrid>
          {firstHalf.map((organizer, i) => (
            <div
              key={i}
              data-key={i}
              style={{
                gridArea: String.fromCharCode(97 + i),
                position: "relative",
              }}
            >
              <ColourfulBg1 i={i} />
              <div className="default darkbox"></div>
              <OrganizerImg
                id="organizer"
                src={organizer.img}
                alt={`${organizer.name}`}
                data-key={i}
                loading="lazy"
              />
            </div>
          ))}
        </LeftGrid>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <FooterContainer>
            <FooterText>
              Made with 💙 in Waterloo, Ontario, Canada 🇨🇦
            </FooterText>
            <FooterText id="personal"></FooterText>
          </FooterContainer>
        </div>
        <RightGrid>
          {secondHalf.map((organizer, i) => (
            <div
              key={i}
              data-key={i + HALF_ORGANIZERS}
              style={{
                gridArea: String.fromCharCode(97 + i),
                position: "relative",
              }}
            >
              <ColourfulBg2 i={i} />
              <div className="default darkbox"></div>
              <OrganizerImg
                id="organizer"
                src={organizer.img}
                alt={`${organizer.name}`}
                data-key={i + HALF_ORGANIZERS}
                loading="lazy"
              />
            </div>
          ))}
        </RightGrid>
      </OrganizerContentWrapper>
      <BottomTextContainer>
        <MinorBottomContainer>
          <BottomText href="/code-of-conduct">Code of Conduct</BottomText>
          <BottomText href="/travel-guidelines">Travel Guidelines</BottomText>
          <BottomText href="/privacy">Privacy Policy</BottomText>
        </MinorBottomContainer>
        <div>
          <CopyrightText style={{ color: `${theme.colors.text.dark.gray}` }}>
            Copyright © Techyon, 2023
          </CopyrightText>
        </div>
      </BottomTextContainer>
    </SectionWrapper>
  );
};

export default Footer;
