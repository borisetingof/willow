import styled from "styled-components";

import { rem } from "../../utils";

export const Card = styled.div`
  background: ${props => props.theme.color7};
`;

export const Header = styled.header`
  color: ${props => props.theme.color7};
  background: ${props => props.theme.color1};
  display: flex;
  align-items: flex-end;

  h2 {
    flex: 1 0;
    padding: ${rem(24)};
    margin: 0;
    font-size: ${rem(24)};
  }

  img {
    height: ${rem(110)};
    width: auto;
    border: ${rem(1)} solid ${props => props.theme.color8};
    border-bottom-width: ${rem(2)};
    margin: ${rem(10)} ${rem(10)} -${rem(10)};
    display: block;
  }
`;

export const Dl = styled.dl`
  display: grid;
  grid-template-columns: 70px auto 70px auto;
`;

export const Dt = styled.dt`
  grid-column-start: 1;
  grid-column-end: 2;
  color: ${props => props.theme.color9};
  font-size: ${rem(10)};
  text-transform: uppercase;
  border-bottom: 1px solid ${props => props.theme.color4};
  padding: ${rem(16)} ${rem(5)} ${rem(5)};

  @media (min-width: 576px) {
    &:nth-of-type(6) {
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
`;

export const Dd = styled.dd`
  grid-column-start: 2;
  grid-column-end: 5;
  font-size: ${rem(16)};
  border-bottom: ${rem(1)} solid ${props => props.theme.color4};
  line-height: ${rem(26)};
  margin: 0;
  padding: ${rem(4)};

  @media (min-width: 576px) {
    &:nth-of-type(5) {
      grid-column-end: 3;
    }

    &:nth-of-type(6) {
      grid-column-start: 4;
    }
  }
`;
