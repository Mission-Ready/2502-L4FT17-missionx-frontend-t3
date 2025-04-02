import { Outlet, Link } from "react-router-dom";
import BrownSideBar from "../../common/BrownSideBar";
import styles from "./StudentDashboard.module.css";
import BrownHeader from "../../common/BrownHeader";
import Footer from "../../common/components/Footer";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function StudentDashboard() {
  
  const projectNumbers = [];

  for (let i = 1; i <= 15; i++) {
    projectNumbers.push(i); 
  }
  
  const location = useLocation();
  const [activeProject, setActiveProject] = useState(null);

  const handleClick = (number) => {
    setActiveProject(number);
  };

  return (

    <div className="StudentDashboard">
      <header>
        <BrownHeader />
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
                  onClick={() => handleClick(number)}
                >
                  {activeProject === number ? (
                    <span>{number}</span>
                  ) : (
                    <span className={styles.smallCircle}></span>
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
          <Outlet />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}




