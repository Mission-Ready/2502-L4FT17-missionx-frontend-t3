import styles from './BrownHeader.module.css'

export default function BrownHeader({setActiveProject}) {
  return (
    <section className={styles.header}>
        <div>
            <img className={styles.starImg} src="/src/assets/NavBar/LevelUpWorks-blue.png" alt="" />
        </div>
        <div className={styles.rightSide}>
            <div className={styles.rightBtn}>
                <button className={styles.startBtn} >Start Project</button>
                <button className={styles.helpBtn} >Ask Teacher for help</button>
                <button className={styles.moreBtn} >More Project</button>
            </div>
            <div className={styles.rightFlag}>
                <img className={styles.nzFlag} src="/src/assets/NavBar/NZFlag.png" alt="" />
                <img src="/src/assets/NavBar/MaoriFlag.png" alt="" />
            </div>
        </div>
    </section>
  );
}