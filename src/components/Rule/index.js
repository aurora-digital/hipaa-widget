import React from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";

import styles from "./index.module.css";

function Rule({ title, description, checked }) {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <Typography weight="bold" variant="small-body">
          {title}
        </Typography>
        {checked ? (
          <span role="img" aria-label="check emoji">
            ✅
          </span>
        ) : null}
      </div>
      <Typography variant="small-body" className={styles.description}>
        {description}
      </Typography>
    </div>
  );
}

Rule.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  checked: PropTypes.bool
};

Rule.defaultProps = {
  checked: false
};

export default Rule;
