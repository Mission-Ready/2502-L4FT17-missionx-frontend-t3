import styles from "./HelpRequest.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HelpRequest() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4000/api/request_page");
        const result = await response.json();
        setStudents(result.data);
      } catch (error) {
        alert("Error: " + ". Please check if the API path is correct.");
      }
    }
    fetchData();
  }, []);

  // Function to update date and done mark
  async function markAsRead() {
    try {
      const doneStudents = students.filter((student) => student.done);

      for (const student of doneStudents) {
        const response = await fetch("http://localhost:4000/api/markAsDone", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ request_id: student.request_id }),
        });

        if (!response.ok) {
          alert(`Failed to update request_id: ${student.request_id}`);
        }
      }

      // Remove marked students from the list
      setStudents(students.filter((student) => !student.done));
    } catch (error) {
      alert("Error updating records:", error);
    }
  }

  function checkboxChange(id) {
    setStudents(
      students.map((student) =>
        student.request_id === id
          ? { ...student, done: !student.done }
          : student
      )
    );
  }

  return (
    <section className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <p className={styles.helpRequest}>HELP REQUESTS</p>
        <div className={styles.headBtn}>
          <p>📫 REPLY</p>
          <button className={styles.markBtn} onClick={markAsRead}>
            ✔️ MARK AS READ
          </button>
        </div>
        <ul className={styles.listOfStudents}>
          {students.map((student) => {
            const formattedDate = new Date(
              student.date_created
            ).toLocaleDateString("en-US", {
              day: "2-digit",
              weekday: "short",
              year: "numeric",
            });

            return (
              <section key={student.id} className={styles.middle}>
                <input
                  className={styles.checking}
                  type="checkbox"
                  style={{
                    width: "50px",
                    height: "50px",
                    margin: "5px 0 50px 0",
                  }}
                  checked={student.done}
                  onChange={() => checkboxChange(student.request_id)}
                />
                <li className={styles.box}>
                  <img
                    className={styles.img}
                    src={`${student.profile_pic}`}
                    alt=""
                  />
                  <div className={styles.dateTimeContainer}>
                    <div className={styles.text}>
                      {student.name.split(" ")[0].toUpperCase()} needs help with{" "}
                      {student.gender === "Female" ? "her" : "his"} project.
                    </div>
                    <div className={styles.dateTime}>
                      <span className={styles.spanDate}>
                        {new Date(student.date_created).toLocaleDateString(
                          "en-US",
                          {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </span>
                      <span className={styles.spanTime}>
                        {new Date(
                          new Date(student.date_created).setHours(
                            Math.floor(Math.random() * 24),
                            Math.floor(Math.random() * 60)
                          )
                        ).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                </li>
              </section>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
