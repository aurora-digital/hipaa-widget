import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

function Card({ children }) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
