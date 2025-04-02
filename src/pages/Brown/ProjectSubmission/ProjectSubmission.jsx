import React, { useState } from "react"; // Import React and useState
import Header from "../../../common/components/Header.jsx";
import SideBar from "../../../common/components/SideBar.jsx";
import Footer from "../../../common/components/Footer.jsx";
import styles from "./components/ProjectSubmission.module.css"; // Import CSS styles
import studentProjectsData from "../../../pages/Brown/ProjectSubmission/studentProjectsData.js"; // Import project data
import studentData from "../../../pages/Brown/ProjectSubmission/studentData.js"; // Import student data
import mensGroup from "../../../pages/Brown/ProjectSubmission/mensGroup.js"; // Import men's group data
import womensGroup from "../../../pages/Brown/ProjectSubmission/womensGroup.js"; // Import women's group data
import projectImage from "../../../assets/StudentDashboard/makeProject-screenshot.png"; //Import the image of makeProject-screenshot
import ImageModal from "./components/ImageModal"; // Import components of image modal
const AidenAndrews = "/images/students/AidenAndrews.png"; // Path to profile image

// Function to format dates
function formatDate(dateString) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateString);
  const datePart = date.toLocaleDateString("en-NZ", options).replace(/,/g, "");
  const timePart = date.toLocaleTimeString("en-NZ", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  // Return formatted date and time
  return { datePart, timePart };
}

// Function to format the student's name
// function formatName(name) {
//   const nameParts = name.split(" "); // Split the name into parts
//   const firstName = nameParts[0].toUpperCase(); // Capitalize the first name
//   const lastName = nameParts.slice(1).join(" "); // Join the rest of the name
//   return `${firstName} ${lastName}`; // Combine and return
// }

// Function to format the student's name to uppercase for the first name
function formatName(name) {
  const nameParts = name.split(" "); // Split the name into parts
  const firstName = nameParts[0].toUpperCase(); // Capitalize the first name
  return `${firstName}`; // Combine and return
}

// Find the student data based on project student_id
const project = studentProjectsData[0];
const student = studentData.find(
  (student) => student.student_id === project.student_id
);

// Function to determine the pronoun based on the group
function getPronoun(student) {
  // Check if the student is in the men's group
  for (let i = 0; i < mensGroup.length; i++) {
    if (mensGroup[i].name === student.name) {
      return "his"; // For men's group
    }
  }

  // Check if the student is in the women's group
  for (let j = 0; j < womensGroup.length; j++) {
    if (womensGroup[j].name === student.name) {
      return "her"; // For women's group
    }
  }
  return "their"; // Default case if not found
}

// Component to display each project card
const ProjectCard = ({ project }) => {
  // Manage checkbox state
  const [isChecked, setIsChecked] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Additionally, // Manage modal open state

  // Assigned another variable name as pronoun to distinguish mens and womens
  // Determine the pronoun for the student
  const pronoun = getPronoun(student); // global variable as pronoun

  // Assigned another variable name as first name capitalized
  const firstNameCapitalized = formatName(student.name); // Capitalized first name

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  return (
    // white box container called projectCardContainer
    <div className={styles.projectCardContainer}>
      {/* checkbox div section */}
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.checkmark}
          checked={isChecked} // Reflect checkbox state
          // onChange={handleCheckboxChange} // Handle state change
          onChange={() => setIsChecked(!isChecked)} // Handle checkbox state change
        />
      </div>

      {/* Smaller div group of "AIDEN" submitted his projects."*/}
      <div className={styles.projectSubmissionSmallContainer}>
        <img
          src={student.profile_pic.src}
          alt={student.profile_pic.alt}
          className={styles.studentImage}
        />
        {/* ---------------------------------------------------------------------------------------- */}
        {/*Smaller div group of submission status in text if it's true as "submitted" or
      false as "wants to show" (his/her) projects */}
        <div>
          {project.submission_status ? (
            <h1 className={styles.centeredText}>
              {firstNameCapitalized} submitted {pronoun} projects.{" "}
            </h1>
          ) : (
            <h1 className={styles.centeredText}>
              {firstNameCapitalized} wants to show {pronoun} projects.
            </h1>
          )}
          {/* Display Project imagery */}
          <img
            src={projectImage}
            alt="Project Screenshot"
            className={`${styles.projectImage} ${styles.centeredImage}`} // add new class
            onClick={() => setIsModalOpen(true)} // Open the modal on click
            style={{ cursor: "pointer" }} // Set cursor to pointer
          />
          {/* Enlarge photo */}
          <div
            className={styles.enlargePhotoContainer}
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <span role="img" aria-label="magnifying glass">
              {" "}
              🔍{" "}
            </span>
            <h4 className={styles.enlargePhotoText}>ENLARGE PHOTO</h4>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------- */}
        {/* Smaller h3 group of date_submitted tag Upper part: Days/ Lower part: NZ local time*/}
        <h3 className={styles.dateSubmitted}>
          <span className={styles.dateText}>
            {formatDate(project.dates.date_submitted).datePart}
          </span>
          <br />
          <span className={styles.timeText}>
            {formatDate(project.dates.date_submitted).timePart}
          </span>
        </h3>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={projectImage}
      />
    </div>
  );
};

export default function ProjectSubmission() {
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
                <ProjectCard key={index} project={project} />
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
