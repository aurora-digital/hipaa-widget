import React, { useContext } from "react";
import PropTypes from "prop-types";
import StoreContext from "../StoreProvider/StoreContext";
import RadioGroup from "../RadioGroup";
import Card from "../Card";

import styles from "./index.module.css";

function Question({ title, children, number }) {
  const {
    state: { answers },
    dispatch
  } = useContext(StoreContext);

  const onChange = value => {
    dispatch({ type: "submit_answer", payload: value });
  };

  return (
    <Card>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.explainer}>{children}</div>
        <RadioGroup
          name={`question${number}`}
          onChange={onChange}
          defaultValue={answers[number]}
        />
      </div>
    </Card>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  number: PropTypes.number.isRequired
};

export default Question;
