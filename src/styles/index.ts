import { createGlobalStyle } from "styled-components";

import robotoFont from "assets/Roboto-Regular.ttf";

export const customTheme = {
  dark: {
    primary: "#0077B6",
    auxiliary: "#03045E",
    text: "#FFFFFF"
  },
  defaultFontSize: "16px"
};

// Acts like <CSSBaseLine> in MUI
export const GlobalStyles = createGlobalStyle`
  // define the font
  @font-face {
    font-family: randomNameHere;
    src: url(${robotoFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-size: 16px;
    box-sizing: border-box;
    margin: 0;
  }

  body * {
    font-family: randomNameHere;  // use the font
    box-sizing: border-box;
    margin: 0;
  }
`;

// Import the fonts -> declare it with a name (randomNameHere) -> apply it everywhere
// <https://stackoverflow.com/a/55242731/8834000>
// <https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face>
// Check out how MUI create CSSBaseLine: <https://github.com/mui/material-ui/blob/master/packages/mui-material/src/CssBaseline/CssBaseline.js>
// https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors
