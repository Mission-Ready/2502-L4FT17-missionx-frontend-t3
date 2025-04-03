import styles from "./ProgressTracker.module.css";
import StudentTracker from "./components/StudentTracker";
import students from "../../../common/data/student";

export default function ProgressTracker() {
  return (
    <>
      <div className={styles.Screen}>
        <div className={styles.InnerScreen}>
          <div className={styles.Text}>
            <p>BEGINNER COURSE</p>
            <p>EXPORT AS SPREADSHEET</p>
          </div>
          {students.map((student, index) => {
            return <StudentTracker student={student.name} />;
          })}
        </div>
      </div>
    </>
  );
}
