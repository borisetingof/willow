import {
  TOGGLE_FILTER,
  CLEAR_FILTER,
  SHOW_MORE,
  CITY,
  COUNTRY
} from "../constants";

const initialState = {
  [CITY]: [],
  [COUNTRY]: [],
  details: {
    url: null,
    description: null
  }
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case TOGGLE_FILTER: {
      const { locality, name } = payload;

      return {
        ...state,
        [locality]: state[locality].includes(name)
          ? state[locality].filter(f => f !== name)
          : [...state[locality], name]
      };
    }
    case CLEAR_FILTER: {
      const { locality } = payload;

      return {
        ...state,
        [locality]: []
      };
    }

    case SHOW_MORE: {
      const { url, description } = payload;

      return {
        ...state,
        details: {
          url,
          description
        }
      };
    }

    default:
      return { ...state };
  }
};

export default { initialState, reducer };
