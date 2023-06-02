import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  };

  *, ::after, ::before {
   box-sizing: inherit;
  }

  body {
    display: flex;
    font-family: 'Inter', sans-serif;
    justify-content: center;
    line-height: 120%;
    padding: 15px 0px 10px 0px;
    color: ${({ theme }) => theme.color.mineShaft}; 
    background: ${({ theme }) => theme.color.whiteLilac};
    word-break: break-word;
    transition: 0.3s;
    letter-spacing: 0.05em; 
  };
`;
