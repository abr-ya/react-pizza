import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";
import { ILink } from "../../interfaces";
import { scrollToTop } from "../../utils";

interface INav {
  links: ILink[];
  isHeaderFixed: boolean;
}

const Nav = ({ links, isHeaderFixed }: INav) => {
  let htmlLinks: any[] = [];
  if (Array.isArray(links) && links.length) {
    htmlLinks = links.map((item, index) => (
      <li className="nav-item" key={index} onClick={scrollToTop}>
        <NavLink exact={item.exact} to={item.link} className="nav-link">
          {item.name}
        </NavLink>
      </li>
    ));
  }

  return (
    <nav className={`navbar navbar-expand-xl navbar-light ${styles.navbar}`}>
      <div
        className={`navbar-brand ${
          isHeaderFixed ? styles.brandHF : styles.brand
        }`}
      >
        <a href="/">
          <img className={styles.brandImg} src="img/logo.png" alt="logo" />
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarId">
        <ul
          className={`navbar-nav ${styles.navbarNav} ${
            isHeaderFixed ? styles.navbarNavHF : ""
          }`}
        >
          {htmlLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
