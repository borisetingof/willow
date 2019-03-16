import { useContext, useEffect } from "react";

import { Context } from "../context";
import { fetchUser } from "../actions/api";

export default () => {
  const {
    state: {
      api: { user }
    },
    dispatch
  } = useContext(Context);

  useEffect(() => {
    fetchUser(dispatch);
  }, []);

  return {
    user
  };
};
