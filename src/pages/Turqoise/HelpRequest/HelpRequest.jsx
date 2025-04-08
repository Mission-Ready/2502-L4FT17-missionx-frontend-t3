import styles from "./HelpRequest.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HelpRequest() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Aiden",
      img: "AidenAndrews.png",
      checked: false,
      gender: "male",
      date: "TUE 28 April 2020",
      time: "10:43 AM",
    },
    {
      id: 2,
      name: "Rawiri",
      img: "RawiriFletcher.png",
      checked: false,
      gender: "male",
      date: "TUE 28 April 2020",
      time: "9:52 AM",
    },
    {
      id: 3,
      name: "Neveah",
      img: "NeveahMachenry.png",
      checked: false,
      gender: "female",
      date: "MON 27 April 2020",
      time: " 4:59 PM",
    },
    {
      id: 4,
      name: "Javier",
      img: "JavierFuego.png",
      checked: false,
      gender: "male",
      date: "MON 27 April 2020",
      time: " 3:00 PM",
    },
    {
      id: 5,
      name: "Tokio",
      img: "TokioHan.png",
      checked: false,
      gender: "female",
      date: "MON 27 April 2020",
      time: " 11:23 AM",
    },
  ]);

  // map the class #id with arrow method to track #id if checked or not
  function handleCheckboxChange(id) {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, checked: !student.checked } : student
      )
    );
  }

  function handleMarkAsRead() {
    setStudents(students.filter((student) => !student.checked));
  }

  return (
    <section className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <p className={styles.helpRequest}>HELP REQUESTS</p>
        <div className={styles.headBtn}>
          <p>📫 REPLY</p>
          <button className={styles.markBtn} onClick={handleMarkAsRead}>
            ✔️ MARK AS READ
          </button>
        </div>
        <ul className={styles.listOfStudents}>
          {students.map((student) => (
            <section key={student.id} className={styles.middle}>
              <input
                type="checkbox"
                style={{ width: "20px", height: "20px" }}
                checked={student.checked}
                onChange={() => handleCheckboxChange(student.id)}
              />
              <li className={styles.box}>
                <img
                  className={styles.img}
                  src={`/public/images/students/${student.img}`}
                  alt=""
                />
                <div className={styles.dateTimeContainer}>
                  <div>
                    {student.name.toUpperCase()} needs help with{" "}
                    {student.gender === "female" ? "her" : "his"} project.
                  </div>
                  <div className={styles.dateTime}>
                    <span className={styles.spanDate}>{student.date}</span>
                    <span className={styles.spanTime}>{student.time}</span>
                  </div>
                </div>
              </li>
            </section>
          ))}
        </ul>
      </div>
    </section>
  );
}
