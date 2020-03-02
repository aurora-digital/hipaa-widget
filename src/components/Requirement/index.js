import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Typography from "root/components/Typography";
import DownArrow from "root/components/Icons/DownArrow";
import UpArrow from "root/components/Icons/UpArrow";
import Check from "root/components/Icons/Check";

import styles from "./index.module.css";

function Requirement({ title, description, checked }) {
  const [isOpen, openDescription] = useState(false);

  const handleOpenDescription = () => {
    openDescription(!isOpen);
  };

  return (
    <div className={styles.root}>
      <button
        className={styles.button}
        type="button"
        onClick={handleOpenDescription}
      >
        <div className={styles.title}>
          <Typography color="oxford-blue" weight="bold" variant="small-body">
            {title}
          </Typography>
          {checked ? <Check /> : null}
        </div>
        <div>{isOpen ? <UpArrow /> : <DownArrow />}</div>
      </button>
      <div className={styles.line} />
      <motion.div
        initial={{ height: "0px", marginBottom: "0px" }}
        exit={{ height: "0px", marginBottom: "0px" }}
        animate={
          isOpen
            ? { height: "auto", marginBottom: "32px" }
            : { height: "0px", marginBottom: "0px" }
        }
        transition={{ duration: 0.1 }}
        className={styles.description}
      >
        <Typography color="oxford-blue" variant="small-body">
          {description}
        </Typography>
      </motion.div>
    </div>
  );
}

Requirement.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  checked: PropTypes.bool
};

Requirement.defaultProps = {
  checked: false
};

export default Requirement;
