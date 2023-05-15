import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./Others.module.css";
const Others = () => {
  return (
    <div className={styles.detail}>
      <InputControl label="Other" placeholder="Enter something" />
    </div>
  );
};

export default Others;
