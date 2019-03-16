import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import shortid from "shortid";

import { toggleFilter, clearFilter } from "../actions/ui";
import { StyledFilter } from "../styles";
import useCities from "../effects/useCities";
import useCountries from "../effects/useCountries";

const Filter = ({ dispatch, locations, locality, ui }) => (
  <>
    {locations.length ? (
      <StyledFilter>
        <div className="title">
          <p>{locality.toUpperCase()}</p>
          <button onClick={clearFilter({ dispatch, locality })}>Clear</button>
        </div>
        <ul>
          {locations.map(location => (
            <li
              key={shortid.generate()}
              onClick={toggleFilter({
                dispatch,
                name: location,
                locality
              })}
            >
              <div>{location}</div>
              {ui[locality].includes(location) ? (
                <FontAwesomeIcon icon="check" />
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </StyledFilter>
    ) : (
      ""
    )}
  </>
);

export default props => (
  <>
    <Filter {...useCountries()} />
    <Filter {...useCities()} />
  </>
);
