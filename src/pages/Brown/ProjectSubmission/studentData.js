// 直接パスを指定する場合
const AidenAndrews = "/images/students/AidenAndrews.png"; // publicフォルダからのパス

const studentData = [
  {
    id: 1,
    student_id: 23,
    teacher_id: 34,
    name: "Aiden Andrews",
    email: "aiden@ranuiprimary.school.nz",
    password: "123",
    school: "Ranui Primary School",
    profile_pic: {
      src: AidenAndrews,
      alt: "Aiden Andrews"
    },
    date_of_birth: "2010-12-31",
    contact_number: "09-234-5678",
    course: {
      currentValue: "Beginner",
      options: ["Beginner", "Intermediate", "Advanced"]
    },
    subject_matter: {
      currentValue: "computer science",
      options: ["computer science", "maths", "language", "art", "music"]
    }
  }
];

export default studentData;


  