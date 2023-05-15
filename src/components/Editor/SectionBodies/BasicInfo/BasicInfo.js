import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./BasicInfo.module.css";

const BasicInfo = () => {
  return (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Akshay Matre"
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg. Frontend developer"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your github profile link"
        />
      </div>
      <div className={styles.row}>
        <InputControl label="Email" placeholder="Enter your email" />
        <InputControl
          label="Enter phone"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
};

export default BasicInfo;
