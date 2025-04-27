import { useNavigate } from "react-router-dom";
import styles from "./LoginAndSignup.module.css";
import { useState } from "react";
import students from "../../../assets/LoginSignup/students.png";
import teachers from "../../../assets/LoginSignup/teachers.png";
import esc from "../../../assets/LoginSignup/esc.png";

export default function LoginAndSignup({ onClose }) {
  const [isStudentLogIn, setIsStudentLogIn] = useState(true);
  const [isTeacherLogIn, setIsTeacherLogIn] = useState(true);
  const [isStudentEmail, setIsStudentEmail] = useState("");
  const [isStudentPassword, setIsStudentPassword] = useState("");
  const [isStudentLoginResult, setIsStudentLoginResult] = useState("");
  const [isStudentSignUpResult, setIsStudentSignUpResult] = useState("");
  const [isTeacherEmail, setIsTeacherEmail] = useState("");
  const [isTeacherPassword, setIsTeacherPassword] = useState("");
  const [isTeacherLoginResult, setIsTeacherLoginResult] = useState("");
  const [isTeacherSignUpResult, setIsTeacherSignUpResult] = useState("");
  const navigate = useNavigate();

  const [studentSignUpForm, setStudentSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [teacherSignUpForm, setTeacherSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    general: "",
  });

  // Student Sign Up Logic

  //what happens when there is a change in the input field

  const handleStudentSignUpFormChange = (e) => {
    const { name, value } = e.target;

    // Clears any error on that field when typing
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setStudentSignUpForm((prev) => ({ ...prev, [name]: value }));
  };

  //what happens when sign up button is submitted or clicked
  const handleStudentSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(studentSignUpForm);
    setFormErrors({ email: "", general: "" }); // clear old errors

    fetch("http://localhost:4000/signup/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentSignUpForm),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        // if sign up is successful
        if (result.status === "Success") {
          setIsStudentSignUpResult(
            <span style={{ color: "green" }}>
              Sign Up Successful! Welcome, {result.name} Please wait a minute
              while we load your page{" "}
            </span>
          );
          setTimeout(() => {
            navigate(`/studentProfileViewer/${result.id}`); // Navigate to the "/dashboard" route after 3 seconds
          }, 3000); //
        }
        // what happens is sign up fails
        else if (result.status === "EmailError") {
          setIsStudentSignUpResult(
            <span style={{ color: "red" }}>
              SignUp Failed: {result.message}
            </span>
          );
        } else if (result.status === "ValidationError") {
          setIsStudentSignUpResult(
            <span style={{ color: "red" }}>
              Sign Up Failed: {result.message}
            </span>
          );
        }

        // Any other error
        else {
          setIsStudentSignUpResult(
            <span style={{ color: "red" }}>
              Something went wrong: {result.message || "Unknown error"}
            </span>
          );
        }
      })
      .catch((err) => {
        console.error("Error during SignUp", err);
        setIsStudentSignUpResult(
          <span style={{ color: "red" }}>
            Something went wrong! Please try again.
          </span>
        );
      });
  };

  // Teacher Sign Up Logic

  // what happens when input value is changed
  const handleTeacherSignUpFormChange = (e) => {
    const { name, value } = e.target;
    setTeacherSignUpForm((prev) => ({ ...prev, [name]: value }));
  };

  //what happens when submit button is clicked
  const handleTeacherSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(teacherSignUpForm);
    fetch("http://localhost:4000/signup/teacher", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teacherSignUpForm),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        //successful sign up message
        if (result.status === "Success") {
          setIsTeacherSignUpResult(
            <span style={{ color: "green" }}>
              Sign Up Successful! Welcome, {result.name} Please wait a minute
              while we load your page{" "}
            </span>
          );
          setTimeout(() => {
            navigate(`/teacherProfileViewer/${result.id}`); // Navigate to the "/dashboard" route after 3 seconds
          }, 3000); // Navigate to the "/dashboard" route
        } else if (result.status === "EmailError") {
          setIsTeacherSignUpResult(
            <span style={{ color: "red" }}>
              SignUp Failed: {result.message}
            </span>
          );

        }
        else if (result.status === "ValidationError") {
          setIsTeacherSignUpResult(
            <span style={{ color: "red" }}>
              Sign Up Failed: {result.message}
            </span>
          );
        }

        // Any other error
        else {
          setIsTeacherSignUpResult(
            <span style={{ color: "red" }}>
              Something went wrong: {result.message || "Unknown error"}
            </span>
          );
        }
      })
      .catch((err) => {
        console.error("Error during SignUp", err);
        setIsTeacherSignUpResult(
          <span style={{ color: "red" }}>
            Something went wrong! Please try again.
          </span>
        );
      });
  };

  /// Student LOG IN DB Request

  //on change in student email input field
  function studentEmailEntered(event) {
    const studentEmail = event.target.value;
    setIsStudentEmail(studentEmail);
  }
  //on change in student password input field
  function studentPassword(event) {
    const studentPassword = event.target.value;
    setIsStudentPassword(studentPassword);
  }

  //on submit student login and password
  function sendStudentLogin(event) {
    event.preventDefault(); // Prevent form refresh
    console.log("Logging In with:", isStudentEmail, isStudentPassword);

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
            <span style={{ color: "green" }}>
              Login Successful! Welcome, {result.name}
            </span>
          );
          setTimeout(() => {
            navigate(`/studentProfileViewer/${result.id}`); // Navigate to the "/dashboard" route after 3 seconds
          }, 3000); // Navigate to the "/dashboard" route
        } else if (result.status === "error") {
          setIsStudentLoginResult(
            <span style={{ color: "red" }}>Login Failed: {result.message}</span>
          );
        }
      })
      .catch((err) => {
        console.error("Error during login:", err);
        setIsStudentLoginResult(
          <span style={{ color: "red" }}>
            Something went wrong! Please try again.
          </span>
        );
      });
  }

  /// Teacher LOG IN DB Request

  ///on change in teacher email input field
  function teacherEmailEntered(event) {
    const teacherEmail = event.target.value;
    setIsTeacherEmail(teacherEmail);
  }

  //on change in teacher password input field

  function teacherPassword(event) {
    const teacherPassword = event.target.value;
    setIsTeacherPassword(teacherPassword);
  }

  //on submit in teacher log in information
  function sendTeacherLogin(event) {
    event.preventDefault(); // Prevent form refresh
    console.log("Logging In with:", isTeacherEmail, isTeacherPassword);

    fetch("http://localhost:4000/login/teacher", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: isTeacherEmail,
        password: isTeacherPassword,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.status === "success") {
          setIsTeacherLoginResult(
            <span style={{ color: "green" }}>
              Login Successful! Welcome, {result.name}
            </span>
          );
          setTimeout(() => {
            navigate(`/teacherProfileViewer/${result.id}`); // Navigate to the "/dashboard" route after 3 seconds
          }, 3000); // Navigate to the "/dashboard" route
        } else if (result.status === "error") {
          setIsTeacherLoginResult(
            <span style={{ color: "red" }}>Login Failed: {result.message}</span>
          );
        }
      })
      .catch((err) => {
        console.error("Error during login:", err);
        setIsTeacherLoginResult(
          <span style={{ color: "red" }}>
            Something went wrong! Please try again.
          </span>
        );
      });
  }

  return (
    <div className={styles.modal}>
      {/* <LoginAndSignUpCard/> */}
      <div className={styles.signUpContainer}>
        {/* Students Log in and Sign up Buttons   */}
        <div>
          <button onClick={onClose} className={styles.escButton}>
            <img className={styles.escButton} src={esc} alt="esc" />
          </button>

          <img src={students} alt=" students" />

          <section>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Nunito,Black",
                color: "#707070",
                fontSize: "42px",
              }}
            >
              Students
            </h1>
          </section>

          <div className={styles.studentLoginAndSignUpButton}>
            <button
              style={{
                fontFamily: "Open Sans,Bold",
                color: "#707070",
                fontSize: "24px",
                border: "none",
                paddingRight: "30px",
                backgroundColor: "transparent",
              }}
              className={isStudentLogIn ? styles.active : ""}
              onClick={() => setIsStudentLogIn(true)}
            >
              LogIn
            </button>
            <button
              style={{
                fontFamily: "Open Sans,Bold",
                color: "#707070",
                fontSize: "24px",
                border: "none",
                backgroundColor: "transparent",
              }}
              className={!isStudentLogIn ? styles.active : ""}
              onClick={() => setIsStudentLogIn(false)}
            >
              SignUp
            </button>
          </div>

          {/* Student Log in section  */}

          {isStudentLogIn ? (
            <>
              <form className={styles.studentLogInForm}>
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
                <button onClick={sendStudentLogin}>LOG IN</button>
                <div
                  className={styles.studentLoginResult}
                  value={isStudentLoginResult}
                >
                  {isStudentLoginResult}
                </div>
              </form>{" "}
            </>
          ) : (
            ""
          )}

          {/* Student Sign up section  */}
          {!isStudentLogIn ? (
            <form
              className={styles.studentSignUpInputField}
              onSubmit={handleStudentSignUpSubmit}
            >
              <input
                className={styles.studentSignUpName}
                type="name"
                placeholder="Full Name"
                name="name"
                onChange={handleStudentSignUpFormChange}
              ></input>
              <input
                className={styles.studentSignUpEmail}
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={handleStudentSignUpFormChange}
              ></input>
              <input
                className={styles.studentSignUpPassword}
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleStudentSignUpFormChange}
              ></input>
              <input
                className={styles.studentSignUpConfirmPassword}
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleStudentSignUpFormChange}
              ></input>
              <button type="submit">Sign Up</button>
              <div
                className={styles.studentSignUpResult}
                value={isStudentSignUpResult}
              >
                {isStudentSignUpResult}
              </div>
            </form>
          ) : (
            ""
          )}
        </div>

        {/* Teachers Sign Up and login button Section */}
        <div>
          <img src={teachers} alt=" teachers" />
          <section>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Nunito,Black",
                color: "#707070",
                fontSize: "42px",
              }}
            >
              Teacher
            </h1>
          </section>
          <section className={styles.teacherLoginAndSignUpButton}>
            <button
              style={{
                fontFamily: "Open Sans,Bold",
                color: "#707070",
                fontSize: "24px",
                border: "none",
                paddingRight: "30px",
                backgroundColor: "transparent",
              }}
              className={isTeacherLogIn ? styles.active : ""}
              onClick={() => setIsTeacherLogIn(true)}
            >
              Log In
            </button>
            <button
              style={{
                fontFamily: "Open Sans,Bold",
                color: "#707070",
                fontSize: "24px",
                border: "none",
                backgroundColor: "transparent",
              }}
              className={!isTeacherLogIn ? styles.active : ""}
              onClick={() => setIsTeacherLogIn(false)}
            >
              Sign Up
            </button>
          </section>

          {/* Teacher Log in section  */}

          {isTeacherLogIn ? (
            <>
              <form className={styles.teacherLogInForm}>
                <input
                  className={styles.teacherLoginEmail}
                  type="email"
                  placeholder="Email Address"
                  value={isTeacherEmail}
                  onChange={teacherEmailEntered}
                />
                <input
                  className={styles.teacherLoginPassword}
                  type="password"
                  placeholder="Password"
                  value={isTeacherPassword}
                  onChange={teacherPassword}
                />
                <button onClick={sendTeacherLogin}>LOG IN</button>
                <div
                  className={styles.teacherLoginResult}
                  value={isTeacherLoginResult}
                >
                  {isTeacherLoginResult}
                </div>
              </form>
            </>
          ) : (
            ""
          )}

          {/* Teacher sign up section  */}

          {!isTeacherLogIn ? (
            <form
              className={styles.teacherSignUpInputField}
              onSubmit={handleTeacherSignUpSubmit}
            >
              <input
                className={styles.teacherSignUpName}
                type="name"
                placeholder="Full Name"
                name="name"
                onChange={handleTeacherSignUpFormChange}
              ></input>
              <input
                className={styles.teacherSignUpEmail}
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={handleTeacherSignUpFormChange}
              ></input>
              <input
                className={styles.teacherSignUpPassword}
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleTeacherSignUpFormChange}
              ></input>
              <input
                className={styles.teacherSignUpConfirmPassword}
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleTeacherSignUpFormChange}
              ></input>
              <button type="submit">Sign Up</button>
              <div
                className={styles.teacherSignUpResult}
                value={isTeacherSignUpResult}
              >
                {isTeacherSignUpResult}
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
