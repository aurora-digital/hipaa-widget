import questionsData from "root/shared/questionsData";
import {
  SUBMIT_ANSWER,
  SELECT_QUESTION,
  NEXT_QUESTION,
  PREV_QUESTION
} from "./actionTypes";

const initialState = {
  total: questionsData.length,
  current: 1,
  answers: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_ANSWER:
      return {
        ...state,
        current: state.current + 1,
        answers: {
          ...state.answers,
          [state.current]: action.payload
        }
      };

    case SELECT_QUESTION:
      return {
        ...state,
        current: action.payload
      };

    case NEXT_QUESTION:
      return {
        ...state,
        current: state.current + 1
      };

    case PREV_QUESTION:
      return {
        ...state,
        current: state.current - 1
      };

    default:
      return state;
  }
}
