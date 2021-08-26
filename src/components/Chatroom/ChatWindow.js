import { Link } from "react-router-dom";

import Message from "./Message";
import * as style from "./ChatWindow.module.css";

const ChatWindow = ({ roomName }) => {
  const messages = [
    {
      fromMe: true,
      sender: "hlinh_santa_claus",
      photo: "/media/chatroom-icons/hacker.svg",
      content:
        "Welcome to Mars! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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

  console.log(messages.length);

  return (
    <div className={style["chat-window"]}>
      <div className={style["chat-window-header"]}>
        <div className={style["header-info"]}>
          <h1 className={style["header-title"]}>{roomName}</h1>
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
          <Link to="/" className={style["profile-wrapper"]}>
            <img
              className={style["avatar"]}
              src="https://i1.sndcdn.com/avatars-000538032087-4mfpm1-t500x500.jpg"
              alt="avatar"
            />
          </Link>
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

      <form className={style["form"]}>
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
      </form>
    </div>
  );
};

export default ChatWindow;
