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
export default function ProjectSubmissionCard({ project }) {
  // Manage checkbox state
  // When the checkbox is first rendered it will be in an unchecked state as false state condition.
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Additionally, // Manage modal open state

  // Handle checkbox change
  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked; //Get the new check state
    setIsChecked(newCheckedState); //Update check state
    onCheckboxChange(project.student_id, project.project_id, newCheckedState); // Notify parents components of changes
  };
  
  return (
    // white box container called projectCardContainer
    <div className={styles.card}>
      {/* checkbox div section */}
      
      {/* A checkbox for marking the project. */}
       {/* <div className={styles.checkbox}>
        <input
          type="checkbox"
          className={styles.checkmark}
          checked={isChecked} // Reflect checkbox state
          onChange={handleCheckboxChange} // Handle state change
          // onChange={() => setIsChecked(!isChecked)} // Handle checkbox state change
        />
      </div>  */}
      {/* Smaller div group of e.g."AIDEN" submitted his projects."*/}
      {/* An image of the student (profile picture). */}
      {/* <div className={styles.cardContent}></div> */}
       <div className={styles.cardContent}>     
        <img          
          src={project.profile_pic}
          alt={`${project.name}`} // Alt text for the image
          className={`${styles.image}`}
        />        
        <div>
        {/* Remove the submission status message */}
        {/* A heading that dynamically displays whether the student has submitted their project. */}
        
        {/* <div className={styles.container}>  */}
        <div className={styles.sectionContainer}></div>
          <h1 className={styles.textCenter}>
            {/* Main display */}
            {/* project.submission: This checks if project.submission is truthy
            (i.e., not null, undefined, or an empty string). */}
            {/*project.submission.trim() !== "" This ensures that even if project.submission contains only whitespace,
             it will be treated as false. */}
            {project.submission && project.submission.trim() !== ""
              ? // If project.submission is valid (If the project is submitted:),
                // it will display that the student has submitted their project.
                `${formatName(project.name)} submitted ${getPronoun(
                  project.gender
                )} project ID #: ${project.project_id}`
              : // If project.submission is not valid (If the project is being shown:)
                // (i.e., null or an empty string),
                // it will show that the student wants to show their project.
                `${formatName(project.name)} wants to show ${getPronoun(
                  project.gender
                )} project ID #: ${project.project_id}`}
          </h1>
          {/* h2 can be used*/}
          {/* If I need an <h1>, use it as the top-level heading and have other headings follow it in the hierarchy. */}
          {/* There may be similar nesting occurring in parent components and other parts of the ProjectSubmissionCard component.
          In particular, check to see if an <h1> is inside an <h2> and how it relates to other heading tags. */}
          {/* Eliminate nested headings: Move the <h2> out of the <h1> to eliminate the nesting. */}
          {/* Proper use of headings: Use <h1> as the main heading for my page, with other headings placed beneath it. */}
          {/* <h2 className={styles.centeredText}></h2> */}

          {/* Display Project imagery */}
          <div
            // This is a box for the picture of a project. 
            // When I click it, a bigger version of the picture appears!
            className={styles.imageContainer}// This is the container for the project image
            onClick={() => setIsModalOpen(true)}// When I click, open the image modal
          >
            {/* This is the actual picture of the project.
             It has a special description so that everyone knows what it is. */}
            <img
              src={project.submission}// This is the URL of the project's image
              alt="Project Screenshot"// This is a description of the image for accessibility
              className={styles.projectImage}// This applies styles to the project image
            />
          </div>
          {/* Enlarge photo */}
          <div
            // This is a part that lets me click to see the picture bigger.
            // It has a magnifying glass emoji and says "ENLARGE PHOTO" to let me know what to do.
            className={styles.enlargePhoto}// This is the container for the enlarge button
            onClick={() => setIsModalOpen(true)}// When I click, open the image modal
            style={{ cursor: "pointer" }} // This changes the mouse pointer to a hand when hovering
          >
            {/*This is the text that says "ENLARGE PHOTO" */}
            <span role="img" aria-label="magnifying glass">
              {" "}
              🔍{" "}
            </span>
            <h4 className={styles.enlargePhotoText}>ENLARGE PHOTO</h4>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------- */}
      </div>
      {/* Date Container */}

      {/* This is where the date and time the project was submitted are shown.
      It tells me when the project was turned in. */}
      {/* New container added for the date(date:upper place/ time: lower place) */}      
      <div className={styles.dateContainer}>
        {" "}
        {/* New div tag added */}
        <h3 className={styles.date}>
          <span className={styles.dateText}>
          {/* This shows the "date" the project was submitted */}
            {formatDate(project.date_submitted).datePart}
          </span>
          <br />
          <span className={styles.timeText}>
          {/* This shows the "time" the project was submitted */}
            {formatDate(project.date_submitted).timePart}
          </span>
        </h3>
      </div>
      {/* This is like a pop-up that shows the big picture when I click.
       It can be closed when I am done looking at it. */}
       {/* ImageModal is used to receive functions and data from another component to display a modal. */}
       {/* Controls the display and hide of the modal, as well as the images to be displayed. */}
      <ImageModal
        //This controls if the modal is open or closed
        isOpen={isModalOpen} 
        // This is the callback function to close the modal when I click outside or on a close button.
        // onClose Property: onClose is used as a function to close the modal.
        // This function is called when the modal should be closed.
        // Arrow Function:() => setIsModalOpen(false) is an arrow function.
        // When this function is called, setIsModalOpen(false) is executed, and the modal closes.
        onClose={() => setIsModalOpen(false)} 
        // This is the URL of the project image I want to show in the modal
        imageSrc={project.submission} 
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

function getPronoun(gender) {
  if (gender === "Male") {
    return "his";
  } else if (gender === "Female") {
    return "her";
  }
  return "their";
}
