import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { PagesContext } from "../../Pages";
import * as style from "./AccountMenu.module.css";
import * as commonStyle from "./common.module.css";

const AccountMenu = () => {
  const [open, setOpen] = useState(false);
  const navLinks = useContext(PagesContext);

  return (
    <>
      <div className={open ? style["menu"] : [style["menu"], style["hidden"]].join(" ")}>
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
      <button className={[commonStyle["button"], style["button"]].join(" ")} onClick={() => setOpen(!open)}>
        <img src={"/media/icons/account_circle_black_24dp.svg"} alt={"Notifications"} />
      </button>
    </>
  );
};

export default AccountMenu;
