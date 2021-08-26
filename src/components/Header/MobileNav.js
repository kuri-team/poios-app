import { useState } from "react";
import { Link } from "react-router-dom";

import * as style from "./MobileNav.module.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page2">Page2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
