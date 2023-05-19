import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
   box-sizing: inherit;
  }

  #root {
    font-family: 'Inter', sans-serif;
    justify-content: center;
    color: ${({ theme }) => theme.color.mineShaft}; 
    background: ${({ theme }) => theme.color.whiteLilac};
    word-break: break-word;
    padding: 115px 40px 110px 40px;
    letter-spacing: 0.05em;
    
  }
  
  body {
    margin:0;
  }
  `;
