import React from 'react'
import InputControl from "../../../InputControl/InputControl";
import styles from "./WorkExperience.module.css"

const WorkExperience = () => {
  return (
    <div className={styles.detail}>
    <div className={styles.column}>
      <InputControl
        label="Title"
        placeholder="Enter title e.g Backend developer"
      />
      <InputControl
      label="Company Name"
        placeholder="Enter company name e.g. Google"
      />
      <InputControl
      label="Certificate Link"
        placeholder="Enter certificate link"
      />
      <InputControl
      label="Location"
        placeholder="Enter location e.g. Remote"
      />

      <InputControl label="Start Date" type="date" placeholder="Enter start date pf work"/>
      <InputControl label="End Date" type="date" placeholder="Enter end date pf work"/>

    </div>
    <div className={styles.column}>
        <label>Enter Work Description</label>
        <InputControl placeholder="Line1"/>
        <InputControl placeholder="Line2"/>
        <InputControl placeholder="Line3"/>
    </div>
  </div>
  )
}

export default WorkExperience