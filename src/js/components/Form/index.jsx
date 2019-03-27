import React from "react";

import { Form, Fieldset, Legend, Label, Input, Button, H1 } from "./style";

export default ({ className }) => {
  // const { user } = useUser();

  return (
    <div className={className}>
      <H1>hCard Builder</H1>
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
    </div>
  );
};
