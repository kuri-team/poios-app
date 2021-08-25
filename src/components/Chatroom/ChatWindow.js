import React from "react";
import Message from "./Message";

import * as style from "./Chatroom.module.css";

function ChatWindow() {
  return (
    <div className={style["chat-window"]}>
      <div className={style["chat-window-header"]}>
        <div className={style["header-info"]}>
          <p className={style["header-title"]}>Room name</p>
          <span className={style["header-description"]}>Room description</span>
        </div>
        <div>
          <p className={style["course-name"]}>Further Web Programming</p>
        </div>

        <div className={style["header-button-group"]}>
          <div className={style["leave-button"]}>Leave</div>
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

          <div className={style["tooltip-1"]}>
            <img
              className={style["avatar-1"]}
              src="https://www.takadada.com/wp-content/uploads/2019/07/avatar-naruto-2.jpg"
              alt="avatar"
            />
            <span className={style["tooltipText-1"]}>Naruto</span>
          </div>
          <div className={style["tooltip-2"]}>
            <img
              className={style["avatar-2"]}
              src="https://i1.sndcdn.com/avatars-000538032087-4mfpm1-t500x500.jpg"
              alt="avatar"
            />
            <span className={style["tooltipText-2"]}>Sasuke</span>
          </div>
          <div className={style["function-button"]}>
            <img className={style["function-icon"]} src={"/media/chatroom-icons/invite-icon.png"} alt="Invite icon" />
          </div>
        </div>
      </div>

      <div className={style["chat-window-content"]}>
        <div className={style["message-list"]}>
          <Message text="Test" photoURL={null} displayName="hlinh" createdAt={123123123123123} />
          <Message text="Test" photoURL={null} displayName="hlinh" createdAt={123123123123123} />
          <Message text="Test" photoURL={null} displayName="hlinh" createdAt={123123123123123} />
          <Message text="Test" photoURL={null} displayName="hlinh" createdAt={123123123123123} />
        </div>
        <form>
          <div>
            <input
              type="text"
              className={style["input-message"]}
              name="input-message"
              placeholder="Write a message..."
            />
          </div>
          <div className={style["send-message-button"]}>Send</div>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
