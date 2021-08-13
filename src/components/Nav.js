import { NavLink } from "react-router-dom";

import * as style from "./Nav.module.css";

const Nav = () => (
  <nav className={style["nav"]}>
    <ul>
      <li>
        <NavLink to="/" activeStyle={{ opacity: 1 }} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/page2" activeStyle={{ opacity: 1 }} exact>
          Page2
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
