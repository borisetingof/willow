import { useContext, useEffect } from "react";

import { Context } from "../context";
import { fetchBuildings } from "../actions/api";

export default () => {
  const {
    state: {
      api: { buildings }
    },
    dispatch
  } = useContext(Context);

  useEffect(() => {
    fetchBuildings(dispatch);
  }, []);

  return {
    buildings
  };
};
