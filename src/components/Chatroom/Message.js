import * as style from "./Message.module.css";

const Message = ({ fromMe, sender, photo, content, timestamp }) => (
  <div className={fromMe ? [style["wrapper"], style["from-me"]].join(" ") : style["wrapper"]}>
    <div className={style["message"]}>
      {fromMe ? (
        <div className={[style["header"], style["from-me"]].join(" ")}>
          <div className={style["timestamp"]}>{timestamp}</div>
          <div className={style["sender"]}>{sender}</div>
          <img src={photo} alt="avatar" className={style["avatar"]} />
        </div>
      ) : (
        <div className={style["header"]}>
          <img src={photo} alt="avatar" className={style["avatar"]} />
          <div className={style["sender"]}>{sender}</div>
          <div className={style["timestamp"]}>{timestamp}</div>
        </div>
      )}
      <div className={style["body"]}>
        <div className={fromMe ? [style["content"], style["from-me"]].join(" ") : style["content"]}>{content}</div>
      </div>
    </div>
  </div>
);

export default Message;
