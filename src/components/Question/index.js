import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";
import Typography from "../Typography";

function Question({ title, description }) {
  return (
    <div className={styles.root}>
      <div className={styles.question}>
        <Typography variant="body">{title}</Typography>
        <Typography className={styles.description}>{description}</Typography>
      </div>
    </div>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired
};

export default Question;
