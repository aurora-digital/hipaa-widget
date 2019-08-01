import React from "react";

import AnimatedQuestions from "../AnimatedQuestions";
import QuestionTimeline from "../QuestionTimeline";
import QuestionContext from "../QuestionContext";
import Powered from "../Powered";

import styles from "./index.module.css";

function Form() {
  return (
    <section className={styles.root}>
      <div className={styles.powered}>
        <Powered />
      </div>
      <h1 className={styles.title}>
        Are you <span className={styles.titleHighlight}>HIPAA</span> compliant?
      </h1>
      <div className={styles.timeline}>
        <QuestionTimeline />
      </div>
      <div className={styles.content}>
        <div className={styles.context}>
          <QuestionContext category="Technical Requirements" />
        </div>
        <form className={styles.form}>
          <AnimatedQuestions />
        </form>
      </div>
    </section>
  );
}

export default Form;
