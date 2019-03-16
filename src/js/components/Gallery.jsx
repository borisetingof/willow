import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import shortid from "shortid";

import { StyledGallery } from "../styles";
import BuildingCard from "./BuildingCard";
import useGallery from "../effects/useGallery";

export default props => {
  const { dispatch, gallery } = useGallery();

  return gallery.length ? (
    <StyledGallery>
      <div className="search">
        <FontAwesomeIcon icon="search" />
        <input placeholder="Search property" />
      </div>
      <div className="gallery">
        <ul>
          {gallery.map(props => (
            <BuildingCard
              {...{ ...props, dispatch, key: shortid.generate() }}
            />
          ))}
        </ul>
      </div>
    </StyledGallery>
  ) : (
    ""
  );
};
