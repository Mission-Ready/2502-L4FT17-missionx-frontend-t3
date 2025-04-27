import React from 'react';
import styles from './ShaziasNavbar.module.css';
import star from "../../../assets/Home/star.png"
import LevelUpWorksWhite from '../../../assets/Navbar/LevelUpWorks-white.png'
import JasminaSalvador from '../../../../public/images/teachers/JasminaSalvador.png'
import MaoriFlag from '../../../assets/Navbar/MaoriFlag.png'
import NZFlag from '../../../assets/Navbar/NZFlag.png'
import { Link } from 'react-router-dom';


export default function ShaziasNavbar() {
  return (
    <div className= {styles.container}>

        <div className={styles.star}>
          <img src={LevelUpWorksWhite } alt="LevelUpWorksWhite "/>
        </div>
       
        <nav className= {styles.mainNav}>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/ProjectLibrary"><li>PROJECTS</li></Link>
            <li>TEACHERS</li>
        </nav>
     
        <div className= {styles.languageAndLogin}>
            
            <nav className={styles.outerUserBox}>
                <h4 style={{fontSize:'11px',padding:'3px'}}>LANG<img style={
                  {top: "8px",left:'1617px',width: '24px',height: '12px'}} src={MaoriFlag}alt="Maori Flag" /><img style={{top: "8px",left:'1617px',width: '24px',height: '12px'}} src={NZFlag} alt="NZ Flag" /></h4>
                <Link to="/teacherProfileViewer/34" className={styles.linkStudentProfileViewer}>
                <div className={styles.userBox}>
                   <img className={styles.userImage} src={JasminaSalvador} alt="User Pfp" /><h3>Jasmina Salvador</h3>
                </div>
                </Link>
            </nav>

        </div>


    </div>
  )
}