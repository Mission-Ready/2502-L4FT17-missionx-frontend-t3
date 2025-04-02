import React from "react";
import sendPhoto from "/src/assets/StudentDashboard/sendPhoto.png";
import callTeacher from "/src/assets/StudentDashboard/callTeacher.png";
import makeProjectScreenshot from "/src/assets/StudentDashboard/makeProject-screenshot.png";
import submitProjectPhoto from "/src/assets/StudentDashboard/submitProject-Photo.png";
import styles from "./SubmitProject.module.css";

const SubmitProject = () => {
  
  return (
   
    <div className={styles.mainContainer}>
      
      <div className={styles.midContainer}>
        
        <div className={styles.innerContainer}>
          <img src={makeProjectScreenshot} alt="Project screenshot" /> 
          <h1>Submit project photo</h1>
          <p>
            After completing your project, take a screenshot of your project and
            upload it here.
          </p>
          <button className={styles.submProBtn}>
            <img src={sendPhoto} alt="Send Photo" />
            <p>Send Photo</p>
          </button>
        </div>
        <div className={styles.innerContainer}>
          <img src={submitProjectPhoto} alt="Photos of the project I am submitting" />
          <h1>Show your teacher</h1>
          <p className={styles.callTeacher}>
            If your teacher is in the same room as you, click the button below
            to <br/>
             let them know you are done.
          </p>
          <button className={styles.submProjBtn}>
            <img src={callTeacher} alt="Call Teacher" />
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default SubmitProject;

