import { css } from 'styled-components';

// media query
const sizes = {
  medium: 768,
  small: 500,
}
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
     @media (min-width: ${sizes[label]}px) {
        ${css(...args)};
     }
  `
  return acc
}, {});

// font
export const setFont = {
  main: `'Roboto', sans-serif`
}

// colors
export const setColor = {
  mainWhite: "#fff",
  mainBlack: "#000",
  subBlack: "#161616",
  subWhite: "#e8e8e8",
  mainGreen: "#2e6d4a",
  subGreen: "#5cdb95",
  mainRed: "maroon"
}