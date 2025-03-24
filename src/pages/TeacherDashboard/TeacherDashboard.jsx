import { Outlet } from "react-router-dom";
import SideBar from "../../common/SideBar";
import styles from "./TeacherDashboard.module.css";
import Header from "../../common/Header"; // imported Header
import Footer from "../../common/components/Footer"; // imported old Footer 

export default function TeacherDashboard() {
  return (
    <>
    <Header /> {/* Added Header*/}
    <div className={styles.wholeScreen}>      
      <SideBar />
      <Outlet />    
    </div>
    <Footer /> {/* Added Footer */}
    </>
  );
}

