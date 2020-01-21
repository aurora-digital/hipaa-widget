import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import questionsData from "root/shared/questionsData";
import Question from "root/components/Question";
import Answers from "root/components/Answers";
import Footer from "root/components/Footer";

import styles from "./index.module.css";

function Questions() {
  const current = useSelector(state => state.current);
  const answers = useSelector(state => state.answers);

  return (
    <section className={styles.root}>
      <motion.div
        className={styles.gallery}
        initial={false}
        animate={{ x: `-${((current - 1) * 100) / questionsData.length}%` }}
        transition={{ duration: 0.8 }}
      >
        {questionsData.map((question, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={styles.questionWrapper} key={index}>
            <div className={styles.question}>
              <Question
                title={question.title}
                description={question.description}
              />

              <Answers options={question.options} answer={answers[index + 1]} />
            </div>
          </div>
        ))}
      </motion.div>

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
