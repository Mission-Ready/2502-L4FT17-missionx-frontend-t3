import React from 'react'
import styles from "./Helprequest.module.css"
/* import TestNav from '../../../common/TestNav' */
import Header from '../../../common/Header';
import SideBar from '../../../common/SideBar';
import Footer from '../../../common/components/Footer';

export default function HelpRequest() {
  return (
    <section>
      <Header />
      
      <section className={styles.sideBar}>
        <SideBar />

        <section className={styles.outerContainer}>
          
          <div className={styles.innerContainer}>
            <p className={styles.helpRequest}>HELP REQUESTS</p>
              <div className={styles.headBtn}>
                <p>📫 REPLY</p>
                <button className={styles.markBtn}>✔️ MARK AS READ</button>
              </div>
              <ul className={styles.listOfStudents}>
                <li className={styles.box}><button className={styles.studentsBtn}></button>
                  <img className={styles.img} src="public\images\students\AidenAndrews.png" alt="" /> AIDEN needs help with his project.
                </li>
                <li className={styles.box}><button className={styles.studentsBtn}></button>
                  <img className={styles.img} src="public\images\students\RawiriFletcher.png" alt="" /> RAWIRI needs help with his project.
                </li>
                <li className={styles.box}><button className={styles.studentsBtn}></button>
                  <img className={styles.img} src="public\images\students\NeveahMachenry.png" alt="" /> NEVEAH needs help with her project.
                </li>
                <li className={styles.box}><button className={styles.studentsBtn}></button>
                  <img className={styles.img} src="public\images\students\TokioHan.png" alt="" /> TOKIO needs help with her project.
                </li>
              </ul>         
          </div>
        </section>
      </section>
      <Footer></Footer>
    </section>
  );
}
