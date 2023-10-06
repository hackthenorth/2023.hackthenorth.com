import React, { useState } from "react";
import { goose1, goose2, uwEng } from "src/assets/img";
import { ContentWrapper, SectionWrapper } from "src/components/base";
// import { mediaQueries } from "src/utils/responsive";
import GlowText from "src/components/base/GlowText";
import { mediaQueries } from "src/utils";
import styled, { useTheme, keyframes } from "styled-components";

import { Heading1, Heading2, LargeBody } from "../../styles";

import JudgesGrid from "./JudgesGrid";
import SpeakersGrid from "./SpeakersGrid";

const JudgesSectionWrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  gap: 200px;
  padding: 100px 0px;
  background-color: rgb(42, 42, 79);

  ${mediaQueries.tablet} {
    gap: 100px;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.dark.white};

  ${mediaQueries.tablet} {
    padding: 0px 50px;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 60px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
`;

const JudgesHeading1 = styled(Heading1)`
  margin: 0px;
`;

const JudgesSubtitle = styled(LargeBody)`
  margin: 0px;
  font-weight: 400;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.text.dark.gray};
`;

const JudgesHeading2 = styled(Heading2)`
  line-height: 120%;
  margin: 0px;
  color: ${({ theme }) => theme.colors.text.dark.white};
`;

const JudgesContentWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  gap: 100px;

  ${mediaQueries.tablet} {
    gap: 50px;
  }
`;

const Flap1 = keyframes`
0% {
  opacity: 1;
}

10% {
  opacity: 0;
}

20% {
  opacity: 1;
}

30% {
  opacity: 0;
}

40% {
  opacity: 1;
}

40%, 100% {
  opacity: 1;
}
`;

const Flap2 = keyframes`
0% {
  opacity: 0;
}

10% {
  opacity: 1;
}

20% {
  opacity: 0;
}

30% {
  opacity: 1;
}

40% {
  opacity: 0;
}

40%, 100% {
  opacity: 0;
}
`;

const EngineeringContentWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
`;

const GooseWrapper = styled.div`
  position: relative;
  width: 750px;
  height: auto;

  ${mediaQueries.medium} {
    width: 550px;
    height: 297.76px;
  }

  ${mediaQueries.tablet} {
    width: 513.28px;
    height: 350px;
  }

  ${mediaQueries.largeMobile} {
    width: 260.9px;
    height: 177.9px;
  }
`;

const Goose1 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${goose1});
  background-position: center;
  background-size: cover;
  position: absolute;

  animation: ${Flap1} 5s infinite;
`;

const Goose2 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${goose2});
  background-position: center;
  background-size: cover;
  position: absolute;
  opacity: 0;

  animation: ${Flap2} 5s infinite;
`;

const EngineeringContainer = styled.div`
  display: flex;
  gap: 80px;

  ${mediaQueries.medium} {
    gap: 20px;
    padding: 0px 20px;
  }

  ${mediaQueries.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 80px;
  }
`;

const EngineeringInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${mediaQueries.tablet} {
    align-items: center;
  }
`;

const UwEng = styled.img`
  width: 500px;
  height: 60px;

  ${mediaQueries.medium} {
    width: 400px;
    height: 48px;
  }

  ${mediaQueries.largeMobile} {
    width: 308.27px;
    height: auto;
  }
`;

const EngP = styled(LargeBody)`
  max-width: 617px;
  line-height: 160%;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.dark.gray};

  ${mediaQueries.medium} {
    font-size: 16px;
  }

  ${mediaQueries.tablet} {
    text-align: center;
    padding: 10px 50px;
  }
`;

const Judges: React.FC = () => {
  const theme = useTheme();

  return (
    <JudgesSectionWrapper>
      <JudgesContentWrapper>
        <HeadingContainer>
          <JudgesHeading1>
            Get <GlowText color={theme.colors.primary.pink}>inspired</GlowText>{" "}
            by industry leaders
          </JudgesHeading1>
          <JudgesSubtitle>
            Every year, leaders in the tech industry join Hack the North to
            speak, judge, and mentor hackers.
          </JudgesSubtitle>
        </HeadingContainer>
        <BodyContainer>
          <JudgesHeading2>Opening ceremony panelists</JudgesHeading2>
          <SpeakersGrid />
          <JudgesHeading2>Judges</JudgesHeading2>
          <JudgesGrid />
        </BodyContainer>
      </JudgesContentWrapper>
      <EngineeringContentWrapper>
        <EngineeringContainer>
          <GooseWrapper>
            <Goose1 />
            <Goose2 />
          </GooseWrapper>
          <EngineeringInfo>
            <UwEng src={uwEng} alt="Waterloo Engineering" />
            <EngP>
              Our partner since 2014, Waterloo Engineering continues to support
              Hack the North to build a creative, diverse, and unique experience
              for hackers. The University of Waterloo is home to Canada’s
              largest engineering school — a pipeline for engineering talent for
              the world’s leading companies.
            </EngP>
            <EngP>
              Ranked among the top 50 engineering schools in the world, the
              school’s reputation for excellence is built on the foundation of
              co-op education and a bold history of innovation.
            </EngP>
          </EngineeringInfo>
        </EngineeringContainer>
      </EngineeringContentWrapper>
    </JudgesSectionWrapper>
  );
};

export default Judges;
