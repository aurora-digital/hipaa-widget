import React from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import useStore from "root/shared/useStore";

import styles from "./index.module.css";

function QuestionContext({ category }) {
  const {
    state: { current, total }
  } = useStore();

  const [categoryFirstWord, ...categoryLastWords] = category.split(" ");
  const limitedCurrent = current > 10 ? 10 : current;

  return (
    <div className={styles.context}>
      <div className={styles.categoryFirstWord}>{categoryFirstWord}</div>
      <div className={styles.categoryLastWords}>
        {categoryLastWords.join(" ")}
      </div>
      <div className={styles.count}>
        <ReactCSSTransitionGroup
          transitionName={{
            enter: styles.currentEnter,
            enterActive: styles.currentEnterActive,
            leave: styles.currentLeave,
            leaveActive: styles.currentLeaveActive
          }}
          transitionEnterTimeout={150}
          transitionLeaveTimeout={150}
        >
          <span className={styles.current}>{limitedCurrent}</span>
        </ReactCSSTransitionGroup>
        <span className={styles.total}>/{total}</span>
      </div>
    </div>
  );
}

QuestionContext.propTypes = {
  category: PropTypes.string.isRequired
};

export default QuestionContext;
