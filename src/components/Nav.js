import { NavLink } from "react-router-dom";

import * as style from "./Nav.module.css";

const Nav = () => (
  <nav className={style["nav"]}>
    <ul>
      <li>
        <NavLink to="/" activeClassName={style["active"]} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/page2" activeClassName={style["active"]} exact>
          Page2
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
