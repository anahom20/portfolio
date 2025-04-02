import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  }

  h1, h2 {
    color: #334d35;
  }

  p {
    color: #2e2e2e;
  }

  html, body, #root {
    height: 100%;
    background-color: #ffffff;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;


export default GlobalStyles;
