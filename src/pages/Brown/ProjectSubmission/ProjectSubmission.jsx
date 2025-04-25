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

export default function ProjectSubmission({ teacherId = 34}) {
  // State Management: Uses useState to manage project data,
  // success messages, and error messages.
  const [projects, setProjects] = useState([]); // State for projects
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [isLoading, setIsLoading] = useState(true); // State for loading status
  const [selectedProjects, setSelectedProjects] = useState([]); // 選択されたプロジェクトの状態

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
        const response = await fetch(`http://localhost:4000/api/teacher-dashboard/ProjectSubmission/project-card/${teacherId}`);
         
        // Check if the response is okay
        // Error Handling: Checks if the response is okay; if not,
        // it throws an error and sets an error message.
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Call response.json() to get the response in JSON format.
        // Now I can get data from the backend without using Axios.
        const data = await response.json(); // Parse JSON data
        console.log(data);
        setProjects(data); // Set the projects data
      } catch (error) {
        console.error('Error fetching projects:', error);
        setErrorMessage('Failed to fetch project submissions.'); // Set error message
      }finally {
        setIsLoading(false);
      }
    };

    fetchProjects();// Call the fetch function
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
            responseType: 'blob', // Ensure we get the file as a blob
        });
        const blob = new Blob([response.data]); // Create a new Blob from the response data
        const link = document.createElement('a'); // Create an anchor tag
        link.href = window.URL.createObjectURL(blob); // Create a URL for the blob
        link.setAttribute('download', url.split('/').pop()); // Set the download attribute
        document.body.appendChild(link); // Append the anchor to the document body
        link.click(); // Programmatically click the anchor to trigger the download
        link.remove(); // Remove the anchor from the document
    } catch (error) {
        console.error('Error downloading file:', error);
        alert('Failed to download the file.'); // Show an alert if there's an error
    }
};

    // Functions that manage the state of checkboxes
    const handleCheckboxChange = (studentId, projectId, isChecked) => {
      if (isChecked) {
        // If checked, add to selection
        setSelectedProjects((prev) => [...prev, { student_id: studentId, project_id: projectId }]);
      } else {
        // If unchecked, it is removed from the selection.
        setSelectedProjects((prev) => prev.filter(project => !(project.student_id === studentId && project.project_id === projectId)));
      }
    };

  // Mark projects as completed
  const markProjectsAsCompleted = async () => {
    // Here we use selectedProjects to do the processing.
    try {
      const response = await axios.patch("http://localhost:4000/api/teacher-dashboard/ProjectSubmission/markCompleted", {
        studentProjectsMarked: selectedProjects,
      });

      // Remove completed projects from the list
      setProjects((prevProjects) =>
        prevProjects.filter(
          (project) =>
            !selectedProjects.some(
              (marked) =>
                marked.student_id === project.student_id &&
                marked.project_id === project.project_id
            )
        )
      );

      setSuccessMessage('Projects marked as completed successfully!');
      setErrorMessage('');
    } catch (error) {if (error.response) {
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
//   // Function to mark projects as completed
//   const markProjectsAsCompleted = async (studentProjectsMarked) => {
//     try {
//       const response = await axios.patch(
//         "http://localhost:4000/api/teacher-dashboard/ProjectSubmission/markCompleted",
//         {
//           studentProjectsMarked,
//         }
//       );
// 
//       console.log('Response:', response.data);
//       setSuccessMessage('Projects marked as completed successfully!'); // Set success message
//       setErrorMessage(''); // Clear error message
//     } catch (error) {
//       if (error.response) {
//         console.error('Error response:', error.response.data);
//         setErrorMessage(`Error: ${error.response.data.error}`); // Set error message
//         setSuccessMessage(''); // Clear success message
//       } else {
//         console.error('Error:', error.message);
//         setErrorMessage('Error: Unable to reach the server. Please try again later.'); // Set error message
//         setSuccessMessage(''); // Clear success message
//       }
//     }
//   };
//   // Use cases as sample data for marking projects as completed
//   // student id and project id are examples.
//   const studentProjectsMarked = [
//     { student_id: 1, project_id: 3 },
//     { student_id: 15, project_id: 1 }
//   ];
// 
//     // Effect to clear messages after a few seconds
//     useEffect(() => {
//       if (successMessage || errorMessage) {
//         const timer = setTimeout(() => {
//           setSuccessMessage('');
//           setErrorMessage('');
//         }, 5000); // Clear messages after 5 seconds
// 
//         return () => clearTimeout(timer); // Cleanup timer on unmount
//     }
//   }, [successMessage, errorMessage]);

 // Render the component
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
              {/* I get the submission from the first element of projects and download the file,
               which allows me to download a file for a specific project. */}
                <button onClick={() => {
                  //Downloads the file only if the submission is valid.
                 if (projects.length > 0 && projects[0].submission) {
                  downloadFileAtURL(projects[0].submission); //Download the files for my first project
                } else {
                  alert("No file available for download."); // If no file, show alert
                }
              }}>
                📥 DOWNLOAD FILE
              </button>
                {/* <button onClick={() => markProjectsAsCompleted(studentProjectsMarked)}> */}
                <button onClick={markProjectsAsCompleted}>
                  ✅ MARK AS COMPLETE PROJECT
                </button>
              </div>
            </div>
  
            {/* Displaying Error Messages */}
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
  
            <section className={styles.projectscrollContainer}>
            {console.log(projects)} {/* ここでprojectsを確認 */}
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
                  <ProjectSubmissionCard
                   key={index}
                   project={project}
                   onCheckboxChange={handleCheckboxChange} // Passing a checkbox change handler
                   />
                ))
              ) : (
                <p>No projects submitted yet.</p>
              )}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}  
