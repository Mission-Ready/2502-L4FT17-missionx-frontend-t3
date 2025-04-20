import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import star from "../../../../assets/Home/star.png";
import LevelUpWorksWhite from "../../../../assets/Navbar/LevelUpWorks-white.png";
import AvatarWhite from "../../../../assets/Navbar/Avatar-white.png";
import MaoriFlag from "../../../../assets/Navbar/MaoriFlag.png";
import NZFlag from "../../../../assets/Navbar/NZFlag.png";
import { useState } from "react";
import students from "../../../../assets/LoginSignup/students.png";
import teachers from "../../../../assets/LoginSignup/teachers.png";
import esc from "../../../../assets/LoginSignup/esc.png";

// import LoginAndSignUpCard from "../../LoginAndSignup/components/LoginAndSignUpCard";

export default function Header() {
  const [isRegisterLoginClicked, setIsRegisterLoginClicked] = useState(false);
  // const LoginAndSignup = <Link to={"./loginAndSignup"}></Link>;
  const [isStudentLogIn, setIsStudentLogIn] = useState(true);
  const [isTeacherLogIn, setIsTeacherLogIn] = useState(true);
  const [isStudentEmail, setIsStudentEmail] = useState("");
  const [isStudentPassword, setIsStudentPassword] = useState("");
  const [isStudentLoginResult, setIsStudentLoginResult] = useState("");
  const [isTeacherEmail, setIsTeacherEmail] = useState("");
  const [isTeacherPassword, setIsTeacherPassword] = useState("");
  const [isTeacherLoginResult, setIsTeacherLoginResult] = useState("");
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
  

  const handleStudentSignUpFormChange = (e) => {
    const { name, value } = e.target;
    setStudentSignUpForm((prev) => 
      ( {...prev, [name]: value, })
    
    );
  };

  const handleStudentSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(studentSignUpForm);

        fetch("http://localhost:4000/signup/student", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({studentSignUpForm}
          ),
        });
  };
  
  const handleTeacherSignUpFormChange = (e) => {
    const { name, value } = e.target;
    setTeacherSignUpForm((prev) => ({ ...prev, [name]: value, })
    );

  };

  const handleTeacherSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(teacherSignUpForm);

  }



  function handleIsRegisterLoginClicked(e) {
    setIsRegisterLoginClicked(true);
  }

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

  function teacherEmailEntered(event) {
    const teacherEmail = event.target.value;
    setIsTeacherEmail(teacherEmail);
  }

  function teacherPassword(event) {
    const teacherPassword = event.target.value;
    setIsTeacherPassword(teacherPassword);
  }

  /// Student LOG IN DB Request

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
            navigate("/Home"); // Navigate to the "/dashboard" route after 3 seconds
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
            navigate("/studentProjectLibrary"); // Navigate to the "/dashboard" route after 3 seconds
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
    <div className={styles.container}>
      {/* //star logo */}
      <div className={styles.star}>
        <img src={LevelUpWorksWhite} alt="LevelUpWorksWhite " />
      </div>

      {/* //nav buttons */}
      <nav className={styles.mainNav}>
        <li>HOME</li>
        <li>FEATURES</li>
        <li>TEACHERS</li>
      </nav>

      {/* register and login plus language logo */}
      <div className={styles.languageAndLogin}>
        <nav>
          <h4 style={{ fontSize: "11px", padding: "3px" }}>
            LANG
            <img
              style={{
                top: "8px",
                left: "1617px",
                width: "24px",
                height: "12px",
              }}
              src={MaoriFlag}
              alt="Maori Flag"
            />
            <img
              style={{
                top: "8px",
                left: "1617px",
                width: "24px",
                height: "12px",
              }}
              src={NZFlag}
              alt="NZ Flag"
            />
          </h4>
          {/* Register Login BUtton */}
          <button
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={handleIsRegisterLoginClicked}
          >
            <img
              style={{
                top: "31px",
                left: "1497px",
                width: "24px",
                height: "24px",
              }}
              src={AvatarWhite}
              alt="Avatar White"
            />{" "}
            REGISTER|LOGIN
          </button>

          {/* Register and Login Modal */}
          {isRegisterLoginClicked && (
            <div className={styles.modal}>
              {/* <LoginAndSignUpCard/> */}
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
                  <div className={styles.studentLoginAndSignUpButton}>
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
                  </div>

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

                        <button onClick={sendStudentLogin}>LOG IN</button>
                        <div
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
                    </form>
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
                  <section className={styles.teacherLoginAndSignUpButton}>
                    <button
                      className={isTeacherLogIn ? styles.active : ""}
                      onClick={() => setIsTeacherLogIn(true)}
                    >
                      Log In
                    </button>
                    <button
                      className={!isTeacherLogIn ? styles.active : ""}
                      onClick={() => setIsTeacherLogIn(false)}
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
                      </div>
                      <div
                        className={styles.teacherLoginResult}
                        value={isTeacherLoginResult}
                      >
                        {isTeacherLoginResult}
                      </div>
                    </>
                  ) : (
                    ""
                  )}

                  {!isTeacherLogIn ? (
                    <form className={styles.teacherSignUpInputField}
                    onSubmit={handleTeacherSignUpSubmit}>
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
                    </form>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
