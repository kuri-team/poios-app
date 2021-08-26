import React from "react";

import * as style from "./Message.module.css";

const Message = ({ sender, photo, content, timestamp }) => (
  <div className={style["message"]}>
    <div className={style["message-header"]}>
      <img src={photo} alt="avatar" className={style["message-avatar"]} />
      <div className={style["author"]}>{sender}</div>
      <div className={style["date"]}>{timestamp}</div>
    </div>
    <div className={style["message-content"]}>
      <div className={style["texting-message"]}>{content}</div>
    </div>
  </div>
);

export default Message;
