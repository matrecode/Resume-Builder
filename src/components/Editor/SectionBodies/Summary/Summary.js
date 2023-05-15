import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./Summary.module.css";
const Summary = () => {
  return (
    <div className={styles.detail}>
      <InputControl label="Summary/Objectives" placeholder="Enter summary and objectives" />
    </div>
  );
};

export default Summary;