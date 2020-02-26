import React from "react";
import Typography from "root/components/Typography";
import { useSelector } from "react-redux";
import filter from "lodash/filter";
import Button from "root/components/Button";
import Logo from "root/components/Logo";

import styles from "./index.module.css";

function Results() {
  const answers = useSelector(state => state.answers);
  const yesAnswer = filter(answers, answer => {
    return answer === "yes";
  });

  const getTitle = () => {
    return yesAnswer.length < 5 ? (
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

      <Typography variant="body">
        You&apos;ve covered <span>{`${yesAnswer.length} of the 8`}</span> HIPAA
        compliance requirments
      </Typography>
      <div className={styles.button}>
        <Button>Check all requirements</Button>
      </div>

      <div className={styles.powered}>
        <Typography color="baby-blue">Powered by</Typography>
        <Logo />
      </div>
    </div>
  );
}

export default Results;
