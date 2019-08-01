import React, { Component } from "react";

import styles from "./index.module.css";

class Powered extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1 className={styles.title}>Powered by</h1>
        <div className={styles.image}>Aurora Digital (insert logo later)</div>
      </div>
    );
  }
}

export default Powered;
