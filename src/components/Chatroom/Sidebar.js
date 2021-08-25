import React from "react";
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";

function Sidebar() {
  return (
    <div className="side-bar">
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
