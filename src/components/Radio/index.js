import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.css";

function Radio({ checked, label, onChange, value, name }) {
  const className = classNames({
    [styles.root]: true,
    [styles.checked]: checked
  });
  const internalOnChange = () => onChange(value);

  return (
    <label htmlFor={name + value} className={className}>
      <input
        id={name + value}
        name={name}
        onChange={internalOnChange}
        type="radio"
        checked={checked}
        className={styles.input}
      />
      {label}
    </label>
  );
}

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Radio;
