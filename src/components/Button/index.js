import React from "react";
import PropTypes from "prop-types";

import Typography from "root/components/Typography";

import styles from "./index.module.css";

const Button = ({ onClick, children, arrow, element }) => {
  const Element = element;
  const InnerElement = arrow ? "div" : Typography;

  return (
    <Element className={styles.root} onClick={onClick} type="button">
      <InnerElement className={arrow ? styles.arrow : styles.content}>
        {children}
      </InnerElement>
    </Element>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  arrow: PropTypes.bool,
  element: PropTypes.string
};

Button.defaultProps = {
  onClick: null,
  arrow: false,
  element: "button"
};

export default Button;
