import React from 'react';
import styles from './ShaziasNavbar.module.css';
import star from "../../../assets/Home/star.png"
import LevelUpWorksWhite from '../../../assets/Navbar/LevelUpWorks-white.png'
import RawiriFletcher from '../../../../public/images/students/RawiriFletcher.png'
import MaoriFlag from '../../../assets/Navbar/MaoriFlag.png'
import NZFlag from '../../../assets/Navbar/NZFlag.png'



export default function ShaziasNavbar() {
  return (
    <div className= {styles.container}>

        <div className={styles.star}>
          <img src={LevelUpWorksWhite } alt="LevelUpWorksWhite "/>
        </div>
       
        <nav className= {styles.mainNav}>
            <li>HOME</li>
            <li>PROJECTS</li>
            <li>TEACHERS</li>
        </nav>
     
        <div className= {styles.languageAndLogin}>
            
            <nav >
                <h4 style={{fontSize:'11px',padding:'3px'}}>LANG<img style={
                  {top: "8px",left:'1617px',width: '24px',height: '12px'}} src={MaoriFlag}alt="Maori Flag" /><img style={{top: "8px",left:'1617px',width: '24px',height: '12px'}} src={NZFlag} alt="NZ Flag" /></h4>
                <div className={styles.userBox}>
                  <img className={styles.userImage} style={{top: '31px', left: '1497px',width: '24px',height: '24px'}} src={RawiriFletcher} alt="Avatar White" /> <h4>Rawiri Fletcher</h4>
                </div>
                
            </nav>

        </div>


    </div>
  )
}