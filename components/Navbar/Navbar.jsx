import React from 'react';
import style from './Navbar.module.scss';

const Navbar = () => (
  <div className={style.Navbar}>
    <div className={style.container}>
      <div className={style.logo}>
        <img src="/android-chrome-192x192.png" alt="project-icon" />
        <p className={style.text}>Online Resume</p>
      </div>

      <button type="button" className={style.button}>
        Create Resume
      </button>
    </div>
  </div>
);

export default Navbar;
