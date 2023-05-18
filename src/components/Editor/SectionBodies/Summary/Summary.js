import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./Summary.module.css";
const Summary = (props) => {
  const values = props.sumValues
  return (
    <div className={styles.detail}>
      <InputControl label="Summary/Objectives" placeholder="Enter summary and objectives" value={values.summary}/>
    </div>
  );
};

export default Summary;