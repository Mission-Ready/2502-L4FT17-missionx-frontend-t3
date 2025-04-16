import { Outlet } from "react-router-dom";
import SideBar from "../../common/teacher-dashboard/SideBar";
import Header from "../../common/teacher-dashboard/Header";
import styles from "./TeacherDashboard.module.css";
import Footer from "../../common/Footer";



export default function TeacherDashboard() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className={styles.wholeScreen}>
        <SideBar></SideBar>
        <Outlet />
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
