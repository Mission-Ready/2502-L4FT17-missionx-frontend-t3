import styles from "./Linkbtn.module.css";
import { Link } from "react-router-dom";

export default function Linkbtn() {
  return (
    <section className={styles.linkbtn}>
      <div>
        <Link to="/ProjectLibrary">
          <button className={styles.backToProjectsButton}>
            BACK TO PROJECT
          </button>
        </Link>
      </div>
      <div>
        <Link to="/teacher-dashboard">
          <button className={styles.backToDashboardButton}>
            BACK TO DASHBOARD
          </button>
        </Link>
      </div>
    </section>
  );
}
