import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Fira Sans';
    font-weight: 300;
    font-size: 1.8rem;
  }
  
  html {
    font-size: 62.5%;
  }
  
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    font-family: inherit;
    color: inherit;
  }`;
