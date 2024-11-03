import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Font Definition */
  @font-face {
    font-family: 'BebasNeue';
    src: url('/assets/fonts/BebasNeue.otf') format('opentype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'BebasNeue';
    src: url('/assets/fonts/BebasNeueBold.otf') format('opentype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'BebasNeue';
    src: url('/assets/fonts/BebasNeueLight.otf') format('opentype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'BebasNeue';
    src: url('/assets/fonts/BebasNeueThin.otf') format('opentype');
    font-weight: lighter;
  }

  /* Golbal Styles */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.dark};
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  * {
    scrollbar-width: thin;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.scrollbarTrack};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.dark};
  }

  body:nth-child(n) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    body {
      overflow-y: hidden;
    }
  }

  a {
    text-decoration: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: inline-block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    border: none;
  }

  button,
  select,
  a {
    cursor: pointer;
  }

  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  button,
  textarea,
  select,
  a {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: ${({ theme }) => theme.typography.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  input:focus,
  textarea:focus,
  button:focus {
    outline: 0;
    border: none;
    box-shadow: none;
  }

  ul li {
    list-style: none;
  }
`;
