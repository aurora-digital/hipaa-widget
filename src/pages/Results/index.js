import React from "react";
import Typography from "root/components/Typography";
import { useSelector } from "react-redux";
import filter from "lodash/filter";
import resultsData from "root/shared/resultsData";
import map from "lodash/map";
import Rule from "root/components/Rule";

import styles from "./index.module.css";

function Results() {
  const answers = useSelector(state => state.answers);

  const displayResult = () => {
    const yesAnswer = filter(answers, answer => {
      return answer === "yes";
    });

    if (yesAnswer.length === 0) {
      return (
        <div className={styles.result}>
          <Typography variant="body">
            You&apos;ve not covered any of the HIPAA compliance requirments.
          </Typography>
        </div>
      );
    }

    if (yesAnswer.length === 10) {
      return (
        <div className={styles.result}>
          <Typography variant="body">
            Congratulations
            <span role="img" aria-label="party emoji">
              🎉
            </span>
            You&apos;ve covered all HIPAA compliance requirments.
          </Typography>
        </div>
      );
    }

    return (
      <div className={styles.result}>
        {yesAnswer.length > 5 ? (
          <Typography variant="body">
            Congratulations
            <span role="img" aria-label="party emoji">
              🎉
            </span>
          </Typography>
        ) : null}
        <Typography variant="body">
          {`You've covered ${yesAnswer.length} of the 10 HIPAA compliance requirments.`}
        </Typography>
      </div>
    );
  };

  const displayRules = () => {
    return (
      <div className={styles.rules}>
        <Typography variant="body">
          All HIPAA compliance requirments
          <span role="img" aria-label="point down emoji">
            👇
          </span>
        </Typography>
        {map(resultsData, ({ title, description }, index) => {
          return (
            <div className={styles.rule} key={index}>
              <Rule
                checked={answers[index] === "yes"}
                title={title}
                description={description}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <Typography variant="h3" color="white" weight="bold">
          Results
        </Typography>
      </div>

      {displayResult()}
      {displayRules()}
      <div className={styles.footer}>
        <div className={styles.container}>
          <Typography color="baby-blue">
            This is not a legal advice about HIPAA compliance.
          </Typography>
          <Typography color="baby-blue">
            Questions about HIPAA compliance? any suggestions? Contact us to
            <span role="img" aria-label="point right" className={styles.emoji}>
              👉
            </span>
            <a href="mailto:contact@auroradigital.co">
              contact@auroradigital.co
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Results;
