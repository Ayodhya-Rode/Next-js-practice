import React from "react";
import style from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div className={style.main}>
      <div >
        logo
      </div>
      <nav>
        <span className={style.nav}>Home</span>
        <span className={style.nav}>About</span>
        <span className={style.nav}>Services</span>
        <span className={style.nav}>Contact</span>
      </nav>
    </div>
  );
};

export default Navbar;
