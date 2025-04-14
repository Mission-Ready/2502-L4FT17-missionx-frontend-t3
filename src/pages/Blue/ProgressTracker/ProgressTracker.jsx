import styles from "./ProgressTracker.module.css";
import StudentTracker from "./components/StudentTracker";
import students from "../../../common/data/student";
import { style } from "framer-motion/client";
import { useEffect, useState } from "react";

export default function ProgressTracker() {
  const [user, setUser] = useState([]);

  useEffect(() => {
      fetch("http://localhost:4000/api/student")
        .then((response) => response.json())
        .then((result) => {
          setUser(result.data);
          console.log(result.data)
        })
        .catch((err) => console.error("error", err));
    }, []);

  return (
    <>
      <div className={styles.Screen}>
        <div className={styles.InnerScreen}>
          <div className={styles.Text}>
            <p id={styles.leftText}>BEGINNER COURSE</p>
            <p id={styles.rightText}>EXPORT AS SPREADSHEET</p>
          </div>
          <div className={styles.Cards}>
            {user.map((student) => {
              return (
                <StudentTracker
                  key={student.student_id}
                  name={student.name}
                  student_id = {student.student_id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
