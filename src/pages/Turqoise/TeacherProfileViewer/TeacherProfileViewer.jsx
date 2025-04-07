import styles from "./TeacherProfileViewer.module.css";
import JasminaSalvador from "../../../../public/images/teachers/JasminaSalvador.png";
import MoneHeader from "./components/MoneHeader";
import MoneFooter from "./components/MoneFooter";
import { Link } from "react-router-dom";

function teacherProfile() {
  return (
    <div className={styles.studentProfileViewerBackground}>
      <MoneHeader />
      <div className={styles.outerBox}>
        <section className={styles.profileBox}>
          <div>
            <figure className={styles.profileImageBox}>
              <img
                className={styles.profileImage}
                src={JasminaSalvador}
                alt="Teacher: Jasmina Salvador"
              />
            </figure>

            <div className={styles.profileBoxButtons}>
              <button>EDIT PROFILE</button> <br /> <br />
              <button>CHANGE PHOTO</button>
            </div>
          </div>
        </section>

        <section className={styles.profileInfoBox}>
          <div className={styles.profileInfoDiv}>
            <div className={styles.profileName}>
              <h1>Jasmina Salvador</h1>
            </div>

            <div className={styles.profileSchool}>
              <div>
                <h3>School</h3>
              </div>

              <div>
                <h3>Homai School</h3>
              </div>
            </div>

            <div className={styles.profileSchool}>
              <div>
                <h3>Date of Birth</h3>
              </div>

              <div>
                <h3>25 June 1986</h3>
              </div>
            </div>

            <div className={styles.profileSchool}>
              <div>
                <h3>Contact No</h3>
              </div>

              <div>
                <h3>027 754 28 00</h3>
              </div>
            </div>

            <div className={styles.profileSchool}>
              <div>
                <h3>Email Address</h3>
              </div>

              <div>
                <h3>jsalvador@hotmail.edu</h3>
              </div>
            </div>

            <div className={styles.profileContact}></div>
            <div className={styles.profileEmail}></div>
          </div>
        </section>
      </div>
      <div className={styles.lastBox}>
        <div className={styles.backToProjectsButtonBox}>
          <Link to="/ProjectLibrary" className={styles.linkProjectLibrary}>
            <button className={styles.backToProjectsButton}>
              BACK TO PROJECT
            </button>
          </Link>
        </div>
        <div className={styles.backToDashboardButtonBox}>
          <Link to="/teacher-dashboard" className={styles.linkDashboardLibrary}>
            <button className={styles.backToDashboardButton}>
              BACK TO DASHBOARD
            </button>
          </Link>
        </div>
      </div>

      <MoneFooter />
    </div>
  );
}

export default teacherProfile;
