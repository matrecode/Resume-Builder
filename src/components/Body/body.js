import React, { useState } from 'react'
import styles from "./Body.module.css"
import {Download} from "react-feather"
import Editor from '../Editor/Editor'
const Body = () => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936" ]

    // Object for form sections
    const sections = {
        basicInfo : "Basic Info",
        workExp : "Work Experience",
        projects: "Projects",
        education : "Education",
        achievements: "Achievements",
        summary: "Summary",
        other : "Other",
    }

    // Takes form data and store all information in the state and retrieve and update the state according to the data
    const [cvInformation, setCvInformation] = useState({
        [sections.basicInfo]:{
            id:sections.basicInfo,
            title:sections.basicInfo,
            detail:{}
        },

        [sections.workExp]:{
            id:sections.workExp,
            title:sections.workExp,
            details:[{Exp:"Hello"}]
        },

        [sections.projects]:{
            id:sections.projects,
            title:sections.projects,
            details:[]
        },
        [sections.education]:{
            id:sections.education,
            title:sections.education,
            details:[]
        },

        [sections.achievements]:{
            id:sections.achievements,
            title:sections.achievements,
            points:[]
        },
        [sections.summary]:{
            id:sections.summary,
            title:sections.summary,
            details:""
        },

        [sections.other]:{
            id:sections.other,
            title:sections.other,
            details:""
        },

    })
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <h2>Let's <span>Start</span> to Create</h2>
        </div>
        <div className={styles.toolbar}>
            <div className={styles.colors}>
                {
                colors.map(item => 
                
                <span key = {item} style={{backgroundColor:item}} className={styles.color}/>)
                }
            </div>
            <button className={styles.downloadButton}>Download <Download/></button>
        </div>
        <div className={styles.main}>
            <Editor sections={sections} information = {cvInformation}/>
        </div>
       

    </div>
  )
}

export default Body