import React from "react";
import { Year } from "src/sections/History/constants";
import { useDeviceSize } from "src/utils";
import styled, { useTheme } from "styled-components";

interface FolderProps {
  year: Year;
  isOpen: boolean;
}

const Folder: React.FC<FolderProps> = ({ year, isOpen }) => {
  const theme = useTheme();
  const isMedium = useDeviceSize("medium");

  const HoverFolder = styled.svg`
    .folder ~ defs stop {
      transition: 1s;
    }

    .folder:hover ~ defs stop:first-child {
      stop-color: ${year.gradientStart};
    }

    .folder:hover ~ defs stop:last-child {
      stop-color: ${year.gradientEnd};
    }
  `;

  return (
    <>
      {isOpen ? (
        <svg
          width={(isMedium && 60) || 97}
          height={(isMedium && 48.41) || 71}
          viewBox="0 0 97 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1431_7988)">
            <path
              d="M1 70.5V13.11L6.03 2.5H31.2L36.42 13.5H86V70.5H1Z"
              fill="white"
            />
            <path
              d="M30.89 3L35.84 13.43L36.11 14H85.5V70H1.5V13.22L6.34 3H30.89ZM31.52 2H5.71L0.5 13V71H86.5V13H36.74L31.52 2Z"
              fill="white"
            />
            <path
              d="M3 68.5V11.11L8.03 0.5H33.2L38.42 11.5H88V68.5H3Z"
              fill={"url(#0open" + year.year + ")"}
            />
            <path
              d="M32.89 1L37.84 11.43L38.11 12H87.5V68H3.5V11.22L8.34 1H32.88M33.51 0H7.71L2.5 11V69H88.5V11H38.74L33.52 0H33.51Z"
              fill="white"
            />
            <path
              d="M1.09961 68.5L8.91961 24.5H93.8996L86.0796 68.5H1.09961Z"
              fill="white"
            />
            <path
              d="M93.31 25L85.67 68H1.69L9.34 25H93.31ZM94.5 24H8.5L0.5 69H86.5L94.5 24Z"
              fill="white"
            />
            <path
              d="M3.09961 68.5L10.9196 24.5H95.8996L88.0796 68.5H3.09961Z"
              fill={"url(#1open" + year.year + ")"}
            />
            <path
              d="M95.31 25L87.67 68H3.69L11.34 25H95.31ZM96.5 24H10.5L2.5 69H88.5L96.5 24Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id={"0open" + year.year}
              x1="45.5"
              y1="0.5"
              x2="45.5"
              y2="68.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={year.gradientStart} />
              <stop offset="1" stopColor={year.gradientEnd} />
            </linearGradient>
            <linearGradient
              id={"1open" + year.year}
              x1="49.4996"
              y1="24.5"
              x2="49.4996"
              y2="68.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={year.gradientStart} />
              <stop offset="1" stopColor={year.gradientEnd} />
            </linearGradient>
            <clipPath id="clip0_1431_7988">
              <rect
                width="96"
                height="71"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <HoverFolder
          width={(isMedium && 60) || 88}
          height={(isMedium && 48.41) || 71}
          viewBox="0 0 88 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 70.5V13.11L5.53 2.5H30.7L35.92 13.5H85.5V70.5H0.5Z"
            fill="white"
          />
          <path
            d="M30.39 3L35.34 13.43L35.61 14H85V70H1V13.22L5.84 3H30.39ZM31.02 2H5.21L0 13V71H86V13H36.24L31.02 2Z"
            fill="white"
          />
          <path
            className="folder"
            d="M2.5 68.5V11.11L7.53 0.5H32.7L37.92 11.5H87.5V68.5H2.5Z"
            fill={"url(#0closed" + year.year + ")"}
          />
          <path
            d="M32.39 1L37.34 11.43L37.61 12H87V68H3V11.22L7.84 1H32.38M33.01 0H7.21L2 11V69H88V11H38.24L33.02 0H33.01Z"
            fill="white"
          />
          <path
            className="folder"
            d="M87.5 16.5H2.5V68.5H87.5V16.5Z"
            fill={"url(#1closed" + year.year + ")"}
          />
          <path d="M87 17V68H3V17H87ZM88 16H2V69H88V16Z" fill="white" />
          <defs>
            <linearGradient
              id={"0closed" + year.year}
              x1="45"
              y1="0.5"
              x2="45"
              y2="68.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor={theme.colors.background.dark} />
              <stop offset="1" stopColor={theme.colors.background.dark} />
            </linearGradient>
            <linearGradient
              id={"1closed" + year.year}
              x1="45"
              y1="16.5"
              x2="45"
              y2="68.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor={theme.colors.background.dark} />
              <stop offset="1" stopColor={theme.colors.background.dark} />
            </linearGradient>
          </defs>
        </HoverFolder>
      )}
    </>
  );
};

export default Folder;
