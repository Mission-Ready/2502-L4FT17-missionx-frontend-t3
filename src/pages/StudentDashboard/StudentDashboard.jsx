// export default function StudentDashboard(){
//   return <p>Student Dashboard</p>
// }

import { Outlet } from "react-router-dom";
import BrownSideBar from "../../common/BrownSideBar";
import styles from "./StudentDashboard.module.css";
import BrownHeader from "../../common/BrownHeader"; // imported Header
import Footer from "../../common/components/Footer"; // imported old Footer 

export default function StudentDashboard() {
  return (
    <>
    <header>
    <BrownHeader /> 
    </header>   
    <div className={styles.wholeScreen2}>      
      <BrownSideBar />
      <Outlet />    
    </div>
    <footer>
    <Footer /> 
    </footer>    
    </>
  );
}