import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./BasicInfo.module.css";

const BasicInfo = (props) => {
  const values = props.basicValues;
  // recieve on change prop from Editor component
  const onChange = props.onChange;

  return (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Akshay Matre"
          name="name"
          value={values.name}
          onChange={onChange}
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg. Frontend developer"
          name="title"
          value={values.title}
          onChange={onChange}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          name="linkedin"
          placeholder="Enter your linkedin profile link"
          value={values.linkedin}
          onChange={onChange}
        />
        <InputControl
          label="Github Link"
          name="github"
          placeholder="Enter your github profile link"
          value={values.github}
          onChange={onChange}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          placeholder="Enter your email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
        <InputControl
          label="Enter phone"
          name="phone"
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default BasicInfo;
