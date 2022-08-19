import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Sophia Nasseri" />
      <ul className={styles.list}>
        <li className={styles.listEl}>A propos</li>
        <li className={styles.listEl}>Projets</li>
      </ul>
    </header>
  );
}

export default Header;
