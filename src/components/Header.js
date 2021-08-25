import { Link } from "react-router-dom";

import Nav from "./Nav";
import Notifications from "./header/Notifications";
import Messages from "./header/Messages";
import Calendar from "./header/Calendar";
import AccountMenu from "./header/AccountMenu";
import * as style from "./Header.module.css";

const Header = () => (
  <header className={style["header"]}>
    <div className={style["main-nav"]}>
      <Link to="/" className={style["brand"]}>
        <img src={"/media/Wordmark_Secondary.svg"} alt={"Home"} />
      </Link>
      <Nav />
    </div>
    <div className={style["controls"]}>
      <Notifications active={true} />
      <Messages active={true} />
      <Calendar active={true} />
      <span className={style["divider"]} />
      <AccountMenu />
    </div>
  </header>
);

export default Header;
