import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./Summary.module.css";
const Summary = (props) => {
  const values = props.summaryValues
  const onChange = props.onChange;
  return (
    <div className={styles.detail}>
      <InputControl label="Objectives" placeholder="Enter your objectives" name="description" value={values.description} 
      onChange={onChange}/>
    </div>
  );
};

export default Summary;