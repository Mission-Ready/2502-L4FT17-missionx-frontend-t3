import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4000/api/teacher");
        const result = await response.json();
        setTeachers(result.data);
      } catch (error) {
        console.error("errorrrrrrrr", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className={styles.component}>
      {teachers.map(function (teacher) {
        return (
          <div key={teacher.teachers_id} className={styles.teachers_id}>
            <section className={styles.profileBox}>
              <div>
                <div className={styles.profileImageBox}>
                  <img
                    className={styles.profileImage}
                    src={teacher.profile_pic}
                    alt="Teacher: Jasmina Salvador"
                  />
                </div>
                <ul className={styles.profileBoxButtons}>
                  <Link to="editProfile">
                    <button>EDIT PROFILE</button>
                  </Link>
                  <Link to="changePhoto">
                    <button>CHANGE PHOTO</button>
                  </Link>
                  <Link to="setting">
                    <button>SETTING</button>
                  </Link>
                </ul>
              </div>
            </section>

            <section className={styles.profileInfoBox}>
              <div className={styles.profileInfo}>
                <h1>{teacher.name}</h1>
              </div>

              <div className={styles.profileData}>
                <ul>
                  <li>School</li>
                  <li>Date of birth</li>
                  <li>Contact No</li>
                  <li>Email Address</li>
                </ul>
                <ul>
                  <li className={styles.list}> {teacher.school}</li>
                  <li className={styles.list}> {teacher.date_of_birth}</li>
                  <li className={styles.list}> {teacher.contact_number}</li>
                  <li className={styles.list}> {teacher.email}</li>
                </ul>
              </div>
            </section>
          </div>
        );
      })}
    </section>
  );
}
export default Profile;
