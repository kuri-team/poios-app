import React from "react";
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";

import * as style from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={style["side-bar"]}>
      <div>
        <div>
          <UserInfo />
        </div>
        <div>
          <RoomList />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
