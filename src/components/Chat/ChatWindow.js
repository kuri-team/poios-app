import { Link } from "react-router-dom";
import { useContext } from "react";

import Message from "./Message";
import { SocketContext } from "../../SocketContext";
import VideoChatWindow from "./VideoChat/VideoChatWindow";

import * as style from "./ChatWindow.module.css";

const ChatWindow = ({ tutorName }) => {
  const messages = [
    {
      fromMe: true,
      sender: "Anonymous",
      photo: "/media/profile-placeholder_143x143.png",
      content: "Welcome to Mars!",
      timestamp: "2021",
    },
    {
      fromMe: false,
      sender: "Mr. Robot",
      photo: "/media/profile-placeholder_143x143.png",
      content: "Hello World!",
      timestamp: "2021",
    },
    {
      fromMe: true,
      sender: "Anonymous",
      photo: "/media/profile-placeholder_143x143.png",
      content: "Hello World!",
      timestamp: "2021",
    },
    {
      fromMe: false,
      sender: "Mr. Robot",
      photo: "/media/profile-placeholder_143x143.png",
      content: "Hello World!",
      timestamp: "2021",
    },
    {
      fromMe: true,
      sender: "Anonymous",
      photo: "/media/profile-placeholder_143x143.png",
      content: "Welcome to Mars!",
      timestamp: "2021",
    },
    {
      fromMe: false,
      sender: "Mr. Robot",
      photo: "/media/profile-placeholder_143x143.png",
      content: "Hello World!",
      timestamp: "2021",
    },
    {
      fromMe: true,
      sender: "Anonymous",
      photo: "/media/profile-placeholder_143x143.png",
      content: "Hello World!",
      timestamp: "2021",
    },
    {
      fromMe: false,
      sender: "Mr. Robot",
      photo: "/media/profile-placeholder_143x143.png",
      content: "Hello World!",
      timestamp: "2021",
    },
  ];

  const { me, isCalling, callUser, leaveCallScene } = useContext(SocketContext);

  return (
    <div className={style["chat-window"]}>
      <div className={style["chat-window-header"]}>
        <div className={[style["tutor-wrapper"], style["desktop-only"]].join(" ")}>
          <Link to="/profile">
            <img className={style["tutor-avatar"]} src={"/media/profile-placeholder_143x143.png"} alt="avatar" />
          </Link>
          <Link to="/profile" className={style["tutor-name"]}>
            {tutorName}
          </Link>
        </div>

        <div className={style["header-button-group"]}>
          <button className={style["leave-button"]} onClick={leaveCallScene}>
            <tspan>Leave</tspan>
            <img src={"/media/chatroom-icons/call_end_24dp.svg"} alt="" />
          </button>
          <div className={style["functions"]}>
            <div className={style["function-button"]}>
              <img
                className={style["function-icon"]}
                src={"/media/chatroom-icons/chat_24dp.svg"}
                alt="Messages"
                style={{ width: "22px", height: "22px", transform: "translateY(1px)" }}
              />
            </div>
            <div className={[style["function-button"], style["desktop-only"]].join(" ")}>
              <img
                className={style["function-icon"]}
                src={"/media/chatroom-icons/screen_share_24dp.svg"}
                alt="Screen share"
              />
            </div>
            <div className={style["function-button"]} onClick={() => callUser(me)}>
              <img
                className={style["function-icon"]}
                src={"/media/chatroom-icons/video_call_24dp.svg"}
                alt="Video call"
                style={{ width: "30px", height: "30px", transform: "translateX(1px)" }}
              />
            </div>
            <div className={style["function-button"]} onClick={() => callUser(me)}>
              <img className={style["function-icon"]} src={"/media/chatroom-icons/call_24dp.svg"} alt="Voice call" />
            </div>
          </div>
        </div>
      </div>

      {!isCalling && (
        <div>
          <div className={style["chat-window-content"]}>
            <div className={style["inner"]}>
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
              <img className={style["function-icon"]} src={"/media/chatroom-icons/photo.svg"} alt="Attach a photo" />
            </div>
            <div className={style["attach-button"]}>
              <img
                className={style["function-icon"]}
                src={"/media/chatroom-icons/attachment.svg"}
                alt="Attach a file"
              />
            </div>
            <div className={style["input-message-content"]}>
              <input
                type="text"
                className={style["input-message"]}
                name="input-message"
                placeholder="Write a message..."
              />
            </div>
            <div className={style["send-button"]}>
              <img className={style["function-icon"]} src={"/media/chatroom-icons/send_24dp.svg"} alt="Send" />
            </div>
          </div>
        </div>
      )}

      {isCalling && <VideoChatWindow tutorName={tutorName} />}
    </div>
  );
};

export default ChatWindow;
