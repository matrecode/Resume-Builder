import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1><span>Build</span> your resume in <span>FREE!</span></h1>
        </div>
        <button className={styles.staticButton}>
          Create and Build
        </button>
    </div>
  )
}

export default Header