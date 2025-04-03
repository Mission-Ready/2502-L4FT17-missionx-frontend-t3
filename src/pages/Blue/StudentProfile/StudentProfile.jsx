import students from "../../../common/data/student"
import ProfileScreen from "./components/ProfileScreen";
import styles from "./StudentProfile.module.css";

console.log(students)

export default function StudentProfile() {
  return (
    <>
      <div className={styles.Screen}>
        <ProfileScreen students={students} />
      </div>
    </>

  );
}

