import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Typography from "root/components/Typography";

import styles from "./index.module.css";

const Button = ({ onClick, children, arrow, element, active, size }) => {
  const Element = element;
  const rootStyles = classNames(styles.root, {
    [styles.active]: active,
    [styles[size]]: size !== "auto"
  });

  return (
    <Element className={rootStyles} onClick={onClick} type="button">
      {arrow ? children : <Typography>{children}</Typography>}
    </Element>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  arrow: PropTypes.bool,
  element: PropTypes.string,
  active: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "auto"])
};

Button.defaultProps = {
  onClick: null,
  arrow: false,
  element: "button",
  active: false,
  size: "auto"
};

export default Button;
