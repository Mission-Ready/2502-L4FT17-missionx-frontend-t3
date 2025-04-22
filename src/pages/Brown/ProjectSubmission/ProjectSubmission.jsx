import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect
import styles from "./ProjectSubmission.module.css"; // Import CSS styles
import studentProjectsData from "../../../pages/Brown/ProjectSubmission/studentProjectsData.js"; // Import project data
import studentData from "../../../pages/Brown/ProjectSubmission/studentData.js"; // Import student data
import mensGroup from "../../../pages/Brown/ProjectSubmission/mensGroup.js"; // Import men's group data
import womensGroup from "../../../pages/Brown/ProjectSubmission/womensGroup.js"; // Import women's group data
import projectImage from "../../../assets/StudentDashboard/makeProject-screenshot.png"; //Import the image of makeProject-screenshot
import ImageModal from "./components/ImageModal"; // Import components of image modal
import ProjectSubmissionCard from "./components/ProjectSubmissionCard.jsx";
const AidenAndrews = "/images/students/AidenAndrews.png"; // Path to profile image
import axios from "axios"; // Import Axios

// Find the student data based on project student_id

export default function ProjectSubmission({ teacher_id = 34 }) {

  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const PNG_FILE_URL = AidenAndrews; // Update the URL to be relative
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop(); // Get the file name from the URL
    const aTag = document.createElement("a"); // Create an anchor tag
    aTag.href = url; // Set the href to the URL
    aTag.setAttribute("download", fileName); // Set the download attribute
    document.body.appendChild(aTag); // Append the anchor to the document body
    aTag.click(); // Programmatically click the anchor to trigger the download
    aTag.remove(); // Remove the anchor from the document
  };

  const markProjectsAsCompleted = async (studentProjectsMarked) => {
    try {
      const response = await axios.patch(
        "http://localhost:4000/api/teacher-dashboard/ProjectSubmission/markCompleted",
        {
          studentProjectsMarked,
        }
      );

      console.log('Response:', response.data);
      setSuccessMessage('Projects marked as completed successfully!'); // Set success message
      setErrorMessage(''); // Clear error message
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        setErrorMessage(`Error: ${error.response.data.error}`); // Set error message
        setSuccessMessage(''); // Clear success message
      } else {
        console.error('Error:', error.message);
        setErrorMessage('Error: Unable to reach the server. Please try again later.'); // Set error message
        setSuccessMessage(''); // Clear success message
      }
    }
  };
  // Use cases
  const studentProjectsMarked = [
    { student_id: 15, project_id: 6 },
    { student_id: 15, project_id: 7 },
  ];

    // Effect to clear messages after a few seconds
    useEffect(() => {
      if (successMessage || errorMessage) {
        const timer = setTimeout(() => {
          setSuccessMessage('');
          setErrorMessage('');
        }, 5000); // Clear messages after 5 seconds

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [successMessage, errorMessage]);

  return (
    <>
      <div style={{ display: "flex" }}>
        {/* <SideBar /> Display SideBar component */}
        <div className={styles.projectSubmissionBackground}>
          <main className={styles.projectSubmissionContainer}>
            <div className={styles.headerContainer}>
              <h1 className={styles.projectSubmissionText}>
                PROJECT SUBMISSIONS
              </h1>
              <div className={styles.markBtn}>
                <button
                  onClick={() => {
                    downloadFileAtURL(PNG_FILE_URL);
                  }}
                >
                  📥 DOWNLOAD FILES
                </button>
                {/* <button>✅ MARK AS COMPLETE PROJECT</button> */}
                <button
                  onClick={() => markProjectsAsCompleted(studentProjectsMarked)}>
                  ✅ MARK AS COMPLETE PROJECT
                </button>
              </div>
            </div>            

            <section className={styles.projectscrollContainer}>
              {studentProjectsData.map((project, index) => (
                <ProjectSubmissionCard key={index} project={project} />
              ))}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
