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
  }
  
  :root {
    --darkest-color: #1d1d49;
    --dark-color: #b02d59;
    --light-color: rgb(246, 196, 213);
    --lightest-color: #f9f9f9;}
  
  `;
