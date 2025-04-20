import React, { useState } from "react"; // Import React and useState hook
import sendPhoto from "/src/assets/StudentDashboard/sendPhoto.png"; // Import send photo icon
import callTeacher from "/src/assets/StudentDashboard/callTeacher.png"; // Import call teacher icon
import makeProjectScreenshot from "/src/assets/StudentDashboard/makeProject-screenshot.png"; // Import project screenshot image
import submitProjectPhoto from "/src/assets/StudentDashboard/submitProject-Photo.png"; // Import submit project photo image
import styles from "./SubmitProject.module.css"; // Import CSS module for styling
import studentProjectsData from "../../../pages/Brown/ProjectSubmission/studentProjectsData.js"; // Import project data

const SubmitProject = (props) => {
  const [activeCircle, setActiveCircle] = useState(null); // State for active circle
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State for selected photo
  const [submissionStatus, setSubmissionStatus] = useState(""); // State for submission status

  // Get project data based on activeProject
  const projectData = studentProjectsData.find(
    (project) => project.id === props.activeProject
  );

  // Handle circle click to toggle active state
  const handleCircleClick = (number) => {
    setActiveCircle(activeCircle === number ? null : number);
  };

  // Handle photo selection
  const handlePhotoChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setSelectedPhoto(file); // Save the selected file
    }
  };

  // Handle sending the photo to the backend
  const handleSendPhotoClick = async () => {
    if (!selectedPhoto) {
      alert("Please select a photo to send."); // Alert if no photo is selected
      return;
    }

    const formData = new FormData(); // Create FormData object
    formData.append("projectId", props.activeProject); // Append project ID
    formData.append("photo", selectedPhoto); // Append selected photo
    formData.append("dateSubmitted", projectData.dates.date_submitted); // Append date submitted
    formData.append("submissionStatus", projectData.submission_status); // Append submission status

    try {
      const response = await fetch("/api/send-photo", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmissionStatus("success"); // Set status to success
        alert("The photo has been sent to the backend server!"); // Notify user of success
      } else {
        setSubmissionStatus("failed"); // Set status to failed
        alert("Failed to send the photo."); // Notify user of failure
      }
    } catch (error) {
      console.error("Error:", error); // Log errors
      setSubmissionStatus("error"); // Set status to error
      alert("An error occurred while sending the photo."); // Notify user of error
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.midContainer}>
        <div className={styles.innerContainer}>
          <img src={makeProjectScreenshot} alt="Project screenshot" />
          <h1>Submit Project Photo</h1>
          <p>
            After completing your project, take a screenshot of your project and upload it here.
          </p>
          <div className={styles.projectCircles}>
            {studentProjectsData.map((project) => (
              <button
                key={project.id}
                className={`${styles.circle} ${activeCircle === project.id ? styles.active : ""}`}
                onClick={() => handleCircleClick(project.id)}
                aria-label={`Select project ${project.id}`} // Accessibility label
              />
            ))}
          </div>

          <input 
            type="file" 
            onChange={handlePhotoChange} 
            accept="image/*" 
            className={styles.fileInput} 
            id="file-upload" 
            style={{ display: 'none' }} // Hide the input
          />
          <label htmlFor="file-upload" className={styles.fileLabel}>
            Choose File
          </label>
          <button
            className={styles.submProBtn}
            onClick={handleSendPhotoClick}
          >
            <img src={sendPhoto} alt="Send Photo" />
            <p>Send Photo</p>
          </button>

          {submissionStatus === "success" && (
            <p style={{ color: "green" }}>Submission Successful!</p>
          )}
          {submissionStatus === "failed" && (
            <p style={{ color: "red" }}>Submission Failed!</p>
          )}
          {submissionStatus === "error" && (
            <p style={{ color: "purple" }}>An error occurred during submission.</p>
          )}
        </div>

        <div className={styles.innerContainer}>
          <img src={submitProjectPhoto} alt="Photos of the project I am submitting" />
          <h1>Show Your Teacher</h1>
          <p className={styles.callTeacher}>
            If your teacher is in the same room as you, click the button below to let them know you are done.
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

