import Card from "./Card";
import styles from "./ProfileScreen.module.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function ProfileScreen({ students }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/student")
      .then((response) => response.json())
      .then((result) => {
        setUser(result.data);
        console.log(result.data)
      })
      .catch((err) => console.error("error", err));
  }, []);


  return (
    <div className={styles.profileScreen}>
      {user.map((student) => {
        return (
          <Link className={styles.profileLink} to={`/studentProfileViewer/${student.student_id}`}>
            <Card
              key={student.student_id}
              name={student.name.toUpperCase()}
              image={student.profile_pic}
            />
          </Link>
        );
      })}
    </div>
  );
}
