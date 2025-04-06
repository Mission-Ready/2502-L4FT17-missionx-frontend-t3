import React, { useState } from "react";
import styles from "./LoginAndSignUpCard.module.css";
import students from "../../../../assets/LoginSignup/students.png";
import teachers from "../../../../assets/LoginSignup/teachers.png";


export default function LoginAndSignUpCard() {
    const [isStudentLogIn, setIsStudentLogIn] = useState(true);
    const [isTeacherLogIn, setIsTeacherLogIn]= useState()
  
  return (
    <div className={styles.signUpContainer}>
      {/* Students Sign Up Section  */}
      <div>
        <img src={students} alt=" students" />
        <h1
          style={{
            fontFamily: "Nunito,Black",
            color: "#707070",
            fontSize: "42px",
          }}
        >
          Students
        </h1>
        <section>
          <button
            className={isStudentLogIn ? styles.active : ""}
            onClick={() => setIsStudentLogIn(true)}
          >
            LogIn
          </button>
          <button
            className={!isStudentLogIn ? styles.active : ""}
            onClick={() => setIsStudentLogIn(false)}
          >
            SignUp
          </button>
        </section>

              {isStudentLogIn ? <>
                  <div className={styles.studentLogInForm}>
                      <input type="email" placeholder="Email Address" />
                      <input type="password" placeholder="Password" />
                      <button>LOG IN</button>
                  </div> </> : ""}
              {!isStudentLogIn ?
                  <section className={styles.studentSignUpInputField}>
                      <input
                          type="name"
                          class="studentNameField"
                          placeholder="Full Name"
                      ></input>
                      <input
                          type="email"
                          class="studentEmailField"
                          placeholder="Email Address"
                      ></input>
                      <input
                          type="password"
                          class="studentPasswordField"
                          placeholder="Password"
                      ></input>
                      <input
                          type="password"
                          class="studentConfirmPasswordField"
                          placeholder="Confirm Password"
                      ></input>
                  </section> : ""}
      </div>

      {/* Teachers Sign Up Section */}
      <div>
        <img src={teachers} alt=" teachers" />
        <h1
          style={{
            fontFamily: "Nunito,Black",
            color: "#707070",
            fontSize: "42px",
          }}
        >
          Teachers
        </h1>
        <section>
          <button
            className={isTeacherLogIn ? styles.active : ""}
            onClick={() => setIsTeacherLogIn(false)}
          >
            Log In
          </button>
          <button
            className={!isTeacherLogIn ? styles.active : ""}
            onClick={() => setIsTeacherLogIn(true)}
          >
            Sign Up
          </button>
        </section>

        <section className={styles.teacherSignUpInputField}>
          <input
            type="name"
            class="teacherNameField"
            placeholder="Full Name"
          ></input>
          <input
            type="email"
            class="teacherEmailField"
            placeholder="Email Address"
          ></input>
          <input
            type="password"
            class="teacherPasswordField"
            placeholder="Password"
          ></input>
          <input
            type="password"
            class="teacherConfirmPasswordField"
            placeholder="Confirm Password"
          ></input>
        </section>
      </div>
    </div>
  );
}
