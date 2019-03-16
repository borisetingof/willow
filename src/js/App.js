import React from "react";

import { GlobalStyle, StyledPage } from "./styles";
import withContext from "./context";
import Gallery from "./components/Gallery";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = props => (
  <>
    <GlobalStyle />
    <StyledPage>
      <header>
        <Header />
      </header>
      <main>
        <div className="left">
          <Filter />
        </div>
        <div className="center">
          <Gallery />
        </div>
        <div className="right">
          <Hero />
        </div>
      </main>
    </StyledPage>
  </>
);

export default withContext(App);
