import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./Projects.module.css";

const Projects = (props) => {
  const values = props.projectValues
  return (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title eg. Chat app" value={values.title}/>
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
        value={values.overview}
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
          value={values.link}
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
          value={values.github}
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl placeholder="Line 1" value={values.line1}/>
        <InputControl placeholder="Line 2" value={values.line2}/>
        <InputControl placeholder="Line 3" value={values.line3}/>
        <InputControl placeholder="Line 4" value={values.line4}/>
      </div>
    </div>
  );
};

export default Projects;
