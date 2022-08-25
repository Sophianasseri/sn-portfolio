import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Sophia Nasseri" />
      <ul className={styles.list}>
        <li className={styles.listEl}>
          <NavLink to="/">À propos</NavLink>
        </li>
        <li className={styles.listEl}>
          <NavLink to="/projects">Projets</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
