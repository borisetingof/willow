import { useEffect, useContext, useState } from "react";

import { COUNTRY } from "../constants";
import { Context } from "../context";
import useBuildings from "./useBuildings";

export default () => {
  const {
    state: { ui },
    dispatch
  } = useContext(Context);
  const { buildings } = useBuildings();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations([
      ...new Set(buildings.map(({ address }) => address[COUNTRY]))
    ]);
  }, [buildings]);

  return {
    dispatch,
    locations,
    ui,
    locality: COUNTRY
  };
};
