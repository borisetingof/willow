import api from "./api";
import ui from "./ui";

const combineReducers = reducers => ({
  initialState: Object.entries(reducers).reduce(
    (memo, [key, { initialState }]) => ({ ...memo, [key]: initialState }),
    {}
  ),
  reducer: (state, action) =>
    Object.entries(reducers).reduce(
      (memo, [key, { reducer }]) => ({
        ...memo,
        [key]: reducer(state[key], action)
      }),
      state
    )
});

export default combineReducers({ api, ui });
