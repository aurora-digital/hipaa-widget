import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const Button = ({ handleClick, children, arrow }) => {
  return (
    <button className={styles.root} onClick={handleClick} type="button">
      <div className={arrow ? styles.arrow : styles.content}>{children}</div>
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  arrow: PropTypes.bool
};

Button.defaultProps = {
  handleClick: null,
  arrow: false
};

export default Button;
