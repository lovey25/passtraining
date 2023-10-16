import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: rgb(231, 234, 239);
    font-family: "Nanum Gothic";
  }

  h3 {
    font-size: 20px;
  }
`;

export default GlobalStyle;
