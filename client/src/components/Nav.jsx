import React from 'react';
import styles from '../styles.module.css';

const Nav = () => {
  const placeholder = 'placeholder';

  return (
    <div className={styles.nav}>
      <h1 className={styles.title}>GoHuLa</h1>
      <input className={styles.search} placeholder="Search for anything" type="search" />
      <button className={styles.searchButton} type="button">&#128269;</button>
      <span className={styles.signin}>Sign in</span>
      <svg className={styles.cart} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="9" cy="20" r="2" />
        <circle cx="16" cy="20" r="2" />
        <path d="M21,5H5.665L4.978,1.79A1,1,0,0,0,4,1H1A1,1,0,0,0,1,3H3.191L6.022,16.21a0.962,0.962,0,0,0,.064.159,1.015,1.015,0,0,0,.063.155,0.978,0.978,0,0,0,.133.153,1.006,1.006,0,0,0,.088.1,1,1,0,0,0,.185.105,0.975,0.975,0,0,0,.107.06A0.994,0.994,0,0,0,7,17H18a1,1,0,0,0,.958-0.713l3-10A1,1,0,0,0,21,5Zm-2.244,5H16V7h3.656ZM7.819,15l-0.6-3H9v3H7.819ZM11,12h3v3H11V12Zm0-2V7h3v3H11ZM9,7v3H6.82L6.22,7H9Zm8.256,8H16V12h2.156Z" />
      </svg>
    </div>
  );
};

export default Nav;
