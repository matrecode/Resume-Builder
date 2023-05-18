import React from "react";
import styles from "./Achievement.module.css"
import InputControl from "../../../InputControl/InputControl";

const Achievement = (props) => {
  const values = props.achiValues
  return (
    
      <div className={styles.detail}>
        <div className={styles.column}>
          <label>List your achievements</label>
          <InputControl
            placeholder="Line 1"
            value={values.line1}
          />
          <InputControl
            placeholder="Line 2"
            value={values.line2}
          />
          <InputControl
            placeholder="Line 3"
            value={values.line3}
          />
    
        </div>
      </div>
  );
};

export default Achievement;
