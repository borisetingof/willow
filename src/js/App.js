import React from "react";

import { GlobalStyle, StyledPage } from "./styles";
import withContext from "./context";
import Form from "./components/Form";
import Card from "./components/Card";

const App = props => (
  <>
    <GlobalStyle />
    {/* <Form /> */}
    <Card />
  </>
);

export default withContext(App);
