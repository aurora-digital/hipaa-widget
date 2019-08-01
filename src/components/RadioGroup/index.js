import React, { useState } from "react";
import PropTypes from "prop-types";
import Radio from "../Radio";

import styles from "./index.module.css";

function RadioGroup({ defaultValue, onChange, name }) {
  const [value, setValue] = useState(defaultValue);

  const internalOnChange = incomingValue => {
    setValue(incomingValue);

    onChange(incomingValue);
  };

  const options = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "Doesn't apply", value: "not_applicable" }
  ];

  return (
    <div className={styles.root}>
      {options.map(option => (
        <div key={option.value} className={styles.item}>
          <Radio
            onChange={internalOnChange}
            name={name}
            value={option.value}
            label={option.label}
            checked={option.value === value}
          />
        </div>
      ))}
    </div>
  );
}

RadioGroup.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

RadioGroup.defaultProps = {
  defaultValue: null
};

export default RadioGroup;
