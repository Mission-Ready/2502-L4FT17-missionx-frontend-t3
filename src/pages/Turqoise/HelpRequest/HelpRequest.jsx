import styles from "./HelpRequest.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../../../common/data/classes";

export default function HelpRequest() {
  const [students, setStudents] = useState(classes);

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
                style={{
                  width: "20px",
                  height: "20px",
                  margin: "5px 1px 50px 1px",
                }}
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
                  <div className={styles.text}>
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
