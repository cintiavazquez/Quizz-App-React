import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,500;1,100;1,300;1,500&display=swap');

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
  li {
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
