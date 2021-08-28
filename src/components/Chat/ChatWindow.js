import { Link } from "react-router-dom";

import Message from "./Message";
import * as style from "./ChatWindow.module.css";

const ChatWindow = ({ roomName }) => {
  const messages = [
    {
      fromMe: true,
      sender: "hlinh_santa_claus",
      photo: "/media/chatroom-icons/hacker.svg",
      content: "Welcome to Mars!",
      timestamp: "2021",
    },
    {
      fromMe: false,
      sender: "hlinh_pr0_vjp",
      photo: "/media/chatroom-icons/hacker.svg",
      content: "Hello World!",
      timestamp: "2021",
    },
    {
      fromMe: true,
      sender: "hlinh_pr0_vjp",
      photo: "/media/chatroom-icons/hacker.svg",
      content: "Hello World!",
      timestamp: "2021",
    },
  ];

  return (
    <div className={style["chat-window"]}>
      <div className={style["chat-window-header"]}>
        {/*<h1 className={style["header-title"]}>{roomName}</h1>*/}
        <div className={style["profile-wrapper"]}>
          <Link to="/">
            <img className={style["profile-avatar"]} src="/media/chatroom-icons/hacker.svg" alt="avatar" />
          </Link>
          <div className={style["profile-username"]}>Username</div>
        </div>

        <div className={style["header-button-group"]}>
          <button className={style["leave-button"]}>Leave</button>
          <div className={style["function-button"]}>
            <img className={style["function-icon"]} src={"/media/chatroom-icons/chat.svg"} alt="Chat icon" />
          </div>
          <div className={style["function-button"]}>
            <img className={style["function-icon"]} src={"/media/chatroom-icons/screen.svg"} alt="Screen share icon" />
          </div>
          <div className={style["function-button"]}>
            <img
              className={style["function-icon"]}
              src={"/media/chatroom-icons/video-camera.svg"}
              alt="Video call icon"
            />
          </div>
          <div className={style["function-button"]}>
            <img className={style["function-icon"]} src={"/media/chatroom-icons/call.svg"} alt="Voice call icon" />
          </div>
        </div>
      </div>

      <div className={style["chat-window-content"]}>
        <div className={style["wrapper"]}>
          {messages.map(message => (
            <Message
              fromMe={message.fromMe}
              sender={message.sender}
              photo={message.photo}
              content={message.content}
              timestamp={message.timestamp}
            />
          ))}
        </div>
      </div>

      <div className={style["form"]}>
        <div className={style["attach-button"]}>
          <img className={style["function-icon"]} src={"/media/chatroom-icons/photo.svg"} alt="Send photo icon" />
        </div>
        <div className={style["attach-button"]}>
          <img className={style["function-icon"]} src={"/media/chatroom-icons/attachment.svg"} alt="Send file icon" />
        </div>
        <div className={style["input-message-content"]}>
          <input type="text" className={style["input-message"]} name="input-message" placeholder="Write a message..." />
        </div>
        <div className={style["send-button"]}>
          <img className={style["function-icon"]} src={"/media/chatroom-icons/send.svg"} alt="Send icon" />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
