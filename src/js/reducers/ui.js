import {
  TOGGLE_FILTER,
  CLEAR_FILTER,
  SHOW_MORE,
  CITY,
  COUNTRY
} from "../constants";

export const initialState = {
  [CITY]: [],
  [COUNTRY]: [],
  details: {
    url: null,
    description: null
  }
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        [payload.locality]: state[payload.locality].includes(payload.name)
          ? state[payload.locality].filter(f => f !== payload.name)
          : [...state[payload.locality], payload.name]
      };

    case CLEAR_FILTER:
      return {
        ...state,
        [payload.locality]: []
      };

    case SHOW_MORE:
      return {
        ...state,
        details: {
          url: payload.url,
          description: payload.description
        }
      };

    default:
      return { ...state };
  }
};

export default { initialState, reducer };
