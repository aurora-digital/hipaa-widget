import _ from "lodash";
import React, { useContext } from "react";
import useWindowDimensions from "root/shared/useWindowDimensions";
import Question from "../Question";
import StoreContext from "../StoreProvider/StoreContext";
import FinalCard from "../FinalCard";

import styles from "./index.module.css";

function AnimatedQuestions() {
  const {
    state: { current, total }
  } = useContext(StoreContext);
  const { width } = useWindowDimensions();
  const windowWidth = width * 0.9;
  const style = {
    transform: `translateX(-${(current - 1) * windowWidth}px)`
  };

  const questions = _.range(1, total + 1).map(number => {
    const inlineStyles = {
      transform: `translateX(${windowWidth * (number - 1)}px)`
    };

    return (
      <div key={number} className={styles.question} style={inlineStyles}>
        <Question
          title="DO YOU HAVE A UNIQUE USER IDENTIFICATION?"
          number={number}
        >
          This applies specifically to clearinghouses that are part of larger
          organizations. In that case, make sure the clearinghouse has policies
          that ensure its ePHI isn’t compromised by unauthorized members of the
          broader organization.
        </Question>
      </div>
    );
  });

  return (
    <div className={styles.root} style={style}>
      {questions.concat(
        <div
          className={styles.question}
          style={{ transform: `translateX(${windowWidth * total}px)` }}
          key="final"
        >
          <FinalCard />
        </div>
      )}
    </div>
  );
}

export default AnimatedQuestions;
