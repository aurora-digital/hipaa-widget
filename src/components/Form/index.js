import React from "react";

import Button from "../Button";
import LeftArrow from "../Icons/LeftArrow";
import RightArrow from "../Icons/RightArrow";

import styles from "./index.module.css";

function Form() {
  return (
    <section className={styles.root}>
      <Button>Start</Button>
      <Button arrow>
        <LeftArrow />
      </Button>
      <Button arrow>
        <RightArrow />
      </Button>
    </section>
  );
}

export default Form;
