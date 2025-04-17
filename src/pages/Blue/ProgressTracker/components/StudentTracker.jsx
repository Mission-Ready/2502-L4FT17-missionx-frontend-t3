import styles from "./StudentTracker.module.css";
import { useEffect, useState } from "react";

export default function StudentTracker({ key, name, student_id }) {
  const [completion, setCompletion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/completions")
      .then((response) => response.json())
      .then((result) => {
        setCompletion(result.data);
      })
      .catch((err) => console.error("error", err));
  }, []);

  const completedCount = completion.filter(
    (c) => c.student_id === student_id && c.date_completed
  ).length;

  return (
    <div>
      <div className={styles.StudentTracker}>
        <div className={styles.NameAndProgress}>
          <p className={styles.StudentName}>{name.toUpperCase()}</p>
          <p className={styles.ProjectCompleted}>
            {completedCount}/15 Projects Completed
          </p>
        </div>
        <div className={styles.Circles}>
          {[...Array(15)].map((a, index) => {
            const projectNumber = index + 1;
            const match = completion.filter((c) => 
              c.student_id === student_id &&
                c.project_id === projectNumber &&
                c.date_completed
            );
            return (
              <span
                key={projectNumber}
                className={`${styles.Dot} ${
                  match.length > 0 ? styles.Completed : ""
                }`}
              >
                {projectNumber}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
