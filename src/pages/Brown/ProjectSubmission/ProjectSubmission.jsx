import React, { useState } from "react"; // Import React and useState
import styles from "./components/ProjectSubmission.module.css"; // Import CSS styles
import studentProjectsData from "../../../pages/Brown/ProjectSubmission/studentProjectsData.js"; // Import project data
import studentData from "../../../pages/Brown/ProjectSubmission/studentData.js"; // Import student data
import mensGroup from "../../../pages/Brown/ProjectSubmission/mensGroup.js";  // Import men's group data
import womensGroup from "../../../pages/Brown/ProjectSubmission/womensGroup.js";  // Import women's group data


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
  return { datePart, timePart }; // Return formatted date and time
}

// Function to format the student's name
// function formatName(name) {
//   const nameParts = name.split(" "); // Split the name into parts
//   const firstName = nameParts[0].toUpperCase(); // Capitalize the first name
//   const lastName = nameParts.slice(1).join(" "); // Join the rest of the name
//   return `${firstName} ${lastName}`; // Combine and return
// }

// Function to format the student's first name only Capitalized
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
  const [isChecked, setIsChecked] = useState(false); // Manage checkbox state

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  // Find the student data based on project student_id
  const student = studentData.find(student => student.student_id === project.student_id);
  // Assigned another variable name as pronoun to distinguish mens and womens
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
          onChange={handleCheckboxChange} // Handle state change
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
              <p>{firstNameCapitalized} submitted {pronoun} projects.</p> // Use formatName here
            )}
            {!project.submission_status && (
              <p>{firstNameCapitalized} did not submit {pronoun} projects.</p> // Use formatName here
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Main component
export default function ProjectSubmission() {
  return (
    <div className={styles.projectSubmissionBackground}>
      <main className={styles.projectSubmissionContainer}>
        <h1 className={styles.projectSubmissionText}>
          <b>PROJECT SUBMISSIONS</b>
        </h1>
        <section className={styles.projectscrollContainer}>
          {studentProjectsData.map((project, index) => (
            <ProjectCard key={index} project={project} /> // Display each project card
          ))}
        </section>
      </main>
    </div>
  );
}
