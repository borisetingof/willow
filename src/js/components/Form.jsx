import React from "react";
import styled from "styled-components";

import { label, input, legend, button } from "../styles";
import { rem } from "../utils";

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Fieldset = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Legend = styled.legend`
  ${legend};
  grid-column-start: 1;
  grid-column-end: 3;
  margin: ${rem(10)};
`;

const Label = styled.label`
  ${label};
  margin: ${rem(10)};
`;

const Input = styled.input`
  ${input};
`;

const Button = styled.button`
  ${button};
  margin: ${rem(10)};
`;

export default props => {
  // const { user } = useUser();

  return (
    <>
      <Form>
        <Fieldset>
          <Legend>Personal Details</Legend>
          <Label>
            Given Name
            <Input type="text" name="name" />
          </Label>
          <Label>
            Surname
            <Input type="text" name="surname" />
          </Label>
          <Label>
            Email
            <Input type="email" name="email" />
          </Label>
          <Label>
            Phone
            <Input type="tel" />
          </Label>
        </Fieldset>
        <Fieldset>
          <Legend>Address</Legend>
          <Label>
            House Name or #
            <Input type="text" />
          </Label>
          <Label>
            Street
            <Input type="text" />
          </Label>
          <Label>
            Suburb
            <Input type="text" />
          </Label>
          <Label>
            State
            <Input type="text" />
          </Label>
          <Label>
            Postcode
            <Input type="text" />
          </Label>
          <Label>
            Country
            <Input type="text" />
          </Label>
        </Fieldset>
        <Button>Upload Avartar</Button>
        <Button>Create Hcard</Button>
      </Form>
    </>
  );
};
