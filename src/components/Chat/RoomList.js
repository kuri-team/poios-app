import { useState } from "react";
import * as style from "./RoomList.module.css";

const RoomList = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={style["room-list"]}>
      <div className={style["dropdown-btn"]} onClick={() => setIsActive(!isActive)}>
        Room List
        <img src={"/media/chatroom-icons/down-arrow.svg"} alt="Down arrow" className={style["down-arrow"]} />
      </div>
      <div className={isActive ? [style["dropdown-content"], style["active"]].join(" ") : style["dropdown-content"]}>
        <div className={style["dropdown-item"]}>Room Narutobaco</div>
        <div className={style["dropdown-item"]}>Room Sasuketamin</div>
        <div className={style["dropdown-item"]}>Room Uchihahaha</div>
        <div className={style["dropdown-item"]}>Room Rasengan</div>
        <div className={style["add-room"]}>
          <img src={"/media/chatroom-icons/plus-icon.svg"} alt="Plus Icon" className={style["plus-icon"]} />
          Add room
        </div>
      </div>
    </div>
  );
};

export default RoomList;
