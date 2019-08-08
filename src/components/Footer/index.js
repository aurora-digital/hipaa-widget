import React from "react";

import useStore from "root/shared/useStore";
import Typography from "root/components/Typography";

import styles from "./index.module.css";
import Button from "../Button";
import LeftArrow from "../Icons/LeftArrow";
import RightArrow from "../Icons/RightArrow";

function Footer() {
  const {
    state: { current, total },
    dispatch
  } = useStore();

  function onLeftClick() {
    if (current > 1) dispatch({ type: "prev_question" });
  }

  function onRightClick() {
    if (current < total) dispatch({ type: "next_question" });
  }

  return (
    <div className={styles.root}>
      <Typography>
        {current} of {total} answered
      </Typography>

      <div className={styles.arrows}>
        <Button arrow onClick={onLeftClick}>
          <LeftArrow />
        </Button>
        <Button arrow onClick={onRightClick}>
          <RightArrow />
        </Button>
      </div>
    </div>
  );
}

export default Footer;
