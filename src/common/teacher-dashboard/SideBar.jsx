import { Link, NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";
import { useState } from "react";

export default function SideBar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`${styles.sideBar} ${!open ? styles.smallSideBar : ""}`}>
      <div className={styles.top}>
        <div className={styles.pictureBorder}>
          <img
            className={styles.profilePicture}
            src="/images/teachers/JasminaSalvador.png"
            alt="teacher"
          />
        </div>

        {/* Progress Tracker */}
        <NavLink
          to="progressTracker"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLinkActive} ${styles.navLink}`
              : styles.navLink
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={
                  isActive
                    ? "/src/assets/TeacherDashboard/progressTrackerSelected.png"
                    : "/src/assets/TeacherDashboard/progressTracker.png"
                }
                alt="progress-tracker"
              />

              <p>PROGRESS TRACKER</p>
            </>
          )}
        </NavLink>

        {/* Student Profile */}
        <NavLink
          to="studentProfiles"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLinkActive} ${styles.navLink}`
              : styles.navLink
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={
                  isActive
                    ? "/src/assets/TeacherDashboard/studentProfilesSelected.png"
                    : "/src/assets/TeacherDashboard/studentProfiles.png"
                }
                alt="student-profiles"
              />

              <p>STUDENT PROFILE</p>
            </>
          )}
        </NavLink>

        {/* Help Request */}
        <NavLink
          to="helpRequest"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLinkActive} ${styles.navLink}`
              : styles.navLink
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={
                  isActive
                    ? "/src/assets/TeacherDashboard/helpRequestsSelected.png"
                    : "/src/assets/TeacherDashboard/helpRequests.png"
                }
                alt="help-request"
              />

              <p>HELP REQUEST</p>
            </>
          )}
        </NavLink>

        {/* Project Submission */}
        <NavLink
          to="projectSubmission"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLinkActive} ${styles.navLink}`
              : styles.navLink
          }
        >
           {({ isActive }) => (
            <>
              <img
                src={
                  isActive
                    ? "/src/assets/TeacherDashboard/projectSubmissionsSelected.png"
                    : "/src/assets/TeacherDashboard/projectSubmissions.png"
                }
                alt="project-submission"
              />

              <p>PROJECT SUBMISSION</p>
            </>
           )}
        </NavLink>

        {/* Project Library */}
        <NavLink
          to="studentProjectLibrary"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLinkActive} ${styles.navLink}`
              : styles.navLink
          }
        >
           {({ isActive }) => (
            <>
              <img
                src={
                  isActive
                    ? "/src/assets/TeacherDashboard/projectLibrarySelected.png"
                    : "/src/assets/TeacherDashboard/projectLibrary.png"
                }
                alt="project-library"
              />

              <p>PROJECT LIBRARY</p>
            </>
           )}
        </NavLink>
      </div>

      <div onClick={() => setOpen(!open)} className={styles.arrowBox}>
        <img src="/src/assets/arrowLeft.png" alt="arrow" />
      </div>

      <div className={styles.footer}>
        <Link to="/teacherProfileViewer" className={styles.footerElements}>
          <img src="/src/assets/profile.png" alt="profile" />
          <p>Profile</p>
        </Link>
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
