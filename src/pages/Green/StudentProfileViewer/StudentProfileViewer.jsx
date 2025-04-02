import styles from "./StudentProfileViewer.module.css"
import RawiriFletcher from "../../../../public/images/students/RawiriFletcher.png"
import KerrysFooter from "../components/KerrysFooter"
import ShaziasNavbar from "../components/ShaziasNavbar"
import { Link } from 'react-router-dom';

function StudentProfileViewer() {
  return (
    
    // Background Grey Color Open Tag//
    
    <div className={styles.studentProfileViewerBackground}> 
    <ShaziasNavbar></ShaziasNavbar>
    <div className={styles.outerBox}>
    {/* Small Box */}
      <section className={styles.profileBox}>
      
        <div>

         {/* Profile Image */}
          <figure className={styles.profileImageBox}>
            <img className={styles.profileImage} src={RawiriFletcher} alt="Student: Rawiri Fletcher" />
          </figure>
          
          <div className={styles.profileBoxButtons}>
             {/* Buttons */}
            <button>EDIT PROFILE</button> <br /> <br />
            <button>CHANGE PHOTO</button>
          </div>

        </div>
        
      </section>

    {/* Big Box */}
      <section className={styles.profileInfoBox}>
        <div className={styles.profileInfoDiv}>

          <div className={styles.profileName}>
            <h1>Rawiri Fletcher</h1>
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
                <h3>Teacher</h3>
              </div>

              <div>
                <h3>Jasmina Salvador</h3>
              </div>             
          </div>
          
          <div className={styles.profileSchool}>
              <div>
                <h3>Course</h3>
              </div>

              <div>
                <h3>Beginner</h3>
              </div>             
          </div>
          
          <div className={styles.profileSchool}>
              <div>
                <h3>Date of Birth</h3>
              </div>

              <div>
                <h3>25 June 2010</h3>
              </div>             
          </div>
          
          <div className={styles.profileSchool}>
              <div>
                <h3>Contact No</h3>
              </div>

              <div>
                <h3>022 524 63 99</h3>
              </div>             
          </div>
          
          <div className={styles.profileSchool}>
              <div>
                <h3>Email Address</h3>
              </div>

              <div>
                <h3>fletchy.r@gmail.com</h3>
              </div>             
          </div>

          <div className={styles.profileContact}></div>
          <div className={styles.profileEmail}></div>
          
        </div>

      </section>
      </div>
      <div className={styles.backToProjectsButtonBox}>
        <Link to="/projectLibrary" className={styles.linkProjectLibrary}>
        <button className={styles.backToProjectsButton}>BACK TO PROJECTS</button> 
        </Link>
      </div>
    
    
      <KerrysFooter></KerrysFooter>
    </div>

    
    //Background Grey Color Close Tag //
  )
}


export default StudentProfileViewer