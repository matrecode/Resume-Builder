import React from "react";
import styles from "./Achievement.module.css";
// import InputControl from "../../../InputControl/InputControl";

const Achievement = (props) => {
  const values = props.achiValues;
  const onChange = props.onChange;
  return (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <textarea
          placeholder="Enter your Achievements"
          name="description"
          onChange={onChange}
          value={values.description}
        ></textarea>
      </div>
    </div>
  );
};

export default Achievement;
