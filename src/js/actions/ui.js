import { TOGGLE_FILTER, SHOW_MORE, CLEAR_FILTER } from "../constants";

export const toggleFilter = ({ dispatch, name, locality }) => () => {
  dispatch({
    type: TOGGLE_FILTER,
    payload: { name, locality }
  });
};

export const clearFilter = ({ dispatch, locality }) => () => {
  dispatch({
    type: CLEAR_FILTER,
    payload: { locality }
  });
};

export const showMore = ({ dispatch, url, description }) => () => {
  dispatch({
    type: SHOW_MORE,
    payload: { url, description }
  });
};
