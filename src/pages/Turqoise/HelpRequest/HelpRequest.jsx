import styles from "./HelpRequest.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HelpRequest() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4000/api/request_page");
        const result = await response.json();
        setStudents(result.data);
      } catch (error) {
        console.error("errorrrrrrrr", error);
      }
    }
    fetchData();
  }, []);
  function handleCheckboxChange(id) {
    setStudents(
      students.map((student) =>
        student.request_id === id
          ? { ...student, done: !student.done }
          : student
      )
    );
  }
  function handleMarkAsRead() {
    setStudents(students.filter((student) => !student.done));
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
                className={styles.checking}
                type="checkbox"
                style={{
                  width: "20px",
                  height: "20px",
                  margin: "5px 0 50px 0",
                }}
                checked={student.done}
                onChange={() => handleCheckboxChange(student.request_id)}
              />
              <li className={styles.box}>
                <img
                  className={styles.img}
                  src={`${student.profile_pic}`}
                  alt=""
                />
                <div className={styles.dateTimeContainer}>
                  <div className={styles.text}>
                    {student.name.split(" ")[0].toUpperCase()} needs help with{" "}
                    {student.gender === "Female" ? "her" : "his"} project.
                  </div>
                  <div className={styles.dateTime}>
                    <span className={styles.spanDate}>{student.date_created}</span>
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
