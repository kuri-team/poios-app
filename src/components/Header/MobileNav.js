import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { PagesContext } from "../../Pages";
import * as style from "./MobileNav.module.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const navLinks = useContext(PagesContext);

  return (
    <div className={style["wrapper"]}>
      <button
        className={open ? [style["button"], style["button-opened"]].join(" ") : style["button"]}
        onClick={() => setOpen(!open)}
      >
        <div className={style["bar"]} />
        <div className={style["bar"]} />
        <div className={style["bar"]} />
      </button>
      <div className={open ? style["menu"] : [style["menu"], style["closed"]].join(" ")}>
        <ul>
          {navLinks.map((navLink, key) => (
            <li key={key}>
              <Link to={navLink.path}>{navLink.name}</Link>
            </li>
          ))}
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
