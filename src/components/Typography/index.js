import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.css";

function getTextComponent(variant) {
  switch (variant) {
    case "body":
      return "p";
    case "small-body":
      return "small";
    default:
      return variant;
  }
}

function Typography({
  children,
  variant,
  fontFamily,
  color,
  weight,
  className
}) {
  const classes = classNames(className, {
    [styles[variant]]: true,
    [styles[fontFamily]]: true,
    [styles[color]]: true,
    [styles[weight]]: true
  });
  const TextComponent = getTextComponent(variant);

  return <TextComponent className={classes}>{children}</TextComponent>;
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "body", "small-body"]),
  fontFamily: PropTypes.oneOf(["visuelt"]),
  color: PropTypes.oneOf([
    "oxford-blue",
    "white",
    "klein-blue",
    "baby-blue",
    "alice-blue"
  ]),
  weight: PropTypes.oneOf(["regular", "medium", "bold"]),
  className: PropTypes.string
};

Typography.defaultProps = {
  variant: "small-body",
  fontFamily: "visuelt",
  color: "white",
  weight: "regular",
  className: ""
};

export default Typography;
