import React, { useState } from "react";
import style from "./Banner.module.css";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import LoginAndSignup from "../../LoginAndSignup/LoginAndSignup";

function Banner() {

  // Open SignUp Page as a Modal
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);

  const openModal = () => setIsSignUpClicked(true);
  const closeModal = () => setIsSignUpClicked(false);

  return (
    <div className={style.container}>
      {/* text */}
      <section>
        {" "}
        <h1 className={style.heroText}>
          <font
            color="#767676"
            style={{
              fontFamily: "Nunito, Black",
              fontSize: "60px",
              textAlign: "left",
            }}
          >
            Prepare young minds for a better{" "}
            <span
              color="#42C0F6"
              style={{
                fontFamily: "Nunito, Black",
                fontSize: "60px",
                textAlign: "left",
                color: "#42C0F6",
              }}
            >
              future.
            </span>
          </font>
         
        </h1>
        <h3
          className={style.subHeroText}
          style={{
            color: "#767676",
            fontFamily: "Open Sans,Regular",
            fontSize: "24px",
            textAlign: "left",
          }}
        >
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme.
          <div className={style.button}>
            {/* buttons */}
            <button className={style.learnMore}>Learn More</button>

            {/* Sign up Button to  open login and sign up Modal  */}

            <button className={style.signupButton} onClick={openModal}>
              Sign up{" "}
            </button>
            {isSignUpClicked && <LoginAndSignup onClose={closeModal} />}
          </div>
        </h3>
      </section>
    </div>
  );
}

export default Banner;
