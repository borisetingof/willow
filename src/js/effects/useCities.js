import { useEffect, useContext, useState } from "react";

import { Context } from "../context";
import { CITY, COUNTRY } from "../constants";
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
      ...new Set(
        buildings.reduce(
          (memo, { address }) => [
            ...memo,
            ui[COUNTRY].length === 0 || ui[COUNTRY].includes(address[COUNTRY])
              ? address[CITY]
              : null
          ],
          []
        )
      )
    ]);
  }, [buildings, ui[COUNTRY]]);

  return {
    dispatch,
    locations,
    ui,
    locality: CITY
  };
};
