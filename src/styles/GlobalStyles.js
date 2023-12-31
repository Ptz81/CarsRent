import 'react-toastify/dist/ReactToastify.css';
import './fonts.css';
import { css } from '@emotion/react';

export const colors = {
  grayColor: '#8A8A89',
  subTitleColor: 'rgba(18, 20, 23, 0.5)',
  selectColor:'rgba(18, 20, 23, 0.2)',
  textMainColor: '#121417',
  accentColor: '#3470FF',
  hoverColor: '#0B44CD',
  mainBgColor: '#ffffff',
  disabled: '#F7F7FB'
};

export const breakpoint = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1200px',
};

export const GlobalStyles = css`
  :root {
    --main-font-family: 'Manrope', sans-serif;
    --transition-duration: 250ms;
    --transition-func: ease;
  }
  html {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: ${colors.textMainColor};
    font-family: var(--main-font-family);
    background-color: ${colors.mainBgColor};
  }

  div,
  section,
  span,
  object,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  fieldset,
  form {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  nav,
  a {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    ${'' /* vertical-align: baseline; */}
    text-decoration: none;
  }

  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
export default {
  colors,
  GlobalStyles,
};
