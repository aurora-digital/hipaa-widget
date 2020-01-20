import {
  SUBMIT_ANSWER,
  SELECT_QUESTION,
  NEXT_QUESTION,
  PREV_QUESTION
} from "./actionTypes";

export function submitAnswer(answer) {
  return { type: SUBMIT_ANSWER, payload: answer };
}

export function selectQuestion(questionNumber) {
  return { type: SELECT_QUESTION, payload: questionNumber };
}

export function nextQuestion() {
  return { type: NEXT_QUESTION };
}

export function prevQuestion() {
  return { type: PREV_QUESTION };
}
