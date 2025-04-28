import {useState, useEffect} from 'react'
import styles from "./StudentProfileViewer.module.css"
import KerrysFooter from "../components/KerrysFooter"
import ShaziasNavbar from "../components/ShaziasNavbar"
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function StudentProfileViewer() {
  const [studentData, setStudentData] = useState([])
  const { studentId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/studentProfileViewer/${studentId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setStudentData(res.data);
      });
  }, [studentId]);

  return (
    
    // Background Grey Color Open Tag//
    
    <div className={styles.Background}> 
    <ShaziasNavbar></ShaziasNavbar>

    {studentData.map((student) => (<>
    <div key={student.student_id} className={styles.outerBox}>
      
    {/* ======== Left Container ======== */}
      <section className={styles.leftContainer}>
      
        <div>

         {/* Profile Image */}
          <figure className={styles.profileImageBox}>
            <img className={styles.profileImage} src={student.profile_pic} alt="Student: Rawiri Fletcher" />
          </figure>
          
          <div className={styles.profileBoxButtons}>
             {/* Buttons */}
            <button>EDIT PROFILE</button> <br /> <br />
            <button>CHANGE PHOTO</button>
          </div>

        </div>
        
      </section>

    {/* ========= Right Container ======== */}
      <section className={styles.rightContainer}>
        <div className={styles.profileInfoDiv}>

          <div className={styles.profileName}><h1>{student.name}</h1></div>

          <div className={styles.profileSchool}><div><h3>School</h3></div>
          
          <div><h3>{student.school}</h3></div>             
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
                <h3>{student.course}</h3>
              </div>             
          </div>
          
          <div className={styles.profileSchool}>
              <div>
                <h3>Date of Birth</h3>
              </div>

              <div>
                <h3>{new Date(student.date_of_birth).toLocaleDateString()}</h3>
              </div>             
          </div>
          
          <div className={styles.profileSchool}>
              <div>
                <h3>Contact No</h3>
              </div>

              <div>
                <h3>{student.contact_number}</h3>
              </div>             
          </div>
          
          <div className={styles.profileSchool}>
              <div>
                <h3>Email Address</h3>
              </div>

              <div>
                <h3>{student.email}</h3>
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
      </>
    ))}
    
      <KerrysFooter></KerrysFooter>
    </div>
    
    
    //Background Grey Color Close Tag //
  )
}


export default StudentProfileViewer