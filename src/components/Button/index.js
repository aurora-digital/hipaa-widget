import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Typography from "root/components/Typography";

import styles from "./index.module.css";

const Button = ({ onClick, children, arrow, element, active, emoji }) => {
  const Element = element;
  const InnerElement = arrow ? "div" : Typography;
  const rootStyles = classNames(styles.root, {
    [styles.active]: active
  });

  return (
    <Element className={rootStyles} onClick={onClick} type="button">
      <InnerElement className={arrow ? styles.arrow : styles.content}>
        {children}
      </InnerElement>
      {emoji && (
        <span role="img" aria-label="point right" className={styles.emoji}>
          👉
        </span>
      )}
    </Element>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  arrow: PropTypes.bool,
  element: PropTypes.string,
  active: PropTypes.bool,
  emoji: PropTypes.bool
};

Button.defaultProps = {
  onClick: null,
  arrow: false,
  element: "button",
  active: false,
  emoji: false
};

export default Button;
