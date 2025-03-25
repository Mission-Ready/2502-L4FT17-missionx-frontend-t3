// Array to hold student project data
const studentProjectsData = [
  {
    id: 1, // Unique identifier for the project
    student_id: 23, // ID of the student associated with this project
    project_id: 10, // Unique identifier for the project
    dates: {
      date_started: "2020-12-31 23:59:59", // Timestamp when the project started
      date_submitted: "2020-12-31 23:59:59", // Timestamp when the project was submitted
      date_completed: "2020-12-31 23:59:59", // Timestamp when the project was completed
    },
    submissions: [
      "https://cdn.filestackcontent.com/VfOA9GyQCO6oZpOvroAi", // Array of submission URLs for the project
    ],
    submission_status: true, // Boolean indicating if the project has been submitted
  },
];

// Export the student project data array for use in other modules
export default studentProjectsData;
