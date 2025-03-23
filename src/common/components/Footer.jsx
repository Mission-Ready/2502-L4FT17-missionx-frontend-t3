import React from 'react';

import styles from './Footer.module.css';

import styles from '.components/Footer.module.css'; // CSSモジュールを使用する場合


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© LevelUp Works 2020</p>
      </div>
    </footer>
  );
}



