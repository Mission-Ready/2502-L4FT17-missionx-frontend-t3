import React, { useState } from "react"; // Import React and the useState hook for state management
import sendPhoto from "/src/assets/StudentDashboard/sendPhoto.png"; // Import send photo icon
import callTeacher from "/src/assets/StudentDashboard/callTeacher.png"; // Import call teacher icon
import makeProjectScreenshot from "/src/assets/StudentDashboard/makeProject-screenshot.png"; // Import project screenshot image
import submitProjectPhoto from "/src/assets/StudentDashboard/submitProject-Photo.png"; // Import submit project photo image
import styles from "./SubmitProject.module.css"; // Import CSS module for styling
import studentProjectsData from "../../../pages/Brown/ProjectSubmission/studentProjectsData.js";

const SubmitProject = (props) => {
  // State to manage the currently active circle (for UI indication)
  const [activeCircle, setActiveCircle] = useState(null);

  // State to hold the photo selected by the user
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // State to manage submission status
  const [submissionStatus, setSubmissionStatus] = useState("");

  

  // Get project data based on activeProject

  // Find the student data based on project student_id
  // const project = studentProjectsData[0];
  // const student = studentData.find(
  //   (student) => student.student_id === project.student_id
  // );
  //

  // Get project data based on activeProject
  const projectData = studentProjectsData.find(
    (project) => project.id === props.activeProject
  );

  // Function to handle clicks on circles
 const handleCircleClick = (number) => {
    setActiveCircle(activeCircle === number ? null : number); // Toggle active state
  };

  // Function called when a photo is selected from the file input
  const handlePhotoChange = (event) => {
    // Get the first file selected by the user
    const file = event.target.files[0];
    if (file) {
      setSelectedPhoto(file); // Save the selected file to state for later use
    }
  };

  // Function called when the "Send Photo" button is clicked
  const handleSendPhotoClick = async () => {
    // Check if a photo has been selected
    if (!selectedPhoto) {
      alert("Please select a photo to send."); // Alert the user to select a photo
      return; // Exit the function if no photo is selected
    }

    // Create a FormData object to hold the data to be sent to the server
    // const formData = new FormData();
    // Append the project ID to the FormData object
    // formData.append("projectId", props.activeProject);
    // Append the selected photo to the FormData object
    // formData.append("photo", selectedPhoto);
    const formData = new FormData(); // Create FormData object
    formData.append("projectId", props.activeProject); // Append project ID
    formData.append("photo", selectedPhoto); // Append selected photo
    formData.append("dateSubmitted", projectData.dates.date_submitted); // Append date submitted
    formData.append("submissionStatus", projectData.submission_status); // Append submission status

    try {
      // Send a POST request to the server with the FormData
      const response = await fetch("/api/send-photo", {
        method: "POST",
        body: formData, // Attach the FormData object as the request body
      });

      // Check if the response indicates success
      if (response.ok) {
        setSubmissionStatus("success"); // Set status to success
        alert("The photo has been sent over to the backend server!!"); // Notify user of success
      } else {
        setSubmissionStatus("failed"); // Set status to failed
        alert("Failed to send the photo."); // Notify user of failure
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors to the console
      setSubmissionStatus("error"); // Set status to error
      alert("An error occurred while sending the photo."); // Notify user of an error
    }
  };

  return (
    <div className={styles.mainContainer}>
      {" "}
      {/* Main container for the component */}
      <div className={styles.midContainer}>
        {" "}
        {/* Mid-level container for layout */}
        <div className={styles.innerContainer}>
          {" "}
          {/* Inner container for the first section */}
          <img src={makeProjectScreenshot} alt="Project screenshot" />{" "}
          {/* Image of the project screenshot */}
          <h1>Submit project photo</h1> {/* Heading for the submit section */}
          <p>
            After completing your project, take a screenshot of your project and
            upload it here. {/* Instructions for the user */}
          </p>
          {/* Circle buttons for project selection */}
          <div className={styles.projectCircles}>
            {studentProjectsData.map((project) => (
              <button
                key={project.id}
                className={`${styles.circle} ${
                  activeCircle === project.id ? styles.active : ""
                }`}
                onClick={() => handleCircleClick(project.id)}
                aria-label={`Select project ${project.id}`} // Accessibility label
              >
                {/* {project.id} */}
              </button>
            ))}
          </div>

          {/* <input
            type="file"
            onChange={handlePhotoChange} // Handle the selection of a photo
            accept="image/*" // Restrict file selection to image types only
          /> */}
          {/* Hidden file input */}
          <input 
            type="file" 
            onChange={handlePhotoChange} 
            accept="image/*" 
            className={styles.fileInput} 
            id="file-upload" // Add an ID for the input
            // ref={fileInputRef} // Attach ref to the file input
            style={{ display: 'none' }} // Hide the input
          />
          <label className={styles.fileLabel}>
            Choose File
          </label>
          <button
            className={styles.submProBtn}
            onClick={handleSendPhotoClick} // Handle the click event for sending the photo
          >
            <img src={sendPhoto} alt="Send Photo" />{" "}
            {/* Icon for sending photo */}
            <span
              className={`${styles.circle} ${
                activeCircle === 1 ? styles.active : ""
              }`}
            ></span>{" "}
            {/* Active circle indicator */}
            <br />
            <p>Send Photo</p> {/* Button label */}
          </button>
          
          {submissionStatus === "success" && (
            <p style={{ color: "green" }}>Submission Successful!</p>
          )}
          {submissionStatus === "failed" && (
            <p style={{ color: "red" }}>Submission Failed!</p>
          )}
          {submissionStatus === "error" && (
            <p style={{ color: "purple" }}>
              An error occurred during submission.
            </p>
          )}
        </div>
        <div className={styles.innerContainer}>
          {" "}
          {/* Inner container for the second section */}
          <img
            src={submitProjectPhoto}
            alt="Photos of the project I am submitting" // Image related to project submission
          />
          <h1>Show your teacher</h1>{" "}
          {/* Heading for the teacher notification section */}
          <p className={styles.callTeacher}>
            If your teacher is in the same room as you, click the button below
            to <br />
            let them know you are done.{" "}
            {/* Instructions for notifying the teacher */}
          </p>
          <button className={styles.submProjBtn}>
            {" "}
            {/* Button to notify the teacher */}
            <img src={callTeacher} alt="Call Teacher" />{" "}
            {/* Icon for calling the teacher */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitProject;
