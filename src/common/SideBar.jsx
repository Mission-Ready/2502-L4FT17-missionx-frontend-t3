import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import { useState } from "react";

export default function SideBar() {
  const [open, setOpen] = useState(true)

  return (
    <div className={`${styles.sideBar} ${open ? styles.smallSideBar : ""}`}>
      <div className={styles.top}>
        <div className={styles.pictureBorder}>
          <img
            className={styles.profilePicture}
            src="images/teachers/JasminaSalvador.png"
            alt="teacher"
          />
        </div>

        <Link to="/progressTracker" className={styles.navLink}>
          <img
            src="/src/assets/TeacherDashboard/progressTracker.png"
            alt="progress-tracker"
          />
          <p>PROGRESS TRACKER</p>
        </Link>
        <Link to="/studentProfile" className={styles.navLink}>
          <img
            src="/src/assets/TeacherDashboard/studentProfiles.png"
            alt="student-profile"
          />
          <p>STUDENT PROFILE</p>
        </Link>
        <Link to="/helpRequest" className={styles.navLink}>
          <img
            src="/src/assets/TeacherDashboard/helpRequests.png"
            alt="help-request"
          />
          <p>HELP REQUEST</p>
        </Link>
        <Link to="/projectSubmission" className={styles.navLink}>
          <img
            src="/src/assets/TeacherDashboard/projectSubmissions.png"
            alt="project-submissions"
          />
          <p>PROJECT SUBMISSION</p>
        </Link>
        <Link to="/studentProjectLibrary" className={styles.navLink}>
          <img
            src="/src/assets/TeacherDashboard/projectLibrary.png"
            alt="project-library"
          />
          <p>PROJECT LIBRARY</p>
        </Link>
      </div>

      <div onClick={()=>setOpen(!open)} className={styles.arrowBox}>
        <img src="/src/assets/arrowLeft.png" alt="arrow" />
      </div>

      <div className={styles.footer}>
        <Link to="/teacherProfileViewer" className={styles.footerElements}>
          <img src="/src/assets/profile.png" alt="profile" />
          <p>Profile</p>
        </Link>
        <Link to="/" className={styles.footerElements}>
          <img src="/src/assets/settings.png" alt="settings" />
          <p>Settings</p>
        </Link>
        <Link to="/" className={styles.footerElements}>
          <img src="/src/assets/logout.png" alt="logout" />
          <p>Log Out</p>
        </Link>
      </div>
    </div>
  );
}
