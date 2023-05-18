import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./BasicInfo.module.css";

const BasicInfo = (props) => {
  const values = props.basicValues
  return (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Akshay Matre"
          value = {values.name}
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg. Frontend developer"
          value = {values.title}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          value = {values.linkedin}
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your github profile link"
          value = {values.github}
        />
      </div>
      <div className={styles.row}>
        <InputControl label="Email" placeholder="Enter your email"  value={values.email}/>
        <InputControl
          label="Enter phone"
          placeholder="Enter your phone number"
          value = {values.phone}
        />
      </div>
    </div>
  );
};

export default BasicInfo;
