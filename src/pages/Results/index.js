import React from "react";
import Typography from "root/components/Typography";
import { useSelector } from "react-redux";
import filter from "lodash/filter";
import Button from "root/components/Button";
import Logo from "root/components/Logo";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

function Results() {
  const yesAnswers = () => {
    const answers = useSelector(state => state.answers);

    return filter(answers, answer => {
      return answer === "yes";
    });
  };

  const getTitle = () => {
    return yesAnswers().length < 5 ? (
      <div className={styles.result}>
        <Typography weight="bold" variant="h2">
          It could be better
        </Typography>
      </div>
    ) : (
      <div className={styles.result}>
        <Typography weight="bold" variant="h2">
          Well done
        </Typography>
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>{getTitle()}</div>
      <div className={styles.result}>
        <Typography variant="body">
          You&apos;ve covered <span>{`${yesAnswers().length} of the 8`}</span>{" "}
          HIPAA compliance requirements
        </Typography>
      </div>
      <Link className={styles.button} to="/compliance-requirements">
        <Button>Check all requirements</Button>
      </Link>

      <div className={styles.powered}>
        <Typography color="baby-blue">Powered by</Typography>
        <Logo />
      </div>
    </div>
  );
}

export default Results;
