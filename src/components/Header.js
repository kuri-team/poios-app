import { Link } from "react-router-dom";

import { pages, PagesContext } from "../Pages";
import Nav from "./Header/Nav";
import AccountMenu from "./Header/AccountMenu";
import MobileNav from "./Header/MobileNav";
import * as style from "./Header.module.css";

const Header = () => (
  <header className={style["header"]}>
    <div className={style["main-nav"]}>
      <Link to="/" className={style["brand"]}>
        <img src={"/media/Wordmark_Secondary.svg"} alt={"Home"} />
      </Link>
      <PagesContext.Provider value={pages.desktopNav}>
        <Nav />
      </PagesContext.Provider>
    </div>
    <div className={style["controls"]}>
      <PagesContext.Provider value={pages.account}>
        <AccountMenu />
      </PagesContext.Provider>
    </div>
    <PagesContext.Provider value={pages.mobileNav}>
      <MobileNav />
    </PagesContext.Provider>
  </header>
);

export default Header;
