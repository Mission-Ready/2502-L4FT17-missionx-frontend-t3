import React, { useState } from "react"; // Import React and useState
import styles from "./ProjectSubmissionCard.module.css";
// import projectImage from "../../../../assets/StudentDashboard/makeProject-screenshot.png"; //Import the image of makeProject-screenshot
import ImageModal from "./ImageModal"; // Import components of image modal
// import studentProjectsData from "../../../../pages/Brown/ProjectSubmission/studentProjectsData.js"; // Import project data
// import studentData from "../../../../pages/Brown/ProjectSubmission/studentData.js"; // Import student data
// import mensGroup from "../../../../pages/Brown/ProjectSubmission/mensGroup.js"; // Import men's group data
// import womensGroup from "../../../../pages/Brown/ProjectSubmission/womensGroup.js"; // Import women's group data

// const project = studentProjectsData[0];
// const student = studentData.find(
//   (student) => student.student_id === project.student_id
// );


// Key point: The ProjectSubmission component retrieves the data from the specified endpoint and passes it 
// to the ProjectSubmissionCard component for display.
// Component for displaying individual project submissions
// Props: Receives project as a prop, which contains information about the project.
// By using props, I can pass data from a parent component to a child component and
// flexibly manage the content displayed.
// As a result, Within the ProjectSubmissionCard component,
// I use the project property passed in to display the project details.
export default function ProjectSubmissionCard({ project, onCheckboxChange }) {
  // Manage checkbox state
  // When the checkbox is first rendered it will be in an unchecked state as false state condition.
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Additionally, // Manage modal open state

  //   // Assigned another variable name as pronoun to distinguish mens and womens
  //   // Determine the pronoun for the student
  //   const pronoun = getPronoun(student); // global variable as pronoun
  //
  //   // Assigned another variable name as first name capitalized
  //   const firstNameCapitalized = formatName(student.name); // Capitalized first name

  // Handle checkbox change
  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked; //Get the new check state
    setIsChecked(newCheckedState);//Update check state
    onCheckboxChange(project.student_id, project.project_id, newCheckedState); // Notify parents components of changes
  };
//     setIsChecked(!isChecked); // Toggle checkbox state
//   };

  // Render the component
  return (
    // white box container called projectCardContainer
    <div className={styles.projectCardContainer}>
      {/* checkbox div section */}
      {/* A checkbox for marking the project. */}
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.checkmark}
          checked={isChecked} // Reflect checkbox state
          onChange={handleCheckboxChange} // Handle state change
          // onChange={() => setIsChecked(!isChecked)} // Handle checkbox state change
        />
      </div>

      {/* Smaller div group of e.g."AIDEN" submitted his projects."*/}
      {/* An image of the student (profile picture). */}
      <div className={styles.projectSubmissionSmallContainer}>
        <img
          src={project.profile_pic}
          //   alt={project.profile_pic.alt}
          alt={`${project.name}`} // Alt text for the image
          className={styles.studentImage}
        />

        {/* Remove the submission status message */}
        {/* A heading that dynamically displays whether the student has submitted their project. */}
        <div>
          <h1 className={styles.centeredText}>
            {/* Main display */}
            {/* project.submission: This checks if project.submission is truthy
            (i.e., not null, undefined, or an empty string). */}
            {/*project.submission.trim() !== "" This ensures that even if project.submission contains only whitespace,
             it will be treated as false. */}
            {project.submission && project.submission.trim() !== ""
            // If project.submission is valid (If the project is submitted:),
            // it will display that the student has submitted their project.
              ? `${formatName(project.name)} submitted ${getPronoun(
                  project.gender
                )} project ID #: ${project.project_id}`
                // If project.submission is not valid (If the project is being shown:)
                // (i.e., null or an empty string),
                // it will show that the student wants to show their project.    
              : `${formatName(project.name)} wants to show ${getPronoun(
                  project.gender
                )} project ID #: ${project.project_id}`}
          </h1>

          {/* h2 can be used*/}
          {/* If I need an <h1>, use it as the top-level heading and have other headings follow it in the hierarchy. */}
          {/* There may be similar nesting occurring in parent components and other parts of the ProjectSubmissionCard component.
          In particular, check to see if an <h1> is inside an <h2> and how it relates to other heading tags. */}
          {/* Eliminate nested headings: Move the <h2> out of the <h1> to eliminate the nesting. */}
          {/* Proper use of headings: Use <h1> as the main heading for my page, with other headings placed beneath it. */}
          <h2 className={styles.centeredText}>            
          </h2>

          {/* Display Project imagery */}
          <img
            src={project.submission} // Project image
            // alt="Project Screenshot"
            className={`${styles.projectImage} ${styles.centeredImage}`} // add new class
            onClick={() => setIsModalOpen(true)} // Open the modal on click
            // style={{ cursor: "pointer" }} // Set cursor to pointer
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

        <h3 className={styles.dateSubmitted}>
          <span className={styles.dateText}>
            {formatDate(project.date_submitted).datePart}
          </span>
          <br />
          <span className={styles.timeText}>
            {formatDate(project.date_submitted).timePart}
          </span>
        </h3>
      </div>
      
      <ImageModal
        isOpen={isModalOpen}// Modal open/closed state
        onClose={() => setIsModalOpen(false)}// Function to close the modal
        imageSrc={project.submission}// URL of the project image
      />
    </div>
  );
}
// The formatDate function takes a date string, creates a Date object,
// and formats it into a more user-friendly string.
// It returns both the date and time parts in a structured format.
// Helper function for formatting submission dates
function formatDate(date_submitted) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(date_submitted); // Use date_submitted here
  const datePart = date.toLocaleDateString("en-NZ", options).replace(/,/g, "");
  const timePart = date.toLocaleTimeString("en-NZ", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  // Return formatted date and time
  return { datePart, timePart };
}

// Function to format the student's name to uppercase for the first name
// formatName Function: This function now formats the student's first name to uppercase,
// which is called when displaying the student's name in the component.
function formatName(name) {
  const nameParts = name.split(" "); // Split the name into parts
  const firstName = nameParts[0].toUpperCase(); // Capitalize the first name
  return `${firstName}`; // Combine and return
}

// // Function to determine the pronoun based on the group
// function getPronoun(student) {
//   // Check if the student is in the men's group
//   for (let i = 0; i < mensGroup.length; i++) {
//     if (mensGroup[i].name === student.name) {
//       return "his"; // For men's group
//     }
//   }
//
//   // Check if the student is in the women's group
//   for (let j = 0; j < womensGroup.length; j++) {
//     if (womensGroup[j].name === student.name) {
//       return "her"; // For women's group
//     }
//   }
//   return "their"; // Default case if not found
// }

// Function to determine the pronoun based on gender
// The getPronoun function receives project.gender,
// which correctly reflects the gender associated with the student in the project context.
// Conditional Rendering:

//The message now includes the pronoun determined by the getPronoun function. It will say either:
//${project.name} submitted his project.
//${project.name} submitted her project.
//${project.name} submitted their project. (if the gender is neither "Male" nor "Female").
function getPronoun(gender) {
  if (gender === "Male") {
    return "his";
  } else if (gender === "Female") {
    return "her";
  }
  return "their";
}
