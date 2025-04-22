import React, { useState } from "react"; // Import React and useState
// import Header from "../../../common/components/Header.jsx";
// import SideBar from "../../../common/components/SideBar.jsx";
// import Footer from "../../../common/components/Footer.jsx";
import styles from "./ProjectSubmission.module.css"; // Import CSS styles
import studentProjectsData from "../../../pages/Brown/ProjectSubmission/studentProjectsData.js"; // Import project data
import studentData from "../../../pages/Brown/ProjectSubmission/studentData.js"; // Import student data
import mensGroup from "../../../pages/Brown/ProjectSubmission/mensGroup.js"; // Import men's group data
import womensGroup from "../../../pages/Brown/ProjectSubmission/womensGroup.js"; // Import women's group data
import projectImage from "../../../assets/StudentDashboard/makeProject-screenshot.png"; //Import the image of makeProject-screenshot
import ImageModal from "./components/ImageModal"; // Import components of image modal
import ProjectSubmissionCard from "./components/ProjectSubmissionCard.jsx";
const AidenAndrews = "/images/students/AidenAndrews.png"; // Path to profile image

 // Find the student data based on project student_id





export default function ProjectSubmission({teacher_id = 34}) {
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


  return (
    <>
      {/* <Header />  */}
      {/* Display Header component */}

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
                <button>✅ MARK AS COMPLETE PROJECT</button>
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
      {/* <Footer />  */}
      {/* Display  component */}
    </>
  );
}
