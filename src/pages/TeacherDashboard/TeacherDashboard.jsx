import { Outlet } from "react-router-dom";
import SideBar from "../../common/SideBar";
import styles from "./TeacherDashboard.module.css"

export default function TeacherDashboard() {
  return (
    <div className= {styles.wholeScreen}>
      <SideBar></SideBar>
      <Outlet />
    </div>
  );
}
