import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./Education.module.css";

const Education = (props) => {
  const values = props.eduValues;
  const onChange = props.onChange;
  return (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. BSc"
          value={values.title}
          name="title"
          onChange={onChange}
        />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your college/school"
        value={values.clgname}
        name="clgname"
        onChange={onChange}
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          value={values.startdate}
          name="startdate"
          onChange={onChange}
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={values.enddate}
          name="enddate"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Education;
