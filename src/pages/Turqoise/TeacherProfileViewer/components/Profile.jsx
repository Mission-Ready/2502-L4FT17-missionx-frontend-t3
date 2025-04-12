import styles from "./Profile.module.css";
import JasminaSalvador from "../../../../../public/images/teachers/JasminaSalvador.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {
  const profileData = [
    { info: "School", 
     data: "Homai School" 
    },
    { info: "Date of Birth", 
     data: "25 June 1986" 
    },
    { info: "Contact No", 
     data: "027 754 2800" 
    },
    { info: "Email Address", 
     data: "jsalvador@hotmail.edu" 
    },
  ];

  return (
    <section className={styles.component}>
      <section className={styles.profileBox}>
        <div>
          <div className={styles.profileImageBox}>
            <img
              className={styles.profileImage}
              src={JasminaSalvador}
              alt="Teacher: Jasmina Salvador"
            />
          </div>
          <div className={styles.profileBoxButtons}>
            <button>EDIT PROFILE</button> <br /> <br />
            <button>CHANGE PHOTO</button>
          </div>
        </div>
      </section>

      <section className={styles.profileInfoBox}>
        <div className={styles.profileInfo}>
          <h1>Jasmina Salvador</h1>
        </div>
        {profileData.map((item, index) => (
          <div className={styles.profileData} key={index}>
            <div>
              <h3>{item.info}</h3>
            </div>
            <div>
              <h3>{item.data}</h3>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
export default Profile;
