import React from "react";
import * as style from "./Chatroom.module.css";

function UserInfo() {
  return (
    <div className={style["user-info"]}>
      <div className={style["user-info-content"]}>
        <img
          className={style["avatar"]}
          src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
          alt="avatar"
        />
        <p className={style["username"]}>Luke</p>
      </div>
      <div className={style["sign-out"]}>Sign Out</div>
    </div>
  );
}

export default UserInfo;
