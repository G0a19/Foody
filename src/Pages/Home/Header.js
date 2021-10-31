import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import header from "./../../img/header.png";
import Leaves from "./../../img/Leaves.png";
import Linkedin from "./../../UI/Linkedin";
import GitHub from "./../../UI/GitHub";
import Instagram from "./../../UI/Instagram";

const Header = function () {
  return (
    <header className={classes.continer}>
      <nav className={classes.navigation}>
        <h6>Foody</h6>
        <ul>
          <li>
            <Link to="categories">Categories</Link>
          </li>

          <li>
            <Link to="successful">The successful</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className={classes.title}>
        <h1>Foody</h1>
        <h2>Are you hungry?</h2>
        <h3>Don't wait!</h3>
        <div className={classes.link}>
          <Link to="/foods">explore now</Link>
        </div>
      </div>

      <div className={classes.img}>
        <img src={header} alt="header_photo" />
      </div>

      <div className={classes.backgroundImg}>
        <img src={Leaves} alt="Leaves" />
      </div>

      <div className={classes.social}>
        <div>
          <a href="https://www.linkedin.com/in/gal-mafgaonker-bb7a8b209/">
            <Linkedin />
          </a>
          <a href="https://github.com/G0a19?tab=repositories">
            <GitHub />
          </a>
          <a href="https://instagram.com/galmafgaonker">
            <Instagram />
          </a>
        </div>
      </div>

      <li className={classes.Ui}>
        This website create with careful Ui and made by Gal mafgaonker
      </li>
    </header>
  );
};

export default Header;
