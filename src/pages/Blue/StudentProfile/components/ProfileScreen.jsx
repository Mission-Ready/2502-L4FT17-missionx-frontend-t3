import Card from "./Card";
import styles from "./ProfileScreen.module.css";
import { Link } from "react-router-dom";

export default function ProfileScreen({ students }) {
  return (
    <div className={styles.profileScreen}>
      {students.map((student, index) => {
        return (
          <Link className={styles.profileLink} to={"/studentProfileViewer/:studentID"}>
            <Card
              key={index}
              name={student.name.toUpperCase()}
              image={student.image}
            />
          </Link>
        );
      })}
    </div>
  );
}
