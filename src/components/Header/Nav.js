import { Link } from "react-router-dom";

import * as style from "./Nav.module.css";

const Nav = () => (
  <nav className={style["nav"]}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/page2">Page2</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
