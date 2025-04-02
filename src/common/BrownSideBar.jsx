import { Link, NavLink } from "react-router-dom";
import styles from "./BrownSideBar.module.css";
import { useState } from "react";

export default function SideBar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`${styles.sideBar} ${open ? styles.smallSideBar : ""}`}>
      <div className={styles.top}>
        <div className={styles.pictureBorder}>
          <img
            className={styles.profilePicture}
            src="/images/students/RawiriFletcher.png"
            alt="student"
          />
        </div>

        <NavLink
          to="learningObjectives"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLinkActive} ${styles.navLink}`
              : styles.navLink
          }
        >
          <img
            src="/src/assets/StudentDashboard/learningObjectives.png"
            alt="learning-objectives"
          />
          <p>LEARNING OBJECTIVES</p>
        </NavLink>
        <NavLink
          to="instructions"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLinkActive} ${styles.navLink}`
              : styles.navLink
          }
        >
          <img
            src="/src/assets/StudentDashboard/instructions.png"
            alt="instructions"
          />
          <p>INSTRUCTIONS</p>
        </NavLink>
        <NavLink
          to="videotutotial"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLinkActive} ${styles.navLink}`
              : styles.navLink
          }
        >
          <img
            src="/src/assets/StudentDashboard/videoSelected.png"
            alt="video-Selected"
          />
          <p>VIDEO TUTORIAL</p>
        </NavLink>
        <NavLink
          to="makeprojects"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLinkActive} ${styles.navLink}`
              : styles.navLink
          }
        >
          <img
            src="/src/assets/StudentDashboard/makeProject.png"
            alt="make-project"
          />
          <p>MAKE PROJECT</p>
        </NavLink>
        <NavLink
          to="submitproject"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLinkActive} ${styles.navLink}`
              : styles.navLink
          }
        >
          <img
            src="/src/assets/StudentDashboard/submitProjectSelected.png"
            alt="submitproject"
          />
          <p>SUBMIT PROJECT</p>
        </NavLink>       

        <NavLink
          to="bonuschallenge"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLinkActive} ${styles.navLink}`
              : styles.navLink
          }
        >
          <img
            src="/src/assets/StudentDashboard/bonusChallenge.png"
            alt="bonuschallenge"
          />
          <p>BONUS CHALLENGE</p>
        </NavLink>

        <NavLink
          to="takethequiz"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLinkActive} ${styles.navLink}`
              : styles.navLink
          }
        >
          <img
            src="/src/assets/StudentDashboard/takeTheQuiz.png"
            alt="takethequiz"
          />
          <p>TAKE THE QUIZ</p>
        </NavLink>

      </div>

      <div onClick={() => setOpen(!open)} className={styles.arrowBox}>
        <img src="/src/assets/arrowLeft.png" alt="arrow" />
      </div>

      <div className={styles.footer}>
        <NavLink to="teacherProfileViewer" className={styles.footerElements}>
          <img src="/src/assets/profile.png" alt="profile" />
          <p>Profile</p>
        </NavLink>
        <NavLink to="settings" className={styles.footerElements}>
          <img src="/src/assets/settings.png" alt="settings" />
          <p>Settings</p>
        </NavLink>
        <Link to="/" className={styles.footerElements}>
          <img src="/src/assets/logout.png" alt="logout" />
          <p>Log Out</p>
        </Link>
      </div>
    </div>
  );
}
