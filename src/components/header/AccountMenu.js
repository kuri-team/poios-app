import { useState } from "react";

import * as style from "./AccountMenu.module.css";
import * as commonStyle from "./common.module.css";

const AccountMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={open ? style["menu"] : [style["menu"], style["hidden"]].join(" ")}>
        <button>
          <tspan>Logout</tspan>
        </button>
        <button>
          <tspan>My Profile</tspan>
        </button>
      </div>
      <button className={[commonStyle["button"], style["button"]].join(" ")} onClick={() => setOpen(!open)}>
        <img src={"/media/account_circle_black_24dp.svg"} alt={"Notifications"} />
      </button>
    </>
  );
};

export default AccountMenu;
