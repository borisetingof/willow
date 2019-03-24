import React from "react";
import styled from "styled-components";

import { rem } from "../utils";
import avatar from "../../images/avatar.png";
import { DEFAULT_FONT_SIZE } from "../constants";

const Header = styled.header`
  color: #fff;
  background: #2c3e50;
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
    border: ${rem(1)} solid #b3b3b3;
    border-bottom-width: ${rem(2)};
    margin: ${rem(10)} ${rem(10)} -${rem(10)};
    display: block;
  }
`;

const Dl = styled.dl`
  position: relative;
`;

const Dt = styled.dt`
  color: #34495e;
  font-size: ${rem(10)};
  text-transform: uppercase;
  position: absolute;
  left: 0;
  border-bottom: 1px solid #dbe0e2;
  width: ${rem(70)};
  min-height: ${rem(27)};
  padding-top: ${rem(11)};
  box-sizing: border-box;
`;

const Dd = styled.dd`
  margin: 0;
  font-size: ${rem(16)};
  border-bottom: ${rem(1)} solid #dbe0e2;
  width: 100%;
  line-height: ${rem(26)};
  margin-bottom: ${rem(10)};
  padding-left: ${rem(70)};
`;

export default props => {
  // const { user } = useUser();

  return (
    <>
      {/* <Header>
        <h2>test</h2>
        <img src={avatar} alt="avatar" />
      </Header> */}
      <Dl>
        <Dt>Email</Dt>
        <Dd>boris.etingof@gmail.com</Dd>
        {/* <Dt>Phone</Dt>
        <Dd>-</Dd>
        <Dt>Address</Dt>
        <Dd>-</Dd>
        <Dt />
        <Dd>-</Dd>
        
        <Dt>Postcode</Dt>
        <Dd>-</Dd>
        <Dt>Country</Dt>
        <Dd>-</Dd> */}
        
      </Dl>
    </>
  );
};
