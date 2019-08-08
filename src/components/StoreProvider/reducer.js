import questionsData from "root/shared/questionsData";

export const initialState = {
  total: questionsData.length,
  current: 1,
  answers: {}
};

export function reducer(state, action) {
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

    case "prev_question":
      return {
        ...state,
        current: state.current - 1
      };

    case "next_question":
      return {
        ...state,
        current: state.current + 1
      };

    default:
      throw new Error();
  }
}
