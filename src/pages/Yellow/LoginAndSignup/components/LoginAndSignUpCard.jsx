import React, { useState } from "react";
import styles from "./LoginAndSignUpCard.module.css";
import students from "../../../../assets/LoginSignup/students.png";
import teachers from "../../../../assets/LoginSignup/teachers.png";
import esc from "../../../../assets/LoginSignup/esc.png";

export default function LoginAndSignUpCard() {
 
 const [isStudentLogIn, setIsStudentLogIn] = useState(true);
  const [isTeacherLogIn, setIsTeacherLogIn] = useState(true);
  const [isStudentEmail, setIsStudentEmail] = useState('')
  const [isStudentPassword, setIsStudentPassword] = useState('')
  const [isStudentLoginResult,setIsStudentLoginResult] = useState ('')

function handleIsEscClicked(e) {
  setIsRegisterLoginClicked(!true);
}

function studentEmailEntered(event) {
  const studentEmail = event.target.value;
  setIsStudentEmail(studentEmail);
}

function studentPassword(event) {
  const studentPassword = event.target.value;
  setIsStudentPassword(studentPassword);
}

function sendStudentLogin(event) {
  event.preventDefault();
  console.log("Logged In", isStudentEmail, isStudentPassword);

  fetch("http://localhost:4000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: isStudentEmail,
      password: isStudentPassword,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      if (result.status === "success") {
        setIsStudentLoginResult(
          <span style={{ color: "green" }}>Login Successful</span>
        );
      } else {
        setIsStudentLoginResult(
          <span style={{ color: "red" }}>Login Failed</span>
        );
      }
    })
    .catch((err) => {
      console.error("Error!!!!!!", err);
      setIsStudentLoginResult(
        <span style={{ color: "red" }}>Something went wrong!</span>
      );
    });
}
  
   


  return (
            <div className={styles.modal}>
                          <div className={styles.signUpContainer}>
                            <button
                              onClick={handleIsEscClicked}
                              className={styles.escButton}
                            >
                              <img className={styles.escButton} src={esc} alt="esc" />
                            </button>
            
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
                                  className={styles.studentLoginButton}
                                  {...(isStudentLogIn ? styles.active : "")}
                                  onClick={() => setIsStudentLogIn(true)}
                                >
                                  LogIn
                                </button>
                                <button
                                  className={styles.studentSignUpButton}
                                  {...(!isStudentLogIn ? styles.active : "")}
                                  onClick={() => setIsStudentLogIn(false)}
                                >
                                  SignUp
                                </button>
                              </section>
            
                              {isStudentLogIn ? (
                                <>
                                  <div className={styles.studentLogInForm}>
                                    <input
                                      className={styles.studentLoginEmail}
                                      type="email"
                                      name="email"
                                      value={isStudentEmail}
                                      placeholder="Email Address"
                                      onChange={studentEmailEntered}
                                    />
                                    <input
                                      className={styles.studentLoginPassword}
                                      type="password"
                                      name="password"
                                      value={isStudentPassword}
                                      placeholder="Password"
                                      onChange={studentPassword}
                                    />
                                    <div className={styles.studentLoginResult}></div>
                                    <button onClick={sendStudentLogin}>LOG IN</button>
                                    <div
                                      style={{
                                        fontFamily: "Nunito,Black",
                                        color: "#707070",
                                        fontSize: "20px",
                                      }}
                                      className={styles.studentLoginResult}
                                      value={isStudentLoginResult}
                                    >
                                      {isStudentLoginResult}
                                    </div>
                                  </div>{" "}
                                </>
                              ) : (
                                ""
                              )}
                              {!isStudentLogIn ? (
                                <section className={styles.studentSignUpInputField}>
                                  <input
                                    className={styles.studentSignUpName}
                                    type="name"
                                    placeholder="Full Name"
                                  ></input>
                                  <input
                                    className={styles.studentSignUpEmail}
                                    type="email"
                                    placeholder="Email Address"
                                  ></input>
                                  <input
                                    className={styles.studentSignUpPassword}
                                    type="password"
                                    placeholder="Password"
                                  ></input>
                                  <input
                                    className={styles.studentSignUpConfirmPassword}
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
            
                              {isTeacherLogIn ? (
                                <>
                                  <div className={styles.teacherLogInForm}>
                                    <input
                                      className={styles.teacherLoginEmail}
                                      type="email"
                                      placeholder="Email Address"
                                    />
                                    <input
                                      className={styles.teacherLoginPassword}
                                      type="password"
                                      placeholder="Password"
                                    />
                                    <div className={styles.teacherLoginResult}></div>
                                    <button>LOG IN</button>
                                  </div>
                                </>
                              ) : (
                                ""
                              )}
            
                              {!isTeacherLogIn ? (
                                <section className={styles.teacherSignUpInputField}>
                                  <input
                                    className={styles.teacherSignUpName}
                                    type="name"
                                    placeholder="Full Name"
                                  ></input>
                                  <input
                                    className={styles.teacherSignUpEmail}
                                    type="email"
                                    placeholder="Email Address"
                                  ></input>
                                  <input
                                    className={styles.teacherSignUpPassword}
                                    type="password"
                                    placeholder="Password"
                                  ></input>
                                  <input
                                    className={styles.teacherSignUpConfirmPassword}
                                    type="password"
                                    placeholder="Confirm Password"
                                  ></input>
                                </section>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
    
  );
}
