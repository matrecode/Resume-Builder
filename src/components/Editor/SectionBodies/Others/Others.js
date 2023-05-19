import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./Others.module.css";
const Others = (props) => {
  const values = props.otherValues
  const onChange = props.onChange;
  return (
    <div className={styles.detail}>
      <InputControl label="Other" placeholder="Enter something" name="description" value={values.description} 
      onChange={onChange}/>
    </div>
  );
};

export default Others;
