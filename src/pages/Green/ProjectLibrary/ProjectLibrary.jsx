import KerrysFooter from "../components/KerrysFooter"
import ShaziasNavbar from "../components/ShaziasNavbar"
import styles from "./ProjectLibrary.module.css"
import {useState, useEffect} from "react"






function ProjectLibrary() {
  const [projectData, setProjectData] = useState([]);
  const [selectedTier, setSelectedTier] = useState("BEGINNER")
  const [selectedItems, setSelectedItems] = useState("ALL")




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

    


    useEffect(() => {
      fetch("http://localhost:4000/api/projectLibrary")
        .then((res) => res.json())
        .then((res) => setProjectData(res.data));
    }, []);
    

    const filteredProjects = projectData.filter((project) => {
      const matchesTier = project.course === selectedTier;
  
      const subscriptionFilterEnabled = checkedFree || checkedPremium;
      const matchesSubscription = !subscriptionFilterEnabled ||
        (checkedFree && project.subscription === "Free") ||
        (checkedPremium && project.subscription === "Premium");

        const activityFilterEnabled =
  checkedAnimation || checkedGame || checkedChatbot || checkedAugmentedReality;

  const matchesActivity =
  !activityFilterEnabled ||
  (checkedAnimation && project.activity_type === "Animation") ||
  (checkedGame && project.activity_type === "Game") ||
  (checkedChatbot && project.activity_type === "Chatbot") ||
  (checkedAugmentedReality && project.activity_type === "Augmented Reality");


  const yearLevelFilterEnabled =
  checkedOneToFour || checkedFiveToSix || checkedSevenToEight || checkedNineToThirteen;

  const matchesYearLevel = !yearLevelFilterEnabled ||
  (checkedOneToFour && project.year_level >= 1 && project.year_level <= 4) ||
  (checkedFiveToSix && project.year_level >= 5 && project.year_level <= 6) ||
  (checkedSevenToEight && project.year_level >= 7 && project.year_level <= 8) ||
  (checkedNineToThirteen && project.year_level >= 9 && project.year_level <= 13);

const subjectFilterEnabled =
  checkedComputerScience || checkedMaths || checkedScience ||
  checkedLanguage || checkedArt || checkedMusic;

const matchesSubject = !subjectFilterEnabled ||
  (checkedComputerScience && project.subject_matter === "Computer Science") ||
  (checkedMaths && project.subject_matter === "Maths") ||
  (checkedScience && project.subject_matter === "Science") ||
  (checkedLanguage && project.subject_matter === "Language") ||
  (checkedArt && project.subject_matter === "Art") ||
  (checkedMusic && project.subject_matter === "Music");
  
  return matchesTier && matchesSubscription && matchesActivity &&
  matchesYearLevel && matchesSubject;
    });

    const limitedProjects =
    selectedItems === "ALL"
      ? filteredProjects
      : filteredProjects.slice(
          0,
          selectedItems === "FIVE" ? 5 :
          selectedItems === "TEN" ? 10 : 0
        );

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
        {limitedProjects.map((project) => (
              <div key={project.project_id} className={styles.projectCard}>
                <img src={project.project_pic} alt={project.name} />
                <h2>{project.name}</h2>
                <h4>{project.course} | {project.activity_type}</h4>
              </div>
            ))}
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