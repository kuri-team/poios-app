import React from "react";

import * as style from "./Chatroom.module.css";

function Message({ text, displayName, createdAt, photoURL }) {
  return (
    <div className={style["message"]}>
      <div>
        <img src={photoURL} alt="avatar" className={style["avatar"]} />
        <div className={style["author"]}>{displayName}</div>
        <div className={style["date"]}>{createdAt}</div>
      </div>
      <div>
        <div className={style["texting-message"]}>{text}</div>
      </div>
    </div>
  );
}

export default Message;
