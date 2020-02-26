import React, { useState } from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";
import DownArrow from "root/components/Icons/DownArrow";

import styles from "./index.module.css";

function Rule({ title, description, checked }) {
  const [opened, openDescription] = useState(false);

  const handleOpenDescription = () => {
    openDescription(!opened);
  };

  return (
    <div className={styles.root}>
      <button
        className={styles.title}
        type="button"
        onClick={handleOpenDescription}
      >
        <Typography weight="bold" variant="small-body">
          {title}
        </Typography>
        {checked ? (
          <span role="img" aria-label="check emoji">
            ✅
          </span>
        ) : null}
        <DownArrow />
      </button>
      {opened ? (
        <Typography variant="small-body" className={styles.description}>
          {description}
        </Typography>
      ) : null}
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
