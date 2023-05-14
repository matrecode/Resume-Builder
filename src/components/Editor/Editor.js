import React, { useState } from "react";
import styles from "./Editor.module.css";
import InputControl from "../InputControl/InputControl";
const Editor = (props) => {
  const sections = props.sections;
  console.log(sections);

  const [activeSectionKeys, setActiveSectionKeys] = useState(Object.keys(sections)[0])


  const generateBody = () => {
    // Write switch cases for different bodies
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* ? chaining methods if the left portion is nullish then it will not proceed with map */}
        {Object.keys(sections)?.map((key) => (
          <div className={`${styles.section} ${activeSectionKeys === key ? styles.active : ""}`} key={key} onClick={()=> setActiveSectionKeys(key)}>{sections[key]}</div>
        ))}
      </div>
      <div className={styles.body}>
        <InputControl label = "Title"/>
      </div>
    </div>
  );
};

export default Editor;
