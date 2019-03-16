import React, { useReducer } from "react";

import reducers from "./reducers";

export const Context = React.createContext();

export default Component => props => {
  const { reducer, initialState } = reducers;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Component {...props} />
    </Context.Provider>
  );
};
