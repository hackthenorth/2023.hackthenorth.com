import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";

import App from "./App";
import { theme } from "./styles";

const fonts = css`
  @font-face {
    font-family: "Castledown";
    src: url("/fonts/castledown-heavy.eot");
    src: url("/fonts/castledown-heavy.eot#iefix") format("embedded-opentype"),
      url("/fonts/castledown-heavy.woff2") format("woff2"),
      url("/fonts/castledown-heavy.woff") format("woff"),
      url("/fonts/castledown-heavy.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Satoshi-Regular.woff2") format("woff2"),
      url("/fonts/Satoshi-Regular.woff") format("woff");
    font-display: swap;
  }
  @font-face {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/Satoshi-Medium.woff2") format("woff2"),
      url("/fonts/Satoshi-Medium.woff") format("woff");
    font-display: swap;
  }
  @font-face {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/Satoshi-Bold.woff2") format("woff2"),
      url("/fonts/Satoshi-Bold.woff") format("woff");
    font-display: swap;
  }
`;

const resetStyles = css`
  html,
  body {
  }
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    background-color: #141425;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body > div:first-of-type,
  div#__next,
  div#__next > div {
    height: 100%;
  }
`;

const CustomStyles = createGlobalStyle`
  ${fonts}
  ${resetStyles}
`;

ReactDOM.render(
  <React.StrictMode>
    <CustomStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
