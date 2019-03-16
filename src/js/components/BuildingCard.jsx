import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import shortid from "shortid";

import { showMore } from "../actions/ui";
import { StyledCard } from "../styles";

export default ({
  imageUrl,
  address: { line1, line2, city, country },
  name,
  availableProducts,
  dispatch
}) => (
  <StyledCard>
    <p>
      {city}, {country}
    </p>
    <h3>
      {line1} {line2}
    </h3>
    <div>
      <img src={imageUrl} alt={name} />
      <div className="actions">
        <div>
          <button
            onClick={showMore({
              dispatch,
              url: imageUrl,
              description: "View on Map"
            })}
          >
            <div>View on Map</div>
            <FontAwesomeIcon icon="map-marker-alt" />
          </button>
          <ul>
            {availableProducts.map(product => (
              <li key={shortid.generate()}>
                <button
                  onClick={showMore({
                    dispatch,
                    url: imageUrl,
                    description: product.replace("Asset", "")
                  })}
                >
                  <div>{product.replace("Asset", "")}</div>
                  <FontAwesomeIcon icon="arrow-right" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </StyledCard>
);
