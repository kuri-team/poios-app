import * as style from "./Message.module.css";

const Message = ({ fromMe, sender, photo, content, timestamp }) => (
  <div className={fromMe ? style["wrapper-from-me"] : style["wrapper"]}>
    <div className={style["message"]}>
      <img src={photo} alt="avatar" className={style["avatar"]} draggable={false} />
      <div className={style["header"]}>
        <h2>{sender}</h2>
        <h3>{timestamp}</h3>
      </div>
      <p className={fromMe ? [style["content"], style["from-me"]].join(" ") : style["content"]}>{content}</p>
    </div>
  </div>
);

export default Message;
