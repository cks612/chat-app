import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    
    *{
      /* @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700&display=swap"); */
    box-sizing:border-box;
    font-family: Quicksand !important;
  }

`;

export default GlobalStyles;
