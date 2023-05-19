import React from "react";
import InputControl from "../../../InputControl/InputControl";
import styles from "./Projects.module.css";

const Projects = (props) => {
  const values = props.projectValues;
  // recieve on change prop from Editor component
  const onChange = props.onChange;

  return (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Chat app"
          name="title"
          value={values.title}
          onChange={onChange}
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
        name="overview"
        value={values.overview}
        onChange={onChange}
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          name="deploylink"
          placeholder="Enter deployed link of project"
          value={values.deploylink}
          onChange={onChange}
        />
        <InputControl
          label="Github Link" 
          placeholder="Enter github link of project"
          name="github"
          value={values.github}
          onChange={onChange}
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        {/* <InputControl placeholder="Line 1" value={values.points ? values.points[0] : ""}/>
        <InputControl placeholder="Line 2" value={values.points ? values.points[1] : ""}/>
        <InputControl placeholder="Line 3" value={values.points ? values.points[2] : ""}/>
        <InputControl placeholder="Line 4" value={values.points ? values.points[3] : ""}/> */}
        <textarea
          placeholder="Enter a project description"
          name="description"
          onChange={onChange}
          value={values.description}
        ></textarea>
      </div>
    </div>
  );
};

export default Projects;
