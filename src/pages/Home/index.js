import React from "react";
import { Link } from "react-router-dom";

import Typography from "root/components/Typography";
import Button from "root/components/Button";
import Logo from "root/components/Logo";

import styles from "./index.module.css";

function Home() {
  return (
    <div className={styles.root}>
      <Typography className={styles.title} variant="h2" color="white" weight="bold">
        Are you HIPAA compliant?
      </Typography>

      <Link className={styles.start} to="/questions">
        <Button element="div">Start</Button>
      </Link>

      <div className={styles.powered}>
        <Typography color="baby-blue">Powered by</Typography>
        <Logo />
      </div>
    </div>
  );
}

export default Home;
