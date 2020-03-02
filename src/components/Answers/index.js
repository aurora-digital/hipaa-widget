import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { submitAnswer } from "root/redux/actions";

import Button from "../Button";

import styles from "./index.module.css";

function Answers({ options, answer }) {
  const dispatch = useDispatch();

  function renderOption(option) {
    function onClick() {
      dispatch(submitAnswer(option.value));
    }

    return (
      <Button
        key={option.value}
        onClick={onClick}
        active={answer === option.value}
        size="medium"
      >
        {option.label}
      </Button>
    );
  }

  return <div className={styles.root}>{options.map(renderOption)}</div>;
}

Answers.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  answer: PropTypes.string
};

Answers.defaultProps = {
  answer: null
};

export default Answers;
