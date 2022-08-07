import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.secondaryColor};
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${(props) => props.theme.colors.primaryColor};
  }

  p,
  li,
  h1,
  h2,
  h3,
  h4 {
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
}

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  img[width][height] {
    height: auto;
  }

`;
export default GlobalStyle;
