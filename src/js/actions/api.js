import axios from "axios";

import {
  FETCH_BUILDINGS,
  FETCH_USER,
  PENDING,
  FULFILLED,
  REJECTED
} from "../constants";

const fetchData = async ({ dispatch, type, request }) => {
  dispatch({ type: `${type}_${PENDING}` });
  try {
    const { data } = await request;
    dispatch({ type: `${type}_${FULFILLED}`, payload: data });
  } catch (error) {
    dispatch({ type: `${type}_${REJECTED}`, payload: error });
  }
};

export const fetchBuildings = dispatch =>
  fetchData({
    dispatch,
    type: FETCH_BUILDINGS,
    request: axios.get(
      `https://gist.githubusercontent.com/Lachlanbsmith/c5eb3b858ff810febd3dfbd5960d3fd8/raw/64a0ba3ee02d52536157d2dd01dddb1069175a8f/buildings`
    )
  });

export const fetchUser = dispatch =>
  fetchData({
    dispatch,
    type: FETCH_USER,
    request: axios.get(
      `https://gist.githubusercontent.com/Lachlanbsmith/858629f93f628c62c4e29a3bb1d99bff/raw/bc403f2f39fbd3d41e48ff893f24d0545907ece0/login`
    )
  });
