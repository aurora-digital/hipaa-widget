import React, { useContext } from "react";
import _ from "lodash";
import classNames from "classnames";

import StoreContext from "../StoreProvider/StoreContext";

import styles from "./index.module.css";

function QuestionTimeline() {
  const {
    state: { total, current },
    dispatch
  } = useContext(StoreContext);

  function renderItem(num) {
    const className = classNames({
      [styles.item]: num !== current,
      [styles.itemSelected]: num === current
    });

    function handleClick() {
      dispatch({ type: "select_question", payload: num });
    }

    return (
      <label htmlFor={`timeline${num}`} key={num} className={className}>
        <input
          id={`timeline${num}`}
          className={styles.input}
          type="radio"
          name="timeline"
          value={num}
          onClick={handleClick}
        />
      </label>
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.line} />
      {_.range(1, total + 1).map(renderItem)}
    </div>
  );
}

export default QuestionTimeline;
