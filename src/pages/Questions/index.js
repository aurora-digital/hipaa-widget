import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import useStore from "root/shared/useStore";
import questionsData from "root/shared/questionsData";
import Question from "root/components/Question";
import Answers from "root/components/Answers";
import Footer from "root/components/Footer";

import styles from "./index.module.css";

function Questions() {
  const {
    state: { current }
  } = useStore();

  return (
    <section className={styles.root}>
      <AnimatePresence initial={false}>
        <motion.div
          className={styles.questionWrapper}
          key={current}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.25, type: "spring" }}
        >
          <div className={styles.question}>
            <Question {...questionsData[current - 1]} />

            <Answers options={questionsData[current - 1].options} />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.footer}>
        <Footer />
      </div>
    </section>
  );
}

Questions.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired
};

export default Questions;
