import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { rem } from "./utils";
import { GlobalStyle } from "./styles";
import withContext from "./context";
import Form from "./components/Form/";
import Card from "./components/Card/";
import theme from "./theme";

const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  justify-items: center;
  align-content: center;
  align-items: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    left: 50%;
    background: #e1e4e7;
  }
`;

const StyledForm = styled(Form)`
  max-width: 420px;
  width: 100%;
`;

const StyledCard = styled(Card)`
  max-width: 420px;
  width: 100%;
  z-index: 1;
`;

const App = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Page>
        <StyledForm />
        <StyledCard />
      </Page>
    </>
  </ThemeProvider>
);

export default withContext(App);
