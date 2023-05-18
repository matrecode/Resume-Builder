import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./Others.module.css";
const Others = (props) => {
  const values = props.otherValues
  return (
    <div className={styles.detail}>
      <InputControl label="Other" placeholder="Enter something" value={values.other}/>
    </div>
  );
};

export default Others;
