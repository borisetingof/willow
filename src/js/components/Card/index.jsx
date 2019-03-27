import React from "react";

import avatar from "../../../images/avatar.png";
import { Card, Header, Dl, Dt, Dd } from "./style";

export default ({ className }) => {
  // const { user } = useUser();

  return (
    <Card className={className}>
      <Header>
        <h2>test</h2>
        <img src={avatar} alt="avatar" />
      </Header>
      <Dl>
        <Dt>Email</Dt>
        <Dd>boris.etingof@reckon.com</Dd>
        <Dt>Phone</Dt>
        <Dd>-</Dd>
        <Dt>Address</Dt>
        <Dd>-</Dd>
        <Dt />
        <Dd>-</Dd>
        <Dt>Postcode</Dt>
        <Dd>-</Dd>
        <Dt>Country</Dt>
        <Dd>-</Dd>
      </Dl>
    </Card>
  );
};
