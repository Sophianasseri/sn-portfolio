/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
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
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/"
          >
            À propos
          </NavLink>
        </li>
        <li className={styles.listEl}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/projects"
          >
            Projets
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
