import { Link } from "react-router-dom";

import Nav from "./Nav";
import * as style from "./Header.module.css";

const Header = () => (
  <header className={style["header"]}>
    <div className={style["main-nav"]}>
      <Link to="/" className={style["brand"]}>
        <img src={"/media/Wordmark_Secondary.svg"} alt={"Home"} />
      </Link>
      <Nav />
    </div>
  </header>
);

export default Header;
