import React from 'react'
import styles from "./HelpRequest.module.css"
import Header from '../../../common/Header';
// import SideBar from '../../../common/SideBar';
import Footer from '../../../common/components/Footer';
import { useState } from 'react';

export default function HelpRequest() {
  
  
  const [students, setStudents] = useState([
    { id: 1, name: 'Aiden', img: 'AidenAndrews.png', needsHelp: true, checked: false },
    { id: 2, name: 'Rawiri', img: 'RawiriFletcher.png', needsHelp: true, checked: false },
    { id: 3, name: 'Neveah', img: 'NeveahMachenry.png', needsHelp: true, checked: false },
    { id: 4, name: 'Javier', img: 'JavierFuego.png', needsHelp: true, checked: false },
    { id: 5, name: 'Tokio', img: 'TokioHan.png', needsHelp: true, checked: false },
  ]);

  function handleCheckboxChange(id) {
    setStudents(students.map(student =>
      student.id === id ? { ...student, checked: !student.checked } : student
    ));
  }

  function handleMarkAsRead() {
    setStudents(students.filter(student => !student.checked));
  }

  return (
    <section>
      <Header />
      
      <section className={styles.sideBar}>
        {/* <SideBar></SideBar> */}

        <section className={styles.outerContainer}>
          
          <div className={styles.innerContainer}>
            <p className={styles.helpRequest}>HELP REQUESTS</p>
              <div className={styles.headBtn}>
                <p>📫 REPLY</p>
                <button className={styles.markBtn} onClick={handleMarkAsRead}>✔️ MARK AS READ</button>
              </div>
              <ul className={styles.listOfStudents}>
                {students.map(student => (
                  <div key={student.id} className={styles.checkBox}>
                    <input 
                      type="checkbox" 
                      checked={student.checked} 
                      onChange={() => handleCheckboxChange(student.id)} 
                    />
                    <li className={styles.box}>
                      <img className={styles.img} src={`\\public\\images\\students\\${student.img}`} alt="" />
                      {student.name.toUpperCase()} needs help with {student.name === 'Neveah' || student.name === 'Tokio' ? 'her' : 'his'} project.
                      <span className={styles.spanDate}>TUE 28 April 2020 <p>10:43 AM</p></span>
                    </li>
                  </div>
                ))}
              </ul>         
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
}





