import { FETCH_BUILDINGS, FETCH_USER, FULFILLED } from "../constants";

export const initialState = {
  buildings: [],
  user: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case `${FETCH_BUILDINGS}_${FULFILLED}`:
      return { ...state, buildings: action.payload };

    case `${FETCH_USER}_${FULFILLED}`:
      return { ...state, user: action.payload };

    default:
      return { ...state };
  }
};

export default { initialState, reducer };
