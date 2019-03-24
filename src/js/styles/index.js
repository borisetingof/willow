import styled, { createGlobalStyle } from "styled-components";

import { rem } from "../utils";
import {
  LIGHT_GREY,
  GREY,
  DARKER_GREY,
  PURPLE,
  WHITE,
  DEFAULT_FONT_SIZE,
  BLACK
} from "../constants";

export const Label = styled.label`
  color: #2c3e50;
  text-transform: uppercase;
  font-size: ${rem(12)};
  padding: ${rem(10)};
  flex: 1 1 50%;
  box-sizing: border-box;
`;

export const Fieldset = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${rem(10)};
  font-size: ${rem(16)};
  margin-top: ${rem(2)};
  border: ${rem(1)} solid #c3c4c3;
  border-radius: ${rem(4)};
  box-sizing: border-box;
`;

export const Legend = styled.legend`
  flex: 1 1 100%;
  margin: ${rem(30)} ${rem(10)} ${rem(20)};
  font-size: ${rem(10)};
  color: #b0b8bc;
  text-transform: uppercase;
  border-bottom: ${rem(1)} solid #dbe0e2;
`;

export const Button = styled.button`
  flex: 1 1;
  font-size: ${rem(20)};
  box-sizing: border-box;
  border: 0;
  color: #fff;
  border-radius: ${rem(4)};
  padding: ${rem(10)};
  background: #627b8b;
  border-bottom: ${rem(2)} solid #3f515d;
  cursor: pointer;
  margin: ${rem(10)};
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 50%;
`



export const GlobalStyle = createGlobalStyle`
  html, body, .root {
  font-size: ${DEFAULT_FONT_SIZE}px;
    font-family: 'Merriweather Sans', sans-serif;
    text-rendering: optimizeLegibility;
    height: 100%;
    position: relative;
  }

  * {
    box-sizing: border-box;
  }
`;

export const StyledPage = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;

  header {
    flex-basis: ${rem(70)};
    flex-grow: 0;
    flex-shrink: 0;
    background: ${BLACK};
    display: flex;
    align-items: stretch;
  }

  main {
    flex-grow: 1;

    > .left {
      flex-basis: ${rem(315)};
      flex-grow: 0;
      flex-shrink: 1;
      padding: 0 ${rem(30)};
    }

    > .center {
      flex-basis: ${rem(465)};
      flex-grow: 0;
      flex-shrink: 1;
      display: flex;
      flex-flow: column;
    }

    > .right {
      position: relative;
      flex-grow: 1;
    }

    @media (min-width: 576px) {
      display: flex;
    }
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-grow: 1;

  .logo {
    flex-basis: ${rem(70)};
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: ${rem(1)} solid ${DARKER_GREY};

    img {
      width: ${rem(31)};
      height: ${rem(18)};
    }
  }

  .user {
    flex-grow: 1;
    color: ${WHITE};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-transform: uppercase;
    font-size: ${rem(12)};
    padding-right: ${rem(20)};
  }
`;

export const StyledFilter = styled.div`
  margin: ${rem(15)} 0;
  padding: ${rem(15)} 0;
  border-bottom: ${rem(1)} solid ${GREY};
  font-size: ${rem(14)};

  &:last-child {
    margin-bottom: 0;
  }

  .title {
    margin: 0 0 ${rem(25)};
    display: flex;

    p {
      padding: 0;
      margin: 0;
      flex-grow: 1;
      font-weight: 600;
    }

    button {
      color: ${DARKER_GREY};
      appearance: none;
      outline: 0;
      border: none;
      cursor: pointer;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      margin: 0 ${rem(-7)};
      padding: ${rem(7)};
      cursor: pointer;
      user-select: none;

      > div {
        flex-grow: 1;
      }

      &:hover {
        background: ${LIGHT_GREY};
      }
    }
  }
`;

export const StyledGallery = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;

  .search {
    flex-basis: ${rem(60)};
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    color: ${DARKER_GREY};
    min-width: ${rem(390)};
    display: none;
    border-right: ${rem(1)} solid ${GREY};
    border-left: ${rem(1)} solid ${GREY};

    > svg {
      position: absolute;
      left: ${rem(15)};
      top: ${rem(22)};
    }

    > input {
      appearance: none;
      padding: 0 ${rem(20)} 0 ${rem(40)};
      width: 100%;
      height: ${rem(60)};
      outline: 0;
      border: none;
      box-sizing: border-box;

      &::placeholder {
        color: ${DARKER_GREY};
      }
    }

    @media (min-width: 576px) {
      display: block;
    }
  }

  .gallery {
    width: 100%;
    height: 100%;
    overflow: scroll;
    position: relative;
    flex-grow: 1;
    box-sizing: border-box;

    @media (min-width: 576px) {
      border: ${rem(1)} solid ${GREY};
    }

    > ul {
      padding: 0;
      margin: 0;
    }
  }
`;

export const StyledCard = styled.li`
  list-style: none;
  padding: ${rem(15)} ${rem(30)} ${rem(30)};
  position: relative;

  &:first-child {
    padding-top: ${rem(30)};
  }
  &:last-child {
    padding-bottom: ${rem(30)};
  }

  p {
    color: ${DARKER_GREY};
    margin: 0;
  }

  h3 {
    margin: ${rem(5)} 0 ${rem(10)};
    font-size: ${rem(18)};
  }

  > div {
    position: relative;

    > img {
      width: 100%;
      display: block;
    }

    > .actions {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.25);

      > div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 100%;

        > ul {
          padding: 0;
          margin: 0;

          > li {
            list-style: none;
            padding: 0;
            margin: 0;
          }
        }
      }
    }

    button {
      appearance: none;
      outline: 0;
      width: ${rem(170)};
      color: ${WHITE};
      border: ${rem(1)} solid ${PURPLE};
      border-radius: ${rem(5)};
      background: rgba(0, 0, 0, 0.5);
      padding: ${rem(10)};
      margin: ${rem(10)} ${rem(5)};
      display: flex;
      cursor: pointer;

      > div {
        flex-grow: 1;
        text-align: left;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.75);
      }
    }
  }

  &:hover {
    background: ${LIGHT_GREY};

    > div > .actions {
      display: flex;
    }
  }
`;

export const StyledHero = styled.div`
  background: url(${({ url }) => url});
  background-size: cover;
  height: ${rem(300)};

  @media (min-width: 576px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  h1 {
    color: ${WHITE};
    font-size: ${rem(30)};
    padding: ${rem(50)};
  }
`;
