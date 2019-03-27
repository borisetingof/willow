import styled from "styled-components";

import { label, input, legend, button, h1 } from "../../styles";
import { rem } from "../../utils";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Fieldset = styled.div`
  margin: ${rem(5)} 0;
  grid-column-start: 1;
  grid-column-end: 3;

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Legend = styled.legend`
  ${legend};
  grid-column-start: 1;
  grid-column-end: 3;
  margin: ${rem(16)} ${rem(10)};
`;

export const Label = styled.label`
  ${label};
  margin: ${rem(7)} ${rem(10)};
`;

export const Input = styled.input`
  ${input};
`;

export const Button = styled.button`
  ${button};
  margin: ${rem(20)} ${rem(10)};
`;

export const H1 = styled.h1`
  ${h1};
  margin: ${rem(5)} ${rem(10)};
  font-size: ${rem(28)};
`;