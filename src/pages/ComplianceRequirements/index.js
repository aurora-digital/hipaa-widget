import React from "react";
import { useSelector } from "react-redux";
import filter from "lodash/filter";
import map from "lodash/map";
import Typography from "root/components/Typography";
import Requirement from "root/components/Requirement";
import requirements from "root/shared/requirementsData";

import styles from "./index.module.css";

function ComplianceRequirements() {
  const answers = useSelector(state => state.answers);

  const yesAnswers = () => {
    return filter(answers, answer => {
      return answer === "yes";
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.title}>
          <Typography color="klein-blue" variant="h3">
            HIPAA compliance requirements
          </Typography>
        </div>
        <div className={styles.result}>
          <Typography color="oxford-blue" variant="body">
            You&apos;ve covered <span>{`${yesAnswers().length} of the 8`}</span>{" "}
            HIPAA compliance requirements
          </Typography>
        </div>
        <div className={styles.requirements}>
          {map(requirements, ({ title, description }, index) => {
            return (
              <div className={styles.rule} key={index}>
                <Requirement
                  checked={answers[index + 1] === "yes"}
                  title={title}
                  description={description}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.footer}>
          <Typography color="oxford-blue" variant="small-body">
            This is not a legal advice about HIPAA compliance.
          </Typography>
          <Typography color="oxford-blue" variant="small-body">
            Questions about HIPAA compliance? Contact us to
            <a href="mailto:contact@auroradigital.co">
              contact@auroradigital.co
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ComplianceRequirements;
