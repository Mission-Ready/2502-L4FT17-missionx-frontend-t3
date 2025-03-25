// Directly specify the path to the profile image
const AidenAndrews = "/images/students/AidenAndrews.png"; // Path from the public folder

// Array to hold student's object data as one duy data extracted in database example
const studentData = [
  {
    id: 1, // Unique identifier for the student
    student_id: 23, // Student's ID
    teacher_id: 34, // Teacher's ID associated with the student
    name: "Aiden Andrews", // Full name of the student
    email: "aiden@ranuiprimary.school.nz", // Student's email address
    password: "123", // Student's password (should be hashed in production)
    school: "Ranui Primary School", // Name of the school the student attends
    profile_pic: {
      src: AidenAndrews, // Source path for the student's profile picture
      alt: "Aiden Andrews", // Alt text for the profile picture
    },
    date_of_birth: "2010-12-31", // Student's date of birth
    contact_number: "09-234-5678", // Student's contact number
    course: {
      currentValue: "Beginner", // Current course level of the student
      options: ["Beginner", "Intermediate", "Advanced"], // Possible course levels
    },
    subject_matter: {
      currentValue: "computer science", // Current subject matter the student is studying
      options: ["computer science", "maths", "language", "art", "music"], // Available subjects
    },
  },
];

// Export the student data array for use in other modules
export default studentData;
