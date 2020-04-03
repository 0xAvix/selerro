import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Open Sans Condensed";
    padding: 20px 60px 0;

    @media screen and (max-width: 800px) {
      padding: 10px;
      width: 90vw;
      margin: 0;
      padding: 0;
      width: 96vw;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
