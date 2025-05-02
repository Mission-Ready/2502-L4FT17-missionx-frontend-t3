import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {
  const [teachers, setTeachers] = useState([]);
  const { Id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:4000/api/teacher/${Id}`);
        const result = await response.json();
        setTeachers(result.data);
      } catch (error) {
        alert("Error: " + "Check page 404 or server");
      }
    }
    fetchData();
  }, [Id]);

  return (
    <section className={styles.component}>
      {teachers.length > 0 ? (
        teachers.map((teacher) => (
          <div key={teacher.teachers_id} className={styles.teachers_id}>
            <section className={styles.profileBox}>
              <div>
                <div className={styles.profileImageBox}>
                  <img
                    className={styles.profileImage}
                    src={teacher.profile_pic}
                    alt={`${teacher.name || "Not Available"}`}
                  />
                </div>
                <ul className={styles.profileBoxButtons}>
                  <Link to={`/editProfile/${teacher.teachers_id}`}>
                    <button>EDIT PROFILE</button>
                  </Link>
                  <Link to={`/changePhoto/${teacher.teachers_id}`}>
                    <button>CHANGE PHOTO</button>
                  </Link>
                  <Link to={`/setting/${teacher.teachers_id}`}>
                    <button>SETTING</button>
                  </Link>
                </ul>
              </div>
            </section>

            <section className={styles.profileInfoBox}>
              <div className={styles.profileInfo}>
                <h1>{teacher.name || "Not Available"}</h1>
              </div>

              <div className={styles.profileData}>
                <ul>
                  <li>School</li>
                  <li>Date of birth</li>
                  <li>Contact No</li>
                  <li>Email Address</li>
                </ul>
                <ul>
                  <li className={styles.list}>
                    {teacher.school || "Not Available"}
                  </li>
                  <li className={styles.list}>
                    {teacher.date_of_birth
                      ? new Date(teacher.date_of_birth)
                          .toLocaleDateString("en-NZ", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                          .replace(/ /g, " ")
                      : "Not Available"}
                  </li>
                  <li className={styles.list}>
                    {teacher.contact_number || "Not Available"}
                  </li>
                  <li className={styles.list}>
                    {teacher.email || "Not Available"}
                  </li>
                </ul>
              </div>
            </section>
          </div>
        ))
      ) : (
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Teacher data is Not Available.
        </h1>
      )}
    </section>
  );
}
export default Profile;
