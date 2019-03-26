import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles";
import withContext from "./context";
import Form from "./components/Form";
import Card from "./components/Card";
import theme from "./theme";

const App = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Form />
      <Card />
    </>
  </ThemeProvider>
);

export default withContext(App);
