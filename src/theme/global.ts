import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'Mulish', sans-serif;
    scroll-behavior: smooth;
  };

  body, html {
    margin: 0; 
    padding: 0;
  }


  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: 'Mulish', sans-serif;
    color: ${(p) => p.theme.text.primary};
  }

  h1,h2,h3,h4,h5,h6{
    font-family: 'Abril Fatface', cursive;
    color: ${(p) => p.theme.text.primary};
    margin: 16px 0;
  }

  h1 {
    font-size: 7vh;
    font-weight: 400;
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 50px;
    }
  }

  @media screen and (max-width: 479px) {
    h1 {
      font-size: 37px;
    }
  }
  
  a {
      text-decoration: none;
      color: inherit;
  }
`;

export default GlobalStyles;
