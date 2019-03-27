import { createGlobalStyle, css } from "styled-components";

import { rem } from "../utils";

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-size: ${props => `${props.theme.fontSize}px`};
    font-family: ${props => props.theme.fontFamily};
    text-rendering: optimizeLegibility;
  }

  * {
    box-sizing: border-box;
  }
`;

export const label = css`
  display: block;
  color: ${props => props.theme.color1};
  text-transform: uppercase;
  font-size: ${rem(12)};

  > input {
    margin-top: ${rem(5)};
  }
`;

export const input = css`
  width: 100%;
  border: ${rem(1)} solid ${props => props.theme.color2};
  border-radius: ${rem(4)};
  padding: 0 ${rem(5)};
  font-size: ${rem(16)};
  line-height: ${rem(32)};
`;

export const legend = css`
  display: block;
  font-size: ${rem(10)};
  line-height: ${rem(16)};
  color: ${props => props.theme.color3};
  text-transform: uppercase;
  border-bottom: ${rem(1)} solid ${props => props.theme.color4};
`;

export const button = css`
  font-size: ${rem(20)};
  border: 0;
  color: ${props => props.theme.color7};
  border-radius: ${rem(4)};
  padding: ${rem(10)};
  background: ${props => props.theme.color5};
  border-bottom: ${rem(2)} solid ${props => props.theme.color6};
  cursor: pointer;
`;

export const h1 = css`
  color: ${props => props.theme.color1};
  font-weight: 800;
`;
