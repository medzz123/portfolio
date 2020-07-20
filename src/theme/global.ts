import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'Space Mono', sans-serif;
    scroll-behavior: smooth;
  };

  body, html {
    margin: 0; 
    padding: 0;
  }


  * {
    box-sizing: border-box;
    ::selection { background: ${(p) => p.theme.secondary.main}; }
  }

  ul {
    list-style: none;
  }

  body {
    font-family: 'Space Mono', sans-serif;
    color: ${(p) => p.theme.text.primary};
  }

  h1,h2,h3,h4,h5,h6{
    font-family: 'Abril Fatface', sans-serif;
    color: ${(p) => p.theme.text.primary};
    margin: 16px 0;
  }
  
  a {
      text-decoration: none;
      color: inherit;
  }
`;

export default GlobalStyles;
