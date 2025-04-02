import KerrysFooter from "../components/KerrysFooter"
import ShaziasNavbar from "../components/ShaziasNavbar"
import styles from "./ProjectLibrary.module.css"
import {useState} from "react"

import Project01 from "../../../../public/images/projects/Project01.png"
import Project02 from "../../../../public/images/projects/Project02.png"
import Project03 from "../../../../public/images/projects/Project03.png"
import Project04 from "../../../../public/images/projects/Project04.png"
import Project05 from "../../../../public/images/projects/Project05.png"
import Project06 from "../../../../public/images/projects/Project06.png"
import Project07 from "../../../../public/images/projects/Project07.png"
import Project08 from "../../../../public/images/projects/Project08.png"
import Project09 from "../../../../public/images/projects/Project09.png"
import Project10 from "../../../../public/images/projects/Project10.png"
import Project11 from "../../../../public/images/projects/Project11.png"
import Project12 from "../../../../public/images/projects/Project12.png"
import Project13 from "../../../../public/images/projects/Project13.png"
import Project14 from "../../../../public/images/projects/Project14.png"
import Project15 from "../../../../public/images/projects/Project15.png"




function ProjectLibrary() {
    const [checkedFree, setCheckedFree] = useState(false)
    const [checkedPremium, setCheckedPremium] = useState(false)


    const [checkedAnimation, setCheckedAnimation] = useState(false)
    const [checkedGame, setCheckedGame] = useState(false)
    const [checkedChatbot, setCheckedChatbot] = useState(false)
    const [checkedAugmentedReality, setCheckedAugmentedReality] = useState(false)

    
    const [checkedOneToFour, setCheckedOneToFour] = useState(false)
    const [checkedFiveToSix, setCheckedFiveToSix] = useState(false)
    const [checkedSevenToEight, setCheckedSevenToEight] = useState(false)
    const [checkedNineToThirteen, setCheckedNineToThirteen] = useState(false)


    const [checkedComputerScience, setCheckedComputerScience] = useState(false)
    const [checkedMaths, setCheckedMaths] = useState(false)
    const [checkedScience, setCheckedScience] = useState(false)
    const [checkedLanguage, setCheckedLanguage] = useState(false)
    const [checkedArt, setCheckedArt] = useState(false)
    const [checkedMusic, setCheckedMusic] = useState(false)

    const [selectedTier, setSelectedTier] = useState("BEGINNER")
    const [selectedItems, setSelectedItems] = useState("ALL")





   
  return (
    <div className={styles.Background}>
      <div id="top" />

      <ShaziasNavbar></ShaziasNavbar>

    <div className={styles.outerBox}>
      <section className={styles.filterBarBox}>
        <div className={styles.innerFilterBarBox}>
        
        <div>
          <h4>SUBSCRIPTION</h4><hr />
          <label>
            <input type="checkbox"
            checked={checkedFree}
            onChange={(e) => setCheckedFree(e.target.checked)} />
            Free
          </label>
          <label>
            <input type="checkbox"
            checked={checkedPremium}
            onChange={(e) => setCheckedPremium(e.target.checked)} />
            Premium
          </label>
          </div>

        <div>
          <h4>ACTIVITY TYPE</h4><hr />
          <label>
            <input type="checkbox"
            checked={checkedAnimation}
            onChange={(e) => setCheckedAnimation(e.target.checked)} />
            Animation
          </label>

          <label>
            <input type="checkbox"
            checked={checkedGame}
            onChange={(e) => setCheckedGame(e.target.checked)} />
            Game
          </label>
          <label>
            <input type="checkbox"
            checked={checkedChatbot}
            onChange={(e) => setCheckedChatbot(e.target.checked)} />
            Chatbot
          </label>
          <label>
            <input type="checkbox"
            checked={checkedAugmentedReality}
            onChange={(e) => setCheckedAugmentedReality(e.target.checked)} />
            Augmented Reality
          </label>

        </div>
        <div>
          <h4>YEAR LEVEL</h4><hr />
          <label>
            <input type="checkbox"
            checked={checkedOneToFour}
            onChange={(e) => setCheckedOneToFour(e.target.checked)} />
            1 - 4
          </label>
          <label>
            <input type="checkbox"
            checked={checkedFiveToSix}
            onChange={(e) => setCheckedFiveToSix(e.target.checked)} />
            5 - 6
          </label>
          <label>
            <input type="checkbox"
            checked={checkedSevenToEight}
            onChange={(e) => setCheckedSevenToEight(e.target.checked)} />
            7 - 8
          </label>
          <label>
            <input type="checkbox"
            checked={checkedNineToThirteen}
            onChange={(e) => setCheckedNineToThirteen(e.target.checked)} />
            9 - 13
          </label>

        </div>
        <div>
          <h4>SUBECT MATTER</h4><hr />
          <label>
            <input type="checkbox"
            checked={checkedComputerScience}
            onChange={(e) => setCheckedComputerScience(e.target.checked)} />
            Computer Science
          </label>
          <label>
            <input type="checkbox"
            checked={checkedMaths}
            onChange={(e) => setCheckedMaths(e.target.checked)} />
            Maths
          </label>
          <label>
            <input type="checkbox"
            checked={checkedScience}
            onChange={(e) => setCheckedScience(e.target.checked)} />
            Science
          </label>
          <label>
            <input type="checkbox"
            checked={checkedLanguage}
            onChange={(e) => setCheckedLanguage(e.target.checked)} />
            Language
          </label>
          <label>
            <input type="checkbox"
            checked={checkedArt}
            onChange={(e) => setCheckedArt(e.target.checked)} />
            Art
          </label>
          <label>
            <input type="checkbox"
            checked={checkedMusic}
            onChange={(e) => setCheckedMusic(e.target.checked)} />
            Music
          </label>

        </div>

        </div>

      </section>

      <section className={styles.projectsBox}>
        <div>
          <h1>PROJECTS</h1>
          <p>Welcome to the project library. You can use the filters on the 
             right to help you search for specific projects</p>
        </div>
        <div className={styles.filterTopBar}>
          <div className={styles.filterTier}>
            <button className={`${styles.tierBtn} ${styles.beginnerBtn} ${selectedTier === "BEGINNER" ? styles.active : ""}`}
            onClick={() => setSelectedTier("BEGINNER")}>BEGINNER</button>

            <button className={`${styles.tierBtn} ${styles.intermediateBtn} ${selectedTier === "INTERMEDIATE" ? styles.active : ""}`}
            onClick={() => setSelectedTier("INTERMEDIATE")}>INTERMEDIATE</button>
            <button className={`${styles.tierBtn} ${styles.advancedBtn} ${selectedTier === "ADVANCED" ? styles.active : ""}`}
            onClick={() => setSelectedTier("ADVANCED")}>ADVANCED</button>

          </div>
          <div className={styles.filterItems}>
            <p>SHOW</p>
            <div>
               <button className={`${styles.itemsBtn} ${styles.fiveBtn} ${selectedItems === "FIVE" ? styles.active : ""}`}
            onClick={() => setSelectedItems("FIVE")}>5</button>
            <button className={`${styles.itemsBtn} ${styles.tenBtn} ${selectedItems === "TEN" ? styles.active : ""}`}
            onClick={() => setSelectedItems("TEN")}>10</button>
            <button className={`${styles.itemsBtn} ${styles.allBtn} ${selectedItems === "ALL" ? styles.active : ""}`}
            onClick={() => setSelectedItems("ALL")}>All</button>
            </div>
           

          </div>

        </div>
      
      <div className={styles.projectContainer}>
        <div>
          <img src={Project01} alt="" />
          <h2><strong>Introduction</strong></h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project02} alt="" />
          <h2>My Birthday</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project03} alt="" />
          <h2>10 Block Challenge</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project04} alt="" />
          <h2>Build a band</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project05} alt="" />
          <h2>The bear and the monkey</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project06} alt="" />
          <h2>Debugging</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project07} alt="" />
          <h2>About me</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project08} alt="" />
          <h2>I am here!</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project09} alt="" />
          <h2>Funny faces</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project10} alt="" />
          <h2>It tickles!</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project11} alt="" />
          <h2>Penguin in a Desert</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project12} alt="" />
          <h2>Time Travel</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project13} alt="" />
          <h2>Birthday Card</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project14} alt="" />
          <h2>The Lion and the Mouse part 1</h2>
          <h4>BEGINNER | Animation</h4>
        </div>
        <div>
          <img src={Project15} alt="" />
          <h2>The Lion and the</h2>
          <h4>BEGINNER | Animation</h4>
        </div>

      </div>

      </section>
    </div>

    <div className={styles.backBtns}>
      <a href="#top"><button className={styles.backToTop}>BACK TO TOP</button></a>
      <button className={styles.backToDash}> BACK TO DASHBOARD</button>
    </div>

      <KerrysFooter></KerrysFooter>
    </div>
  )
}

export default ProjectLibrary