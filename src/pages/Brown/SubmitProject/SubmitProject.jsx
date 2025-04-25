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
// I use useOutletContext to receive the selectedProjects and studentId from the parent component.
import { useOutletContext } from "react-router-dom";

// Create DropZone component for file uploads // add
const DropZone = generateUploadDropzone({
  url: "http://localhost:4000/api/student-dashboard/SubmitProject/uploadthing",
});

const SubmitProject = () => {  
  // selectedProjects: An array of selected project IDs.
  // Used to perform processing based on the selected projects in child components.
  // studentId: Student ID. This is required when communicating with the backend.
  const { selectedProjects, studentId } = useOutletContext(); // Get selectedProjects and studentId from the parent component
  const [uploadedUrl, setUploadedUrl] = useState(""); // State to manage uploaded URLs

  // Send the uploaded photo URL to the backend
  // What happens when the upload is complete?
  // In the handleUploadComplete function,
  // send the URL of the uploaded file to all selected project IDs.
  const handleUploadComplete = async (res) => {
    // In the child component (e.g. SubmitProject), I can use the submissionUrl passed
    // from the parent and do whatever I need to, such as verifying and displaying the uploaded file.

    const submissionURL = res[0].ufsUrl; // Get the URL of the uploaded file
    console.log("Upload completed", res); // Upload completion log
    setUploadedUrl(submissionURL); // Save the URL in the state
    
    // Send request only if selected
    if (selectedProjects.length > 0) { // If there is a selected project in alley of objects
      try {
        for (const projectId of selectedProjects) {
          // When a user uploads a new file to the uploadthing service,
          // I want to get its URL in real-time and send it to the backend immediately,
          // which is something that would normally happen after the upload is complete,
          // so it makes sense to handle this in a child component.
          // If a child component depends on displaying or processing the results of an upload,
          // passing in a submissionUrl is useful.
          const response = await axios.patch(
            "http://localhost:4000/api/student-dashboard/SubmitProject/store-submission",
            {
              student_id: studentId, // Send selected student ID from frontend to backend:database to be updated
              project_id: projectId, // Send selected project ID from frontend to backend:database to be updated
              submission: submissionURL, // Send the uploaded URL from uploadthing that was passed from parents components which has already updated by get method from backend. 
            },
            {
              headers: {
                "Content-Type": "application/json", // Specify the JSON format
              },
            }
          );

          console.log("Success for project ID", projectId, ":", response.data.message); // Log a success message
        }
      } catch (error) {
        if (error.response) {
          console.error("Error updating submission:", error.response.data.message); // Log an error message
          alert("Error: " + error.response.data.message); // Notify the user of the error
        } else {
          console.error("Network error:", error);
          alert("A network error occurred. Please try again.");
        }
      }
    } else {
      alert("Please select your project ID#."); // Error message if no project is selected
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
         
          <DropZone
            endpoint="imageUploader"
            onClientUploadComplete={handleUploadComplete} // What happens when the upload is complete?
            onUploadError={(err) => console.error("upload error", err)}// Upload Error Handling
            config={{ mode: "manual" }}
          >          
           {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className={styles.submProBtn}>
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

