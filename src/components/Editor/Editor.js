import React, { useState } from "react";
import styles from "./Editor.module.css";
// import InputControl from "../InputControl/InputControl";
import BasicInfo from "./SectionBodies/BasicInfo/BasicInfo";
import WorkExperience from "./SectionBodies/WorkExp/WorkExperience";
import Projects from "./SectionBodies/Projects/Projects";
import Education from "./SectionBodies/Education/Education";
import Achievement from "./SectionBodies/Achievements/Achievement";
import Summary from "./SectionBodies/Summary/Summary";
import Others from "./SectionBodies/Others/Others";
const Editor = (props) => {
  const sections = props.sections;
  // console.log(sections);

  const [activeSectionKeys, setActiveSectionKeys] = useState(
    Object.keys(sections)[0]
  );

  const generateBody = () => {
    // Write switch cases for different bodies
    switch (sections[activeSectionKeys]) {
      case sections.basicInfo:
        return <BasicInfo/>;
      case sections.workExp:
        return <WorkExperience/>;
      case sections.projects:
        return <Projects/>
      case sections.education:
        return <Education/>
      case sections.achievements:
        return <Achievement/>
      case sections.summary:
        return <Summary/>
      case sections.other:
        return <Others/>
      default:
        return null;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* ? chaining methods if the left portion is nullish then it will not proceed with map */}
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKeys === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKeys(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        {/* <InputControl label="Title" placeholder="Enter Sectioon Title" /> */}
        {generateBody()}
      </div>
    </div>
  );
};

export default Editor;
