import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import useStore from "root/shared/useStore";

import Button from "../Button";

import styles from "./index.module.css";

function Answers({ options }) {
  const { dispatch } = useStore();

  function renderOption(option) {
    function onClick() {
      dispatch({ type: "submit_answer", payload: option.value });
    }

    return (
      <Button key={option.value} onClick={onClick}>
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(Answers);
