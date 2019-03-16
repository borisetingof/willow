import { useContext, useEffect, useState } from "react";

import { Context } from "../context";
import { CITY, COUNTRY } from "../constants";
import useBuildings from "./useBuildings";

export default () => {
  const {
    state: { ui },
    dispatch
  } = useContext(Context);
  const { buildings } = useBuildings();
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const byCountry = buildings.filter(
      ({ address }) =>
        ui[COUNTRY].length === 0 || ui[COUNTRY].includes(address[COUNTRY])
    );

    const cityFilterIsClear = !byCountry.some(({ address }) =>
      ui[CITY].includes(address[CITY])
    );

    setGallery(
      byCountry.filter(
        ({ address }) => cityFilterIsClear || ui[CITY].includes(address[CITY])
      )
    );
  }, [buildings, ui[COUNTRY], ui[CITY]]);

  return {
    gallery,
    dispatch
  };
};
