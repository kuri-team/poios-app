import React from "react";

import * as style from "./Message.module.css";

function Message({ text, displayName, createdAt, photoURL }) {
  return (
    <div className={style["message"]}>
      <div className={style["message-header"]}>
        <img src={photoURL} alt="avatar" className={style["message-avatar"]} />
        <div className={style["author"]}>{displayName}</div>
        <div className={style["date"]}>{createdAt}</div>
      </div>
      <div className={style["message-content"]}>
        <div className={style["texting-message"]}>{text}</div>
      </div>
    </div>
  );
}

export default Message;
