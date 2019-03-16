import React, { useContext } from "react";

import { Context } from "../context";
import { StyledHero } from "../styles";

export default props => {
  const {
    state: {
      ui: {
        details: { url, description }
      }
    }
  } = useContext(Context);

  return (
    <StyledHero url={url}>
      <h1>{description}</h1>
    </StyledHero>
  );
};
