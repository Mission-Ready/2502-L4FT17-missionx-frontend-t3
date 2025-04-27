import React, { useState } from "react";
import style from "../components/Body.module.css";
import laptopImage1 from "../../../../assets/Home/laptop1.png";
import laptopImage2 from "../../../../assets/Home/laptop2.png";
import laptopImage3 from "../../../../assets/Home/laptop3.png";
import laptopImage4 from "../../../../assets/Home/laptop4.png";
import animation from "../../../../assets/Home/animation.png";
import augreality from "../../../../assets/Home/augreality.png";
import chatbots from "../../../../assets/Home/chatbots.png";
import games from "../../../../assets/Home/games.png";
import group1 from "../../../../assets/Home/group1.png";
import group2 from "../../../../assets/Home/group2.png";
import group3 from "../../../../assets/Home/group3.png";
import group4 from "../../../../assets/Home/group4.png";
import star from "../../../../assets/Home/star.png";
import Button from "@mui/material/Button";
import { Dialog } from "@mui/material";
import classroom from "../../../../assets/Home/classroom.png";
import Radio from "@mui/material/Radio";
import LoginAndSignup from "../../LoginAndSignup/LoginAndSignup";

export default function Body() {
  //Toggle key competency button
  const [isKeyCompetenciesClicked, setIsKeyCompetenciesClicked] =
    useState(false);

  const toggleKeyCompetenciesClicked = () => {
    setIsKeyCompetenciesClicked((prev) => !prev);
  };

  // Handling button/Image clicks to update the displayed image on the right side
  const [activeImage, setActiveImage] = useState(laptopImage1);

  const handleClickAnimation = () => {
    setActiveImage(laptopImage1);
  };
  const handleClickAugreality = () => {
    setActiveImage(laptopImage2);
  };
  const handleClickChatbots = () => {
    setActiveImage(laptopImage3);
  };
  const handleClickGames = () => {
    setActiveImage(laptopImage4);
  };

  //Open and close Sign Up page

  const [isSignUpClicked, setIsSignUpClicked] = useState(false);

  const openModal = () => setIsSignUpClicked(true);
  const closeModal = () => setIsSignUpClicked(false);

  return (
    <div>
      <div className={style.whatWeOfferSection}>
        {/* what we offer section */}
        <section className={style.leftSection}>
          <h1
            style={{
              fontFamily: "Nunito, Bold",
              fontSize: "40px",
              color: "#6C6C6C",
              width: "30em",
            }}
          >
            What we offer
          </h1>
          <h4
            style={{
              fontFamily: "Nunito, Bold",
              fontSize: "24px",
              color: "#6C6C6C",
              width: "30em",
            }}
          >
            The Creative Problem Solving programme is series of digital creation
            projects aimed to encourage self-motivation and student agency,
            designed by New Zealand’s leading IT industry experts and schools.
          </h4>

          <h2
            style={{
              fontFamily: "Nunito, Bold",
              fontSize: "34px",
              color: "#6C6C6C",
              width: "30em",
            }}
          >
            What will students create?
          </h2>

          {/* /* left section buttons that talk to the image in the right section */}
          <div className={style.studentsCreateButtons}>
            <img
              onClick={handleClickAnimation}
              src={animation}
              alt="animation"
            />

            <img
              onClick={handleClickAugreality}
              src={augreality}
              alt="augreality"
            />
            <img onClick={handleClickChatbots} src={chatbots} alt="chatbots" />
            <img onClick={handleClickGames} src={games} alt="games" />
          </div>
        </section>

        {/* images section connected to the what we offer section */}
        <section className={style.rightSection}>
          <img src={activeImage} alt="Active content" />
        </section>

        <section className={style.radioButton}>
          <Radio onChange={handleClickAnimation} name="radio-buttons" />
          <Radio onChange={handleClickAugreality} name="radio-buttons" />
          <Radio onChange={handleClickChatbots} name="radio-buttons" />
          <Radio onChange={handleClickGames} name="radio-buttons" />
        </section>
      </div>

      {/* Teaching kids programming sections with photos */}
      <div className={style.groupContainer}>
        <h1
          style={{
            fontFamily: "Nunito, Bold",
            fontSize: "30px",
            color: "#6C6C6C",
          }}
        >
          {" "}
          Teaching kids programming and digital skills is more than just writing
          code.
        </h1>
        ;
        <div className={style.groupImages}>
          <img src={group1} alt="group1" />
          <img src={group2} alt="group2" />
          <img src={group3} alt="group3" />
          <img src={group4} alt="group4" />
        </div>
      </div>

      {/* how our programmes helps teachers and schools section */}

      <div className={style.moreInfoContainer}>
        <h1
          style={{
            fontFamily: "Nunito, Bold",
            fontSize: "30px",
            color: "#6C6C6C",
          }}
        >
          {" "}
          How our programme helps teachers and schools
        </h1>

        <div className={style.moreInfoButtons}>
          <Button variant="outlined">LEARNING PATHWAYS</Button>
          <Button variant="outlined">DIGITAL TECHNOLOGIES</Button>
          <Button variant="outlined" onClick={toggleKeyCompetenciesClicked}>
            KEY COMPETENCIES
          </Button>
          <Button variant="outlined">IR4.0</Button>
        </div>

        {/* Key Competency button toggle */}

        {isKeyCompetenciesClicked && (
          <div>
            {/* pop up for key competencies */}
            <div
              className={style.informationOnClick}
              style={{
                fontFamily: "Sans, Regular ",
                fontSize: "16px",
                color: "#606060",
                backgroundColor: "#EFEFF1",
              }}
            >
              <h2
                style={{
                  fontFamily: "Nunito, Bold",
                  fontSize: "30px",
                  color: "#606060",
                }}
              >
                Enhance key competencies
              </h2>

              <h3
                style={{
                  fontFamily: "Nunito, Bold",
                  fontSize: "20px",
                  color: "#606060",
                }}
              >
                The programme enhances capabilities of students in the 5 Key
                Competencies identified in the New Zealand Curriculum:
              </h3>

              <div className={style.keyCompetencies}>
                <h2>
                  <img src={star} alt="star" />
                  THINKING{" "}
                </h2>
                <h3>
                  In particular the programme focused on problem solving, design
                  thinking and computational thinking.{" "}
                </h3>

                <h2>
                  <img src={star} alt="star" />
                  DISCERNING CODES{" "}
                </h2>
                <h3>
                  Analyzing language, symbols, and texts in order to understand
                  and make sense of the codes in which knowledge is expressed.
                </h3>

                <h2>
                  <img src={star} alt="star" />
                  SELF-MANAGEMENT{" "}
                </h2>
                <h3>
                  Projects and challenges are designed to motivate students to
                  explore and experiment with self-motivation
                </h3>

                <h2>
                  <img src={star} alt="star" />
                  RELATIONSHIPS WITH PEERS
                </h2>
                <h3>
                  The programme is designed with unplugged sessions where
                  students interact in a range of different situations,
                  including things like being able to listen well, recognize
                  different points of view, and share ideas.
                </h3>

                <h2>
                  <img src={star} alt="star" />
                  PARTICIPATION AND COLLABORATION{" "}
                </h2>
                <h3>
                  The programme encourages students to be involved in
                  communities, such as family, whānau, school, and contribute
                  and make connections with other people
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ENQUIRE NOW SECTION */}
      <div className={style.enquireNow}>
        <section className={style.enquireNowLeft}>
          <img src={classroom} alt="classroom" />
        </section>

        <section className={style.enquireNowRight}>
          <h1
            style={{
              fontFamily: "Nunito, Bold",
              fontSize: "40px",
              color: "#6C6C6C",
              width: "30em",
            }}
          >
            What are you waiting for?
          </h1>
          <br />
          <br />
          <h3
            style={{
              fontFamily: "Nunito, Bold",
              fontSize: "30px",
              color: "#6C6C6C",
              width: "30em",
            }}
          >
            Start teaching Digital Technologies today.
          </h3>

          <h4
            style={{
              fontFamily: "Nunito, Bold",
              fontSize: "20px",
              color: "#6C6C6C",
              width: "30em",
            }}
          >
            If you need more information, we are happy to answer any questions
            you may have.
          </h4>
          <div className={style.button}>
            {/* buttons */}
            <button className={style.learnMore}>Learn More</button>

            {/* Sign up Button to open Log In and sign up Modal  */}

            <button className={style.signupButton} onClick={openModal}>
              Sign up{" "}
            </button>
            {isSignUpClicked && <LoginAndSignup onClose={closeModal} />}
          </div>
        </section>
      </div>
    </div>
  );
}
