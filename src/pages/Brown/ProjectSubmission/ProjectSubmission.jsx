import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect
import styles from "./ProjectSubmission.module.css"; // Import CSS styles
// import studentProjectsData from "../../../pages/Brown/ProjectSubmission/studentProjectsData.js"; // Import project data
// import studentData from "../../../pages/Brown/ProjectSubmission/studentData.js"; // Import student data
// import mensGroup from "../../../pages/Brown/ProjectSubmission/mensGroup.js"; // Import men's group data
// import womensGroup from "../../../pages/Brown/ProjectSubmission/womensGroup.js"; // Import women's group data
// import projectImage from "../../../assets/StudentDashboard/makeProject-screenshot.png"; //Import the image of makeProject-screenshot
// import ImageModal from "./components/ImageModal"; // Import components of image modal
import ProjectSubmissionCard from "./components/ProjectSubmissionCard.jsx";
// const AidenAndrews = "/images/students/AidenAndrews.png"; // Path to profile image
import axios from "axios"; // Import Axios

// Find the student data based on project student_id

export default function ProjectSubmission({ teacherId = 34 }) {
  // State Management: Uses useState to manage project data,
  // success messages, and error messages.
  const [projects, setProjects] = useState([]); // State for projects
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [isLoading, setIsLoading] = useState(true); // State for loading status
  const [selectedProjects, setSelectedProjects] = useState([]); // Status of the selected project

  // Fetch project data from the backend when the component mounts
  // A ProjectSubmission component for retrieving and displaying project data from the backend.
  useEffect(() => {
    // Data Fetching:
    // Uses useEffect to fetch project data from the backend when the component mounts.
    // It uses the fetch API to make a GET request.
    const fetchProjects = async () => {
      // Added a loading message that appears while the data is being fetched.
      setIsLoading(true); // Set loading to true before fetching
      try {
        // Since fetch returns a Promise, I use await to wait for the response.
        const response = await fetch(
          `http://localhost:4000/api/teacher-dashboard/ProjectSubmission/project-card/${teacherId}`
        );

        // Check if the response is okay
        // Error Handling: Checks if the response is okay; if not,
        // it throws an error and sets an error message.
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Call response.json() to get the response in JSON format.
        // Now I can get data from the backend without using Axios.
        const data = await response.json(); // Parse JSON data
        console.log(data);
        setProjects(data); // Set the projects data
      } catch (error) {
        console.error("Error fetching projects:", error);
        setErrorMessage("Failed to fetch project submissions."); // Set error message
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects(); // Call the fetch function
    // I am using the useEffect hook to retrieve the project data
    // based on the teacherId I specified as default of 34.
  }, [teacherId]); // Dependency array; fetches data when teacherId changes

  // const PNG_FILE_URL = AidenAndrews; // Update the URL to be relative
  // const downloadFileAtURL = (url) => {
  //   console.log("Downloading from URL:", url); // Check the URL here
  //   const fileName = url.split("/").pop(); // Get the file name from the URL
  //   const aTag = document.createElement("a"); // Create an anchor tag
  //   aTag.href = url; // Set the href to the URL
  //   aTag.setAttribute("download", fileName); // Set the download attribute
  //   document.body.appendChild(aTag); // Append the anchor to the document body
  //   aTag.click(); // Programmatically click the anchor to trigger the download
  //   aTag.remove(); // Remove the anchor from the document
  // };

  const downloadFileAtURL = async (url) => {
    console.log("Downloading from URL:", url); // Check the URL here
    try {
      const response = await axios.get(url, {
        responseType: "blob", // Ensure we get the file as a blob
      });
      const blob = new Blob([response.data]); // Create a new Blob from the response data
      const link = document.createElement("a"); // Create an anchor tag
      link.href = window.URL.createObjectURL(blob); // Create a URL for the blob
      link.setAttribute("download", url.split("/").pop()); // Set the download attribute
      document.body.appendChild(link); // Append the anchor to the document body
      link.click(); // Programmatically click the anchor to trigger the download
      link.remove(); // Remove the anchor from the document
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Failed to download the file."); // Show an alert if there's an error
    }
    };

  // Functions that manage the state of checkboxes
  const handleCheckboxChange = (studentId, projectId, isChecked) => {
    if (isChecked) {
      // If checked, add to selection
      setSelectedProjects((prev) => [
        ...prev,
        { student_id: studentId, project_id: projectId }, // added selected projects 
      ]);
    } else {
      // If unchecked, it is removed from the selection.
      setSelectedProjects((prev) =>
        prev.filter(
          (project) =>
            !(
              project.student_id === studentId &&
              project.project_id === projectId
            ) //Deselect
        )
      ); } };

  // Mark projects as completed
  const markProjectsAsCompleted = async () => {
    // Here we use selectedProjects to do the processing.
    try {
      const response = await axios.patch(
        "http://localhost:4000/api/teacher-dashboard/ProjectSubmission/markCompleted",
        {
          studentProjectsMarked: selectedProjects,
        }
      );

      // Remove completed projects from the list
      // Here, I am receiving the list of the current projects (prevProjects).
      // This code is doing the task of 'removing the selected project from the list if it is in the list.
      // Finally, it updates the remaining projects into a new list.
      setProjects((prevProjects) =>
        // Reasons for Exclusion Project Deletion:If a user wants to remove a selected project from the list.
        // In this case, by excluding the chosen project, users can manage unnecessary projects.
        // Filtering:When wanting to display only projects that do not meet certain conditions.
        // For example, by excluding completed marked projects or projects not related to specific students,
        // only the necessary information can be displayed as an updated database.
        // Confirmation of Selection: Sometimes, a project selected by the user may be temporarily removed
        // from the list to confirm that project.
        // This makes it easier to see the differences from other projects.
        prevProjects.filter(
          (project) =>
            // selectedProjects is the list of projects you want to remove.
            // "some" method is a way to check if there are any items in the list that meet the conditions.
            // "!" (exclamation mark) means 'not',
            // so it will only keep the case where there are no duplicates of the current project in the selected projects.
            !selectedProjects.some(
              // Here, the selected project's student ID and project ID are being compared
              // to see if they are the same as the current project's ID.
              (marked) =>
                marked.student_id === project.student_id &&
                marked.project_id === project.project_id
            )
          )
      );

      setSuccessMessage("Projects marked as completed successfully!");
      setErrorMessage("");
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        setErrorMessage(`Error: ${error.response.data.error}`); // Set error message
        setSuccessMessage(""); // Clear success message
      } else {
        console.error("Error:", error.message);
        setErrorMessage(
          "Error: Unable to reach the server. Please try again later."
        ); // Set error message
        setSuccessMessage(""); // Clear success message
      }
    }
  };
 
  // Render the component
  return (
    <div style={{ display: "flex" }}>
      {/* <SideBar /> Display SideBar component */}
      <div className={styles.container}>
        <main className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>PROJECT SUBMISSIONS</h1>
            <div className={styles.buttonContainer}>
              <button
                onClick={() => {
                  if (projects.length > 0 && projects[0].submission) {
                    downloadFileAtURL(projects[0].submission);
                  } else {
                    alert("No file available for download.");
                  }
                }}
              >
                📥 DOWNLOAD FILE
              </button>
              <button onClick={markProjectsAsCompleted}>
                ✅ MARK AS COMPLETE PROJECT
              </button>
            </div>
          </div>         

          {/* Displaying Error Messages */}
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

           {/* Check if the project exists*/}
          <section>
            {/* If initial state of projects'length is more then 0  */}
            {projects.length > 0 ? (
              // projects array:
              // projects is a state variable that stores the project data obtained from the API. It is initialized using useState.
              // Each element (project) in the projects array is passed to ProjectSubmissionCard.
              // save the initial state from fetched data from backend called projects and use the data to map over it in here.
              // The projects.map(...) part executes a callback function for each element in the projects array.
              // The current element (in this case, project) and its index are passed as arguments
              // to this callback function.
              projects.map((project, index) => (
                // The ProjectSubmissionCard component uses properties (props),
                // specifically a property called project,
                // to pass project data from its parent component, called ProjectSubmission,
                // to a child component of ProjectSubmissionCard.
                <div key={index} className={styles.projectRow}>
                {/* checkbox */}
                <input
                  type="checkbox"
                  className={styles.checkmark}
                  onChange={(e) =>
                     handleCheckboxChange(
                      project.student_id,
                      project.project_id,
                      e.target.checked)}
                  />                
                <ProjectSubmissionCard
                  // key={index}
                  // Whether to pass the index or not
                  // When it is okay to pass:If a child component requires a specific index
                  // (for example, to display its position in a list or to apply specific logic),
                  // it is fine to pass the index.
                  // When it is better not to pass:
                  // If the project data is unique and the child component has enough data on its own,
                  // there is no need to pass the index.
                  project={project}
                  // onCheckboxChange={handleCheckboxChange}
                  // The processing of the checkboxes will be done in the parent component,
                  // so no need to pass to a child component.
                />
               </div>  
              ))
            ) : (
              <p>No projects submitted yet.</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
