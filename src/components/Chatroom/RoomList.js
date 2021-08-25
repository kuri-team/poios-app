import React from "react";
import { useState } from "react";
import "./Chatroom.css";

function RoomList() {
  const [isActive, setIsActive] = useState(false);

  const showRoomList = () => {
    console.log(isActive);
    setIsActive(!isActive);
  };

  return (
    <div className="room-list">
      <div>
        <div className="dropdown-btn" onClick={showRoomList}>
          Room List
          <img src={"/media/down-arrow.svg"} alt="Down arrow" className="down-arrow" />
        </div>
        <div className={isActive ? "dropdown-content.active" : "dropdown-content"}>
          <div className="dropdown-item">Room Narutobaco</div>
          <div className="dropdown-item">Room Sasuketamin</div>
          <div className="dropdown-item">Room Uchihahaha</div>
          <div className="dropdown-item">Room Rasengan</div>
          <div className="add-room">
            <img src={"/media/plus-icon.svg"} alt="Plus Icon" className="plus-icon" />
            Add room
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomList;
