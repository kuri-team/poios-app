import UserInfo from "./UserInfo";
import RoomList from "./RoomList";

import * as style from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={style["side-bar"]}>
      <UserInfo />
      <RoomList />
    </div>
  );
}

export default Sidebar;
