import React from "react";
import { useState } from "react";
import * as style from "./Chatroom.module.css";

function RoomList() {
  const [isActive, setIsActive] = useState(false);

  const showRoomList = () => {
    console.log(isActive);
    setIsActive(!isActive);
  };

  return (
    <div className={style["room-list"]}>
      <div>
        <div className={style["dropdown-btn"]} onClick={showRoomList}>
          Room List
          <img src={"/media/chatroom-icons/down-arrow.svg"} alt="Down arrow" className={style["down-arrow"]} />
        </div>
        <div className={isActive ? style["dropdown-content.active"] : style["dropdown-content"]}>
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
    </div>
  );
}

export default RoomList;
