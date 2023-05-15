import React from "react";
import styles from "./Achievement.module.css"
import InputControl from "../../../InputControl/InputControl";

const Achievement = () => {
  return (
    
      <div className={styles.detail}>
        <div className={styles.column}>
          <label>List your achievements</label>
          <InputControl
            placeholder="Line 1"
          />
          <InputControl
            placeholder="Line 2"
          />
          <InputControl
            placeholder="Line 3"
          />
          <InputControl
            placeholder="Line 4"
          />
        </div>
      </div>
  );
};

export default Achievement;
