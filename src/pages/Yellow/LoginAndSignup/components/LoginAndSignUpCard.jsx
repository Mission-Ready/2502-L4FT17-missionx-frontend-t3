import React, { useState } from "react";
import styles from "./LoginAndSignUpCard.module.css";
import students from "../../../../assets/LoginSignup/students.png";
import teachers from "../../../../assets/LoginSignup/teachers.png";

export default function LoginAndSignUpCard() {
  const [isStudentLogIn, setIsStudentLogIn] = useState(true);
  const [isTeacherLogIn, setIsTeacherLogIn] = useState(true);

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

        {isStudentLogIn ? (
          <>
            <div className={styles.studentLogInForm}>
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button>LOG IN</button>
            </div>{" "}
          </>
        ) : (
          ""
        )}
        {!isStudentLogIn ? (
          <section className={styles.studentSignUpInputField}>
            <input
              type="name"
              
              placeholder="Full Name"
            ></input>
            <input
              type="email"
              
              placeholder="Email Address"
            ></input>
            <input
              type="password"
              
              placeholder="Password"
            ></input>
            <input
              type="password"
              
              placeholder="Confirm Password"
            ></input>
          </section>
        ) : (
          ""
        )}
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

        {isTeacherLogIn ? 
          <>
            <div className={styles.teacherLogInForm}>
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button>LOG IN</button>
            </div>
          </>
         :
          ""}
              
        {!isTeacherLogIn ?
         <section className={styles.teacherSignUpInputField}>
          <input
            type="name"
            
            placeholder="Full Name"
          ></input>
          <input
            type="email"
            
            placeholder="Email Address"
          ></input>
          <input
            type="password"
            
            placeholder="Password"
          ></input>
          <input
            type="password"
            
            placeholder="Confirm Password"
          ></input>
        </section> : ""}

       
      </div>
    </div>
    
  );
}
