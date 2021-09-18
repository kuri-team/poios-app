import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import Message from "./Message";
import { SocketContext } from "../../SocketContext";
import VideoChatWindow from "./VideoChat/VideoChatWindow";
import { GlobalState } from "../../GlobalState";

import * as style from "./ChatWindow.module.css";
import ScreenSharing from "./VideoChat/ScreenSharing";

const ChatWindow = ({ tutorName }) => {
  const state = useContext(GlobalState);
  const [isTutor, setIsTutor] = state.userApi.isTuTor;
  let link = "/profile";

  if (isTutor) {
    link = "/profile/my-profile";
  }

  const [messages, setMessages] = useState([
    {
      fromMe: true,
      sender: "Student",
      photo: "/media/profile-placeholder_143x143.png",
      content: "Hello World!",
      timestamp: new Date().getFullYear(),
    },
    {
      fromMe: false,
      sender: "Tutor",
      photo: "/media/profile-placeholder_143x143.png",
      content: "Hello World!",
      timestamp: new Date().getFullYear(),
    },
  ]);

  const pushMessage = () => {
    setMessages([
      ...messages,
      {
        fromMe: true,
        sender: "Student",
        photo: "/media/profile-placeholder_143x143.png",
        content: messageContent,
        timestamp: new Date().getFullYear(),
      },
    ]);
  };

  const { me, isCalling, callUser, leaveCallScene, shareScreen, isSharing, notCalling } = useContext(SocketContext);

  const [messageContent, setMessageContent] = useState("");

  return (
    <div className={style["chat-window"]}>
      <div className={style["chat-window-header"]}>
        <div className={[style["tutor-wrapper"], style["desktop-only"]].join(" ")}>
          <Link to={link}>
            <img className={style["tutor-avatar"]} src={"/media/profile-placeholder_143x143.png"} alt="avatar" />
          </Link>
          <Link to={link} className={style["tutor-name"]}>
            {tutorName}
          </Link>
        </div>

        <div className={style["header-button-group"]}>
          {!isCalling && (
            <Link to="/core/tutors">
              <button className={style["leave-button"]}>
                <tspan>Leave</tspan>
                <img src={"/media/chatroom-icons/call_end_24dp.svg"} alt="Leave call" />
              </button>
            </Link>
          )}
          <div className={style["functions"]}>
            <div className={style["function-button"]} onClick={leaveCallScene}>
              <img
                className={style["function-icon"]}
                src={"/media/chatroom-icons/chat_24dp.svg"}
                alt="Messages"
                style={{ width: "22px", height: "22px", transform: "translateY(1px)" }}
              />
            </div>
            <div
              className={[style["function-button"], style["desktop-only"]].join(" ")}
              onClick={() => {
                if (isCalling === true) {
                  shareScreen();
                } else {
                  alert("Please start a call to share screen.");
                }
              }}
            >
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
              <label htmlFor="send-photo" className={style["label"]}>
                <img className={style["function-icon"]} src={"/media/chatroom-icons/photo.svg"} alt="Attach a photo" />
              </label>
              <input
                id="send-photo"
                name="send-photo"
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                onChange={e => {
                  const file = new FileReader();
                  file.readAsDataURL(e.target.files[0]);
                }}
                hidden
                aria-hidden
              />
            </div>
            <div className={style["attach-button"]}>
              <label htmlFor="send-file" className={style["label"]}>
                <img
                  className={style["function-icon"]}
                  src={"/media/chatroom-icons/attachment.svg"}
                  alt="Attach a file"
                />
              </label>
              <input
                id="send-file"
                name="send-file"
                type="file"
                accept=""
                onChange={e => {
                  const file = new FileReader();
                  file.readAsDataURL(e.target.files[0]);
                }}
                hidden
                aria-hidden
              />
            </div>
            <div className={style["input-message-content"]}>
              <input
                type="text"
                className={style["input-message"]}
                name="input-message"
                placeholder="Write a message..."
                onChange={e => setMessageContent(e.target.value)}
              />
            </div>
            <div className={style["send-button"]} onClick={pushMessage}>
              <img className={style["function-icon"]} src={"/media/chatroom-icons/send_24dp.svg"} alt="Send" />
            </div>
          </div>
        </div>
      )}

      {isCalling && !isSharing && <VideoChatWindow tutorName={tutorName} />}

      {isCalling && isSharing && <ScreenSharing />}
    </div>
  );
};

export default ChatWindow;
