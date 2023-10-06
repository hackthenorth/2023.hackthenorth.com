import React from "react";
import { SPEAKERS_SET } from "src/copy/judges";
import { LargeBody } from "src/styles";
import { mediaQueries } from "src/utils";
import styled, { css } from "styled-components";

const SpeakersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
  margin: 0 20px 60px 20px;
`;

const Grid = styled.div`
  position: relative;
`;

const JudgeImage = styled.img`
  width: 142.79px;
  height: 142.79px;
  border: 2.28463px solid #ffffff;
  object-fit: cover;

  ${mediaQueries.custom(500)} {
    width: 80px;
    height: 80px;
  }
`;

const JudgeName = styled(LargeBody)`
  font-size: 27px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.text.dark.white};
  margin: 0px;
  text-align: start;
`;

const JudgeDescription = styled(LargeBody)`
  font-size: 16px;
  line-height: 120%;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text.dark.gray};
  margin: 0px;
  text-align: start;
`;

const JudgeBio = styled(LargeBody)`
  font-size: 16px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.text.dark.gray};
  margin: 0px;
  text-align: start;
`;

const SideInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: rgba(42, 42, 79, 0.1);
  z-index: 50;
  backdrop-filter: blur(2px);
`;

const ColourfulBg = styled.div<{ i: number }>`
  position: absolute;
  top: 10px;
  left: -5px;
  width: 143px;
  height: 143px;

  ${({ i }) =>
    i % 3 === 0 &&
    css`
      background: linear-gradient(90deg, #f09343 0%, #f8609f 100%);
    `}

  ${({ i }) =>
    i % 3 === 1 &&
    css`
      background: linear-gradient(90deg, #f8609f 0%, #d841fc 100%);
    `}

${({ i }) =>
    i % 3 === 2 &&
    css`
      background: linear-gradient(90deg, #d841fc 0%, #896bff 100%);
    `}

  ${mediaQueries.tablet} {
    ${({ i }) =>
      i % 2 === 0 &&
      css`
        background: linear-gradient(
          90deg,
          #f09343 0%,
          #cfb86a 50%,
          #addd90 100%
        );
      `}

    ${({ i }) =>
      i % 2 === 1 &&
      css`
        background: linear-gradient(
          90deg,
          #1fa6ff 0%,
          #8f69fd 60%,
          #ff2cfb 100%
        );
      `}
  }

  ${mediaQueries.custom(540)} {
    ${({ i }) =>
      i % 6 === 0 &&
      css`
        background: #19fbff;
      `}

    ${({ i }) =>
      i % 6 === 1 &&
      css`
        background: #1fa6ff;
      `}

    ${({ i }) =>
      i % 6 === 2 &&
      css`
        background: #896bff;
      `}
    
    ${({ i }) =>
      i % 6 === 3 &&
      css`
        background: #ff2cfb;
      `}
    
    ${({ i }) =>
      i % 6 === 4 &&
      css`
        background: #f7ce58;
      `}
    
    ${({ i }) =>
      i % 6 === 4 &&
      css`
        background: #f09343;
      `}
  }

  ${mediaQueries.custom(500)} {
    width: 80px;
    height: 80px;
  }
`;

const ZContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  gap: 10px;
`;

const SpeakersGrid: React.FC = () => {
  return (
    <SpeakersContainer>
      {SPEAKERS_SET.map((speaker, i) => (
        <Grid key={speaker.name}>
          <ColourfulBg i={i} />
          <ZContainer>
            <div>
              <JudgeImage
                src={speaker.imgUrl}
                alt={speaker.name}
                loading="lazy"
              />
            </div>
            <SideInfo>
              <JudgeName>{speaker.name}</JudgeName>
              <JudgeDescription>{speaker.description}</JudgeDescription>
              <JudgeBio>{speaker.bio}</JudgeBio>
            </SideInfo>
          </ZContainer>
        </Grid>
      ))}
    </SpeakersContainer>
  );
};

export default SpeakersGrid;
