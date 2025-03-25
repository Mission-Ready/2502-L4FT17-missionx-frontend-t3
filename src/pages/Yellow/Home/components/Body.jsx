import React from 'react'
import style from '../components/Body.module.css'
import laptopImage1 from '../../../../assets/Home/laptop1.png'
import animation from "../../../../assets/Home/animation.png"
import augreality from "../../../../assets/Home/augreality.png"
import chatbots from "../../../../assets/Home/chatbots.png"
import games from "../../../../assets/Home/games.png"
import group1 from "../../../../assets/Home/group1.png"
import group2 from "../../../../assets/Home/group2.png"
import group3 from "../../../../assets/Home/group3.png"
import group4 from "../../../../assets/Home/group4.png"
import star from '../../../../assets/Home/star.png';
import Button from '@mui/material/Button';




export default function Body() {




  return (
    <div>
        <section className={style.leftSection}>
            <h1 style = {{fontFamily: "Nunito, Bold", fontSize:"40px",color:"#6C6C6C", width:"30em"}}>What we offer</h1>
            <h4 style = {{fontFamily: "Nunito, Bold", fontSize:"24px",color:"#6C6C6C",width:"30em"}}>The Creative Problem Solving programme is series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand’s leading IT industry experts and schools.</h4>

            <h2 style = {{fontFamily: "Nunito, Bold", fontSize:"34px",color:"#6C6C6C",width:"30em"}}>What will students create?</h2>

            <div className={style.studentsCreateButtons}>
            <img src={animation} alt="animation" />
            <img src={augreality} alt="augreality" />
            <img src={chatbots} alt="chatbots" />
            <img src={games} alt="games" />
            </div>
            



        </section>

        <section className={style.rightSection}>
            <img src={laptopImage1} alt="laptopImage1" />
        </section>


        <div className= {style.groupContainer}>

           <h1 style = {{fontFamily: "Nunito, Bold", fontSize:"30px",color:"#6C6C6C"}}> Teaching kids programming and digital skills is more than just writing code.</h1>;

           <div className={style.groupImages}>
              <img  src= {group1} alt="group1" />
              <img src= {group2} alt="group2" />
              <img src= {group3} alt="group3" />
              <img src= {group4} alt="group4" />
           </div>

        </div>

        <div className={style.moreInfoContainer}>
           <h1 style = {{fontFamily: "Nunito, Bold", fontSize:"30px",color:"#6C6C6C"}}> How our programme helps teachers and schools</h1>

           <div className={style.moreInfoButtons}>
           <Button variant="outlined">LEARNING PATHWAYS</Button>
           <Button variant="outlined">DIGITAL TECHNOLOGIES</Button>
           <Button variant="outlined">KEY COMPETENCIES</Button>
           <Button variant="outlined">IR4.0</Button>
           </div>

        <div>

            

            <div className={style.informationOnClick} style = {{color:"#606060", backgroundColor:"#EFEFF1"}}>

                    <h2 style = {{fontFamily: "Nunito, Bold", fontSize:"30px",color:"#606060"}}>Enhance key competencies</h2>

                    <h3 style = {{fontFamily: "Nunito, Bold", fontSize:"20px",color:"#606060"}}>The programme enhances capabilities of students in the 5 Key Competencies identified in the New Zealand Curriculum:</h3>

              <div>             
                     <h2><img src={star} alt="star" />THINKING </h2>
                    <h3>In particular the programme focused on problem solving, design thinking and computational thinking. </h3>

                    <h2><img src={star} alt="star" />DISCERNING CODES </h2>
                    <h3>Analyzing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.</h3> 
                    

                    <h2><img src={star} alt="star" />SELF-MANAGEMENT </h2>
                      <h3>Projects and challenges are designed to motivate students to explore and experiment with self-motivation</h3> 
                      
                    <h2><img src={star} alt="star" />RELATIONSHIPS WITH PEERS</h2>
                    <h3>The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognize different points of view, and share ideas.</h3> 
                      
                    <h2><img src={star} alt="star" />PARTICIPATION AND COLLABORATION </h2> 
                      <h3>The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people</h3>
              </div>



            </div>

           </div>
           
        </div>

        

    </div>
  )
}
