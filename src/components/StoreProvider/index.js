import React, { useReducer } from "react";
import PropTypes from "prop-types";

import StoreContext from "./StoreContext";

const INITIAL_STATE = {
  total: 10,
  current: 1,
  answers: {}
};

function reducer(state, action) {
  switch (action.type) {
    case "submit_answer":
      return {
        ...state,
        current: state.current + 1,
        answers: {
          ...state.answers,
          [state.current]: action.payload
        }
      };
    case "select_question":
      return {
        ...state,
        current: action.payload
      };
    default:
      throw new Error();
  }
}

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

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
