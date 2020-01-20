import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { prevQuestion, nextQuestion } from "root/redux/actions";

import Typography from "root/components/Typography";

import Button from "../Button";
import LeftArrow from "../Icons/LeftArrow";
import RightArrow from "../Icons/RightArrow";

import styles from "./index.module.css";

function Footer() {
  const current = useSelector(state => state.current);
  const total = useSelector(state => state.total);
  const dispatch = useDispatch();

  function onLeftClick() {
    if (current > 1) dispatch(prevQuestion());
  }

  function onRightClick() {
    if (current < total) dispatch(nextQuestion());
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
