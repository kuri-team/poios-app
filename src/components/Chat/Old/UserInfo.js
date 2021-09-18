import { Link } from "react-router-dom";

import React from "react";
import * as style from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <div className={style["user-info"]}>
      <Link to="/" className={style["user-info-content"]}>
        <img
          className={style["avatar"]}
          src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
          alt="avatar"
        />
        <div className={style["username"]}>Luke</div>
      </Link>
      <div className={style["sign-out"]}>Sign Out</div>
    </div>
  );
};

export default UserInfo;
