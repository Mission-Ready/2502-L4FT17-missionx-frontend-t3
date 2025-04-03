import styles from "./StudentTracker.module.css";

export default function StudentTracker({ student }) {
  return (
    <div>
      <div className={styles.StudentTracker}>
        <div className={styles.NameAndProgress}>
          <p className={styles.StudentName}>{student.toUpperCase()}</p>
          <p className={styles.ProjectCompleted}>/15 Projects Completed</p>
        </div>
        <div className={styles.Circles}>
          <span className={styles.Dot}>1</span>
          <span className={styles.Dot}>2</span>
          <span className={styles.Dot}>3</span>
          <span className={styles.Dot}>4</span>
          <span className={styles.Dot}>5</span>
          <span className={styles.Dot}>6</span>
          <span className={styles.Dot}>7</span>
          <span className={styles.Dot}>8</span>
          <span className={styles.Dot}>9</span>
          <span className={styles.Dot}>10</span>
          <span className={styles.Dot}>11</span>
          <span className={styles.Dot}>12</span>
          <span className={styles.Dot}>13</span>
          <span className={styles.Dot}>14</span>
          <span className={styles.Dot}>15</span>
        </div>
      </div>
    </div>
  );
}
