import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./Summary.module.css";
const Summary = (props) => {
  const values = props.sumValues
  const onChange = props.onChange;
  return (
    <div className={styles.detail}>
      <InputControl label="Summary/Objectives" placeholder="Enter summary and objectives" name="decription" value={values.description} onChange={onChange}/>
    </div>
  );
};

export default Summary;