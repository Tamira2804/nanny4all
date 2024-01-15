import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    src: local('Manrope'), url('/nanny4all/fonts/Manrope-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

   @font-face {
    font-family: 'Manrope';
    src: local('Manrope'), url('/nanny4all/fonts/Manrope-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

   @font-face {
    font-family: 'Manrope';
    src: local('Manrope'), url('/nanny4all/fonts/Manrope-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }


 :root {
  /* Typography */
    --family: "Manrope", sans-serif;
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-bold: 600;


/* Colors */
    --price-color: #38CD3E;
    --heart-color: #F03F3B;

    --red: #F03F3B;
    --red-light: rgba(240, 63, 59, 0.20);

    --green: #103931;
    --green-light: rgba(16, 57, 49, 0.20);

    --blue: #0957C3;
    --blue-light: rgba(9, 87, 195, 0.20);

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    --colors-title: #11101C;
    --colors-title-inverse: #FBFBFB;
    --colors-title-gray:#8A8A89;
    --colors-text: rgba(17, 16, 28, 0.50);
    --colors-select: rgba(17, 16, 28, 0.30);

    --colors-border: rgba(251, 251, 251, 0.40);
    --colors-bg-primary: #FBFBFB;
    --colors-bg-secondary: #F3F3F3;

    --accent: var(--blue);
    --accent-light: var(--blue-light);
  }

  a {
      text-decoration: none;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

   input, button, textarea, select {
    font: inherit;
  }
`;
