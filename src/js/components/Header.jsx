import React from "react";

import { StyledHeader } from "../styles";
import logo from "../../images/logo.png";
import useUser from "../effects/useUser";

export default props => {
  const { user } = useUser();

  return (
    <StyledHeader>
      <div className="logo">
        <img src={logo} alt="Willow" />
      </div>
      <div className="user">{user && user.usernameName}</div>
    </StyledHeader>
  );
};
