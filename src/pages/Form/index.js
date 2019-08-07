import React from "react";

import Button from "root/components/Button";
import LeftArrow from "root/components/Icons/LeftArrow";
import RightArrow from "root/components/Icons/RightArrow";

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
