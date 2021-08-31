import { useContext } from "react";
import { Link } from "react-router-dom";

import { PagesContext } from "../../Pages";
import * as style from "./AccountMenu.module.css";
import * as commonStyle from "./common.module.css";

const AccountMenu = () => {
  const navLinks = useContext(PagesContext);

  return (
    <>
      <div className={style["menu"]}>
        <Link to={navLinks[0].path}>
          <button>
            <tspan>Logout</tspan>
          </button>
        </Link>
        <Link to={navLinks[1].path}>
          <button>
            <tspan>My Profile</tspan>
          </button>
        </Link>
      </div>
      <Link to={navLinks[1].path}>
        <button className={[commonStyle["button"], style["avatar"]].join(" ")}>
          <img src={"/media/icons/account_circle_black_24dp.svg"} alt={"Notifications"} />
        </button>
      </Link>
    </>
  );
};

export default AccountMenu;
