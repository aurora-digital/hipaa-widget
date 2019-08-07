import React, { useReducer } from "react";
import PropTypes from "prop-types";

import { reducer, initialState } from "./reducer";
import StoreContext from "./StoreContext";

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-underscore-dangle
    window.__STORE__ = { state, dispatch };
  }

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default StoreProvider;
