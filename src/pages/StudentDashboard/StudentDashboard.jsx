import { Outlet, Link } from "react-router-dom";
import BrownSideBar from "../../common/BrownSideBar";
import styles from "./StudentDashboard.module.css";
import BrownHeader from "../../common/BrownHeader";
import Footer from "../../common/Footer";
import { useState, useEffect } from "react";
import axios from 'axios'; // Import Axios
// import studentProjectsData from "../../../pages/Brown/ProjectSubmission/studentProjectsData.js"; 

// { // Accept studentId as a prop
// In the ParentComponent, studentId is defined and passed down to StudentDashboard.
// This allows studentId to be dynamic and change based on the parent component's state or logic.
export default function StudentDashboard({ studentId = 5 }) { 
  
 // const studentId = 13; // Set the student ID (change if necessary)
 const projectNumbers = Array.from({ length: 15 }, (_, i) => i + 1); // Create an array of project numbers
  
// Managing in a list ensures the flexibility to allow multiple projects to be selected in the future.
// Benefits of list management 1)Future extensibility:
// Even if I use a single project ID today, managing in a list will allow me to smoothly add the ability
// to select multiple projects in the future.
// Improved user experience:
// When users can select multiple projects, managing in a list allows them to clearly see which projects are selected.
  const [selectedProjects, setSelectedProjects] = useState([]); // Manages an array of selected project IDs
  const [submissionUrl, setSubmissionUrl] = useState(""); // State that manages submission URL

  // Log selected projects whenever they change
  // I can use useEffect to fetch data from my backend to get the submissionUrl based on the specific selected project_id.
  useEffect(() => {
    const fetchSubmissionUrl = async () => {
      if (selectedProjects.length > 0) { // If there is a selected project
        try {
          // Retrieve the submission URL from the database based on the given student ID and project ID.
          // I am requesting a submissionUrl to get data about a specific project in the updated database.\
          // This may be necessary to view more information about the project or historical submission data.
          const response = await axios.get(
            `http://localhost:4000/api/student-dashboard/SubmitProject/get-submission/${studentId}/${selectedProjects[0]}`
          );
          // Use a SQL statement to retrieve the submissions from the student_projects table.
          // If the data is found, a 200 response will be returned including the submission value.
          // 
          setSubmissionUrl(response.data.submission); // Set the updated obtained URL
        } catch (error) {
          // If no data is found it will return a 404 error.
          console.error("Error fetching submission URL:", error);
        }
      }
    };
    // Use useEffect to log the contents of selectedProjects when it is updated.
    console.log("Selected projects updated:", selectedProjects);  
    fetchSubmissionUrl();

    // Executed whenever electedProjects or studentId is changed
    // selectedProjects is updated when the circle button is clicked.
    // Specifically, setActiveCircle(number) is called and the selected project ID is stored in activeCircle.
  }, [selectedProjects, studentId]); 

  // Each number represents the current project ID in the projectNumbers array.
  const handleClick = (number) => {    
    // selectedProjects.includes(number) checks if the specified project ID is already selected.
    // An if statement is used to separate processing depending on whether the item is selected or not.
    if (selectedProjects.includes(number)) {
      // If it is selected, remove it from the selection or add them in array.
      // If I want to check the latest status, use the prev passed as an argument to output the log as is.
      setSelectedProjects((prev) => {
        // If already selected, remove it, otherwise add it
        const updatedProjects = prev.filter((id) => id !== number); // Remove the ID
        console.log("Selected projects after removal:", updatedProjects); // Show updated project ID
        return updatedProjects; // Return the updated list
      });
    } else {
      // If it is not selected, add it to the selection
      setSelectedProjects((prev) => {
        // If not, add a new ID using spread spread operator (...) .
        const updatedProjects = [...prev, number]; // Add the ID
        console.log("Selected projects after addition:", updatedProjects); // Show updated project ID
        return updatedProjects; // Return the updated list
      });
    }};  

  // I am telling the program what to show on the screen.
  return (
    // This is like a big box called "StudentDashboard"
    // that will hold everything I want to show on the screen about the student’s projects.
    <div className="StudentDashboard">
      {/* The <header> is like the top part of a webpage.
      It usually has important information, like the title or logo. */}
      <header>
      {/* This line calls another part of the code (a component) called BrownHeader.
       It might show a special header I have set up in the another component at the top of the page! */}
        <BrownHeader />
        {/* This is another box that helps organize everything inside the header.
         It uses styles to look nice. */}
        <div className={styles.headerContainer}>
        {/* Inside the header container, there’s a part called titleContainer.
         This is where I put the title and subtitle. */}
          <div className={styles.titleContainer}>
          {/* This is the main title of the page that says "PROJECT". 
          It’s the biggest heading, so everyone knows what this part is about. */}
            <h1 className={styles.title}>PROJECT</h1>
            {/* This is a smaller heading that says "introduction".
             It tells me that this section will explain something about the projects. */}
            <h2 className={styles.subtitle}>introduction</h2>
          </div>
          {/* This is another box where project circles will go.
           These circles might show different projects that students(myself) can click on. */}
          <div className={styles.projectCircles}>
          {/* number represents the current project ID being processed within the loop.
          For example, in the first iteration, number is 1, in the next iteration it is 2, and finally it is 15. */}
          {/* So when I click on a project circle,
          the handleClick function is passed the project ID that corresponds to that circle and
          it is added or removed from the selectedProjects array. */}
          
          {/* This is a way to look at the list of project numbers one by one.
           It is used to display each project when there are many projects in the alley. */}
            {projectNumbers.map((number) => (
              // Here, I create a special identifier (key) based on the number of each project(1 to 15 project' ranges).
              // This allows React to correctly understand which project is which.
              <div key={`project-${number}`}>

                {/* This is a link (like a button) to choose a project.
                 By clicking the link, I can select that project. */}
                <Link
                  // This part applies styles to determine the appearance of the link.
                  // If that project is selected, a special style (styles.active) will be added, such as bigger circle with number.
                  className={`${styles.circle} ${selectedProjects.includes(number) ? styles.active : ''}`}
                  // This adds a description of the links for people using screen readers.
                  // This way, they can understand which project's link it refers to.
                  aria-label={`Project ${number}`}
                  // This means that when the link of circle with project_id # is clicked,
                  // the handleClick function will be called with the current number (the project ID) passed as an argument.
                  // It means that the current project's number (number) is passed to this function.
                  // In other words, it is used to inform which project has been selected.
                  onClick={() => handleClick(number)} // Select a Project      
                >
                  {/* Finally, the project number (such as '1' or '2') will be displayed in the link. */}
                  {number}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </header>
      <div style={{ display: "flex" }}>
        <BrownSideBar />
        <div className={styles.wholeScreen2} style={{ flex: 1 }}>
          {/* In the StudentDashboard component, use Outlet to pass the studentId. */}
          {/* Passing selectedProjects and studentID to an Outlet */}
          {/* The URL of the uploaded file, for display or processing in a child component. */}
          <Outlet context={{ selectedProjects, studentId, submissionUrl }} /> 
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}




