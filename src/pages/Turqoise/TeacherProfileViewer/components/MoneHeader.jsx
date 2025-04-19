import styles from "./MoneHeader.module.css";
import star from "../../../../assets/Home/star.png";
import LevelUpWorksWhite from "../../../../assets/Navbar/LevelUpWorks-white.png";
// import JasminaSalvador from "../../../../../public/images/teachers/JasminaSalvador.png";
import MaoriFlag from "../../../../assets/Navbar/MaoriFlag.png";
import NZFlag from "../../../../assets/Navbar/NZFlag.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [teachers, setTeachers] = useState([]);
  const { Id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:4000/api/teacher/${Id}`);
        const result = await response.json();
        setTeachers(result.data);
      } catch (error) {
        console.error("errorrrrrrrr", error);
      }
    }
    fetchData();
  }, [Id]);

  return (
    <section className={styles.container}>
      {teachers.map(function (teacher) {
        return (
          <section key={teacher.teachers_id} className={styles.container1}>
            <div className={styles.star}>
              <img src={LevelUpWorksWhite} alt="LevelUpWorksWhite " />
            </div>

            <nav className={styles.mainNav}>
              <li>HOME</li>
              <li>PROJECTS</li>
              <li>TEACHERS</li>
            </nav>

            <div className={styles.languageAndLogin}>
              <nav className={styles.outerUserBox}>
                <h4 style={{ fontSize: "11px", padding: "3px" }}>
                  LANG
                  <img
                    style={{
                      top: "8px",
                      left: "1617px",
                      width: "24px",
                      height: "12px",
                    }}
                    src={MaoriFlag}
                    alt="Maori Flag"
                  />
                  <img
                    style={{
                      top: "8px",
                      left: "1617px",
                      width: "24px",
                      height: "12px",
                    }}
                    src={NZFlag}
                    alt="NZ Flag"
                  />
                </h4>
                <Link
                  to="/teacher-dashboard/helpRequest"
                  className={styles.linkStudentProfileViewer}
                >
                  <div className={styles.userBox}>
                    <img
                      className={styles.userImage}
                      src={teacher.profile_pic}
                      alt="image"
                    />
                    <h3>{teacher.name}</h3>
                  </div>
                </Link>
              </nav>
            </div>
          </section>
        );
      })}
    </section>
  );
}
export default Header;
