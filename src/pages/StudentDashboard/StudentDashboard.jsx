import { Outlet, Link } from "react-router-dom";
import BrownSideBar from "../../common/BrownSideBar";
import styles from "./StudentDashboard.module.css";
import BrownHeader from "../../common/BrownHeader";
import Footer from "../../common/Footer";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
// import studentProjectsData from "../../../pages/Brown/ProjectSubmission/studentProjectsData.js"; 

export default function StudentDashboard() {
  
  const projectNumbers = [];
  // const studentId = studentProjectsData.studentID; 
  const studentId = 23; // student IDを設定（必要に応じて変更）


  for (let i = 1; i <= 15; i++) {
    projectNumbers.push(i); 
  }
  
  const location = useLocation();

  const [activeProject, setActiveProject] = useState(1);

  const handleClick = (number) => {
    setActiveProject(number);
  };

  return (

    <div className="StudentDashboard">
      <header>
        <BrownHeader setActiveProject={setActiveProject} />
        <div className={styles.headerContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>PROJECT</h1>
            <h2 className={styles.subtitle}>introduction</h2>
          </div>
          <div className={styles.projectCircles}>
            {projectNumbers.map((number) => (
              <div key={`project-${number}`}>
                <Link
                  // to={`/student-dashboard/project/${number}`}
                  className={`${styles.circle} ${location.pathname === `/student-dashboard/project/${number}` ? styles.active : ''}`}
                  aria-label={`Project ${number}`}
                  onClick={() => handleClick(number)} // Update Project on Click
                >
                  {activeProject === number ? (
                    <span>{number}</span> // Show active project number
                  ) : (
                    <span className={styles.smallCircle}></span> // Show small circle when inactive
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </header>
      <div style={{ display: "flex" }}>
        <BrownSideBar />
        <div className={styles.wholeScreen2} style={{ flex: 1 }}>
          {/* View project details */}
          {/* {activeProject && (
            <ProjectDetails projectId={activeProject} studentId={studentId} />
          )} */}
          <Outlet context={{ activeProject, studentId }} /> {/* Passing activeProject and studentID to an Outlet */}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}




