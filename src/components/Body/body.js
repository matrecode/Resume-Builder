import React, { useEffect, useState } from 'react'
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
            sectionTitle:sections.basicInfo,
            detail:{}
        },

        [sections.workExp]:{
            id:sections.workExp,
            sectionTitle:sections.workExp,
            details:[]
        },

        [sections.projects]:{
            id:sections.projects,
            sectionTitle:sections.projects,
            details:[]
        },
        [sections.education]:{
            id:sections.education,
            sectionTitle:sections.education,
            details:[]
        },

        [sections.achievements]:{
            id:sections.achievements,
            sectionTitle:sections.achievements,
            detail:""
        },
        [sections.summary]:{
            id:sections.summary,
            sectionTitle:sections.summary,
            detail:""
        },

        [sections.other]:{
            id:sections.other,
            sectionTitle:sections.other,
            detail:""
        },

    })

    useEffect(()=>{
        console.log(cvInformation);
    },[cvInformation]);
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <h2>Let's <span>Start</span> to Create</h2>
        </div>
        <div className={styles.toolbar}>
            <div className={styles.colors}>
                {
                colors.map((item,index) => 
                
                <span key ={item + index} style={{backgroundColor:item}} className={styles.color}/>)
                }
            </div>
            <button className={styles.downloadButton}>Download <Download/></button>
        </div>
        <div className={styles.main}>
            <Editor sections={sections} information = {cvInformation} setCvInformation={setCvInformation}/>
        </div>
       

    </div>
  )
}

export default Body