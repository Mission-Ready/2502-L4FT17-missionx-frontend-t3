import React from 'react';
import styles from './Header.module.css';
import star from '../../../../assets/Home/star.png';
import LevelUpWorksWhite from '../../../../assets/Navbar/LevelUpWorks-white.png'
import AvatarWhite from '../../../../assets/Navbar/Avatar-white.png'
import MaoriFlag from '../../../../assets/Navbar/MaoriFlag.png'
import NZFlag from '../../../../assets/Navbar/NZFlag.png'



export default function Header() {
  return (
    <div className= {styles.container}>

        {/* //star logo */}
        <div className={styles.star}>
          <img src={LevelUpWorksWhite } alt="LevelUpWorksWhite "/>
        </div>
       

       {/* //nav buttons */}
        <nav className= {styles.mainNav}>
            <li>HOME</li>
            <li>FEATURES</li>
            <li>TEACHERS</li>
        </nav>

        {/* register and login plus language logo */}
        <div className= {styles.languageAndLogin}>
            
            <nav >
                <h4 style={{fontSize:'11px',padding:'3px'}}>LANG<img style={
                  {top: "8px",left:'1617px',width: '24px',height: '12px'}} src={MaoriFlag}alt="Maori Flag" /><img style={{top: "8px",left:'1617px',width: '24px',height: '12px'}} src={NZFlag} alt="NZ Flag" /></h4>
                <h4><img style={{top: '31px', left: '1497px',width: '24px',height: '24px'}} src={AvatarWhite} alt="Avatar White" /> REGISTER|LOGIN</h4>
            </nav>

        </div>


    </div>
  )
}
