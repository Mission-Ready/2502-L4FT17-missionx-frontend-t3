import React, { useState } from "react"; // Import React and useState
import Header from '../../../common/components/Header.jsx';
import SideBar from '../../../common/components/SideBar.jsx';
import Footer from '../../../common/Footer.jsx';
import styles from "./components/ProjectSubmission.module.css"; // Import CSS styles
import studentProjectsData from "../../../pages/Brown/ProjectSubmission/studentProjectsData.js"; // Import project data
import studentData from "../../../pages/Brown/ProjectSubmission/studentData.js"; // Import student data
import mensGroup from "../../../pages/Brown/ProjectSubmission/mensGroup.js"; // Import men's group data
import womensGroup from "../../../pages/Brown/ProjectSubmission/womensGroup.js"; // Import women's group data
import projectImage from "../../../assets/StudentDashboard/makeProject-screenshot.png"; //Import the image of makeProject-screenshot
import ImageModal from "./components/ImageModal"; // Import components of image modal


// const AidenAndrews = "/images/students/AidenAndrews.png"; // Path to profile image

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
  const [isChecked, setIsChecked] = useState(false); 
  
  const [isModalOpen, setIsModalOpen] = useState(false); // Additionally, // Manage modal open state

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  // Find the student data based on project student_id
  const student = studentData.find(
    (student) => student.student_id === project.student_id
  );
  // Assigned another variable name as pronoun to distinguish mens and womens
  // Determine the pronoun for the student
  const pronoun = getPronoun(student); // pronounをここで定義

  // Assigned another variable name as first name capitalized
  const firstNameCapitalized = formatName(student.name); // Capitalized first name

  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.checkmark}
          checked={isChecked} // Reflect checkbox state
          // onChange={handleCheckboxChange} // Handle state change
          onChange={() => setIsChecked(!isChecked)} // Handle checkbox state change
        />
      </div>
      <div className={styles.projectSubmissionSmallContainer}>
        <img
          src={student.profile_pic.src}
          alt={student.profile_pic.alt}
          className={styles.studentImage}
        />
        {isChecked && ( // Display date only if checked
          <div>
            <p>
              {formatDate(project.dates.date_submitted).datePart}
              <br />
              {formatDate(project.dates.date_submitted).timePart}
            </p>
            {project.submission_status && (
              <p>
                {firstNameCapitalized} submitted {pronoun} projects.
              </p> // Use formatName here
            )}
            {!project.submission_status && (
              <p>
                {firstNameCapitalized} wants to show {pronoun} projects.
              </p> // Use formatName here
            )}
            {/* Added imagery */}
            <img
              src={projectImage}
              alt="Project Screenshot"
              className={styles.projectImage} // Apply new class
              onClick={() => setIsModalOpen(true)} // Open the modal by clicking the imagery
              style={{ cursor: "pointer" }} // cursor over pointer
            />            
            {/* Enlarge photo */}            
            <div className={styles.enlargePhotoContainer} onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>
              <span role="img" aria-label="magnifying glass">🔍</span>
              <p className={styles.enlargePhotoText}>ENLARGE PHOTO</p>
            </div>
          </div>
        )}
      </div>
      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} imageSrc={projectImage} />
    </div>
  );
};

export default function ProjectSubmission() {

  const PNG_FILE_URL = "./images/students/AidenAndrews.png"; // Update the URL to be relative
  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop(); // Get the file name from the URL
    const aTag = document.createElement('a'); // Create an anchor tag
    aTag.href = url; // Set the href to the URL
    aTag.setAttribute('download', fileName); // Set the download attribute
    document.body.appendChild(aTag); // Append the anchor to the document body
    aTag.click(); // Programmatically click the anchor to trigger the download
    aTag.remove(); // Remove the anchor from the document
  };

  return (

    <>
    <Header /> {/* Display Header component */}
    <SideBar /> {/* Display SideBar component */}

    <div className={styles.projectSubmissionBackground}>
            
      <main className={styles.projectSubmissionContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.projectSubmissionText}>PROJECT SUBMISSIONS</h1>
          <div className={styles.markBtn}>
            <button onClick={() => { downloadFileAtURL(PNG_FILE_URL); }}>📥 DOWNLOAD FILES</button>
            <button>✅ MARK AS COMPLETE PROJECT</button>
          </div>
        </div>

        <section className={styles.projectscrollContainer}>
          {studentProjectsData.map((project, index) => (
            <ProjectCard key={index} project={project} /> // 各プロジェクトカードを表示
          ))}
        </section>
      </main>
      
      
    </div>
    <Footer /> {/* Display  component */}
    </>
  );
}
