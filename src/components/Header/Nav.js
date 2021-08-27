import { useContext } from "react";
import { Link } from "react-router-dom";

import { PagesContext } from "../../Pages";
import * as style from "./Nav.module.css";

const Nav = () => {
  const navLinks = useContext(PagesContext);

  return (
    <nav className={style["nav"]}>
      <ul>
        {navLinks.map((navLink, key) => (
          <li key={key}>
            <Link to={navLink.path}>{navLink.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
