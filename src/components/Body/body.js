import React from 'react'
import styles from "./Body.module.css"
import {Download} from "react-feather"
const Body = () => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936" ]
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
       

    </div>
  )
}

export default Body