import styles from "./ProgressTracker.module.css";
import StudentTracker from "./components/StudentTracker";
import students from "../../../common/data/student";
import { style } from "framer-motion/client";

export default function ProgressTracker() {
  return (
    <>
      <div className={styles.Screen}>
        <div className={styles.InnerScreen}>
          <div className={styles.Text}>
            <p id={styles.leftText}>BEGINNER COURSE</p>
            <p id={styles.rightText}>EXPORT AS SPREADSHEET</p>
          </div>
          <div className={styles.Cards}>
            {students.map((student, index) => {
              return <StudentTracker student={student.name} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
