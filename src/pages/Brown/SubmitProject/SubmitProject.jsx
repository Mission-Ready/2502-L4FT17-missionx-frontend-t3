import React, { useState, useEffect } from "react"; // Import React and the useState hook for state management
import sendPhoto from "/src/assets/StudentDashboard/sendPhoto.png"; // Import send photo icon
import callTeacher from "/src/assets/StudentDashboard/callTeacher.png"; // Import call teacher icon
import makeProjectScreenshot from "/src/assets/StudentDashboard/makeProject-screenshot.png"; // Import project screenshot image
import submitProjectPhoto from "/src/assets/StudentDashboard/submitProject-Photo.png"; // Import submit project photo image
import styles from "./SubmitProject.module.css"; // Import CSS module for styling
import studentProjectsData from "../../../pages/Brown/ProjectSubmission/studentProjectsData.js";
import { generateUploadDropzone } from "@uploadthing/react"; // add
// import DOMPurify from "dompurify"; // Import DOMPurify
import axios from 'axios'; // Import Axios

// Create DropZone component for file uploads // add
const DropZone = generateUploadDropzone({
  url: "http://localhost:4000/api/student-dashboard/SubmitProject/uploadthing",
});

const SubmitProject = (props) => {
  const [activeCircle, setActiveCircle] = useState(null);
  // const [submissionStatus, setSubmissionStatus] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");

   const projectData = studentProjectsData.find(
    (project) => project.id === props.activeProject
  );

  const handleCircleClick = (number) => {
    setActiveCircle(activeCircle === number ? null : number); // Toggle active state
  };

  // Send the uploaded photo URL to the backend
  const handleUploadComplete = async (res) => {
    // Handle successful upload
    const submissionURL = res[0].ufsUrl; // Get the URL of the uploaded file
    console.log("Upload completed", res); // Log a message indicating upload completion
    setUploadedUrl(submissionURL); // Save the URL in the state
  
    // Send the URL to the backend server
    try {
      const response = await axios.patch(
        "http://localhost:4000/api/student-dashboard/SubmitProject/store-submission", // Ensure this URL is correct
        {
          student_id: 1, // Replace with actual student ID
          project_id: 2, // Replace with actual project ID
          submission: submissionURL, // Uploaded URL
        },
        {
          headers: {
            "Content-Type": "application/json", // Indicate that the content is JSON
          },
        }
      );
  
      // Check if the response is successful
      console.log("Success:", response.data.message); // Log success message
    } catch (error) {
      if (error.response) {
        // If the error has a response from the server
        console.error("Error updating submission:", error.response.data.message); // Log error message
        alert("Error: " + error.response.data.message); // Alert user
      } else {
        // If there was a network error
        console.error("Network error:", error); // Log network error
        alert("A network error occurred. Please try again."); // Alert user
      }
    }
  };
  

  return (
    <div className={styles.mainContainer}>
      <div className={styles.midContainer}>
        <div className={styles.innerContainer}>
          {/* Inner container for the first section */}
          <img src={makeProjectScreenshot} alt="Project screenshot" />
          {/* Image of the project screenshot */}
          <h1>Submit project photo</h1>
          <p>
            After completing your project, take a screenshot of your project and
            upload it here.
          </p>
          <div className={styles.projectCircles}>
            {studentProjectsData.map((project) => (
              <button
                key={project.id}
                className={`${styles.circle} ${
                  activeCircle === project.id ? styles.active : ""
                }`}
                onClick={() => handleCircleClick(project.id)}
                aria-label={`Select project ${project.id}`} // Accessibility label
              />
            ))}
          </div>
         
          <DropZone
            endpoint="imageUploader"
            onClientUploadComplete={handleUploadComplete} // changed from above
            // onUploadError={(err) => console.error("upload error", err)}
            onUploadError={(err) => console.error("upload error", err)}
            config={{ mode: "manual" }}
          >
            {({ getRootProps, getInputProps }) => (
          
              <div
                {...getRootProps()}
                // className={`${styles.submProBtn} ${styles.customDropZone}`}
                className={styles.submProBtn}
              >
              
                <input {...getInputProps()} className={styles.fileInput} />
                <img src={sendPhoto} alt="Send Photo" />
                <p>Send Photo</p>
              </div>
            )}
          </DropZone>

          {uploadedUrl && (
            <p style={{ color: "green" }}>File uploaded successfully!</p>
          )}
        </div>
        <div className={styles.innerContainer}>
          <img
            src={submitProjectPhoto}
            alt="Photos of the project I am submitting"
          />
          <h1>Show your teacher</h1>
          <p className={styles.callTeacher}>
            If your teacher is in the same room as you, click the button below
            to let them know you are done.
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

