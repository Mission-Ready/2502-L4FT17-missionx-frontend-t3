import React from 'react';
import styles from './Footer.module.css'; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© LevelUp Works 2020</p>
      </div>
    </footer>
  );
}

