import { FETCH_BUILDINGS, FETCH_USER, FULFILLED } from "../constants";

const initialState = {
  buildings: [],
  user: null
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case `${FETCH_BUILDINGS}_${FULFILLED}`:
      return { ...state, buildings: payload };

    case `${FETCH_USER}_${FULFILLED}`:
      return { ...state, user: payload };

    default:
      return { ...state };
  }
};

export default { initialState, reducer };
