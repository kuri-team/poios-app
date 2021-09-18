import { Link } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";

import { pages, PagesContext } from "../Pages";
import { GlobalState } from "../GlobalState";
import Nav from "./Header/Nav";
import AccountMenu from "./Header/AccountMenu";
import MobileNav from "./Header/MobileNav";
import * as style from "./Header.module.css";

const Header = () => {
  //manage state(logged, role) in all websites
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userApi.isLogged;
  const [isTutor, setIsTutor] = state.userApi.isTuTor;

  const logoutUser = async () => {
    await axios.get("/auth/logout");
    localStorage.removeItem("firstLogin");
    setIsTutor(false);
    setIsLogged(false);
  };
  return (
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
          <AccountMenu logoutUser={logoutUser} />
        </PagesContext.Provider>
      </div>
      <PagesContext.Provider value={pages.mobileNav}>
        <MobileNav />
      </PagesContext.Provider>
    </header>
  );
};

export default Header;
