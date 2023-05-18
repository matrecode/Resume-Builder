import React from 'react'
import InputControl from "../../../InputControl/InputControl";
import styles from "./WorkExperience.module.css"

const WorkExperience = (props) => {
  const values = props.expValues
  return (
    <div className={styles.detail}>
    <div className={styles.column}>
      <InputControl
        label="Title"
        placeholder="Enter title e.g Backend developer"
        values = {values.title}
      />
      <InputControl
      label="Company Name"
        placeholder="Enter company name e.g. Google"
        values = {values.companyName}
      />
      <InputControl
      label="Certificate Link"
        placeholder="Enter certificate link"
        values = {values.certLink}
      />
      <InputControl
      label="Location"
        placeholder="Enter location e.g. Remote"
        values = {values.location}
      />

      <InputControl label="Start Date" type="date" placeholder="Enter start date pf work" values = {values.startDate}/>
      <InputControl label="End Date" type="date" placeholder="Enter end date pf work" values = {values.endDate}/>

    </div>
    <div className={styles.column}>
        <label>Enter Work Description</label>
        <InputControl placeholder="Line1" values = {values.line1}/>
        <InputControl placeholder="Line2" values = {values.line2}/>
        <InputControl placeholder="Line3" values = {values.line3}/>
    </div>
  </div>
  )
}

export default WorkExperience