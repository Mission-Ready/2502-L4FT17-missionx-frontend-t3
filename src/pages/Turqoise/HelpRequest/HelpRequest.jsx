import React from 'react'
/* import TestNav from '../../../common/TestNav' */
import styles from "./Helprequest.module.css"

export default function HelpRequest() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <p className={styles.helpRequest}>HELP REQUESTS</p>
          <div className={styles.markBtn}>
            <p>📫 REPLY</p>
            <button>✔️ MARK AS READ</button>
          </div>
            <ul className={styles.listOfStudents}>
              <li className={styles.box}>
                <img className={styles.img} src="public\images\students\AidenAndrews.png" alt="" /> AIDEN needs help with his project.
              </li>
              <li className={styles.box}>
                <img className={styles.img} src="public\images\students\RawiriFletcher.png" alt="" /> RAWIRI needs help with his project.
              </li>
              <li className={styles.box}>
                <img className={styles.img} src="public\images\students\NeveahMachenry.png" alt="" /> NEVEAH needs help with her project.
              </li>
              <li className={styles.box}>
                <img className={styles.img} src="public\images\students\TokioHan.png" alt="" /> TOKIO needs help with her project.
              </li>
            </ul> 
        { /* <TestNav></TestNav> */ }
          
      </div>
    </div>
  )
}
