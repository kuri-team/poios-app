import React from "react";
import "./Chatroom.css";

function UserInfo() {
  return (
    <div className="user-info">
      <div className="user-info-content">
        <img
          className="avatar"
          src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
          alt="avatar"
        />
        <p className="username">Luke</p>
      </div>
      <button className="sign-out">Sign Out</button>
    </div>
  );
}

export default UserInfo;
