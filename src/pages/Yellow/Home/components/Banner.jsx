import React from "react";
import Hero from "../../../../assets/Home/hero.png";
import style from "./Banner.module.css"

function Banner() {
  return (
    <div className={style.container}>
      

      <h1 className={style.heroText}>
        <font color="#767676" style={{fontFamily:"Nunito, Black", fontSize: "60px", textAlign:"left"} }>Prepare young minds for a better</font>
        <font color="#42C0F6" style={{fontFamily:"Nunito, Black", fontSize: "60px", textAlign:"left"} }> future.</font>
      </h1>
      
      <h3 className={style.subHeroText} style={{color: "#767676", fontFamily:"Open Sans,Regular", fontSize: "24px",textAlign:"left"} } >
        Let us help you advance students in Digital Technologies and other
        learning areas with our project-based learning programme.
      </h3>

    <div className={style.button}>
      <button>Learn More</button>
    
      <button className={style.signupButton}>Sign up </button>

    </div>
    
    </div>
  );
}

export default Banner;
