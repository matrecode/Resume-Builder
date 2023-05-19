import React from 'react'
import InputControl from "../../../InputControl/InputControl";
import styles from "./WorkExperience.module.css"

const WorkExperience = (props) => {
  const values = props.expValues
  const onChange = props.onChange;
  return (
    <div className={styles.detail}>
    <div className={styles.column}>
      <InputControl
        label="Title"
        placeholder="Enter title e.g Backend developer"
        values = {values.title}
        name="title"
        onChange={onChange}
      />
      <InputControl
      label="Company Name"
        placeholder="Enter company name e.g. Google"
        values = {values.companyname}
        name="companyname"
        onChange={onChange}
      />
      <InputControl
      label="Certificate Link"
        placeholder="Enter certificate link"
        values = {values.certlink}
        name="certlink"
        onChange={onChange}
      />
      <InputControl
      label="Location"
        placeholder="Enter location e.g. Remote"
        values = {values.location}
        name="location"
        onChange={onChange}
      />

      <InputControl label="Start Date" type="date" placeholder="Enter start date pf work" values = {values.startdate} name="startdate" onChange={onChange}/>
      <InputControl label="End Date" type="date" placeholder="Enter end date pf work" values = {values.enddate} name="enddate" onChange={onChange}/>

    </div>
    <div className={styles.column}>
        <label>Enter Work Description</label>
        {/* <InputControl placeholder="Line1" values = {values.points ? values.points[0] : ""}/>
        <InputControl placeholder="Line2" values = {values.points ? values.points[1] : ""}/>
        <InputControl placeholder="Line3" values = {values.points ? values.points[2] : ""}/> */}
        <textarea placeholder="Enter a work description" name="description"  onChange={onChange} value={values.description} ></textarea>
    </div>
  </div>
  )
}

export default WorkExperience