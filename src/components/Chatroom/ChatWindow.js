import React from "react";

function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="chat-window-header">
        <div className="header-info">
          <p className="header-title">Room name</p>
          <span className="header-description">Room description</span>
        </div>
        <div>
          <p className="course-name">Further Web Programming</p>
        </div>

        <div className="header-button-group">
          <div className="invite-button">
            <img className="invite-icon" src={"/media/invite-icon-white.png"} alt="Invite icon" />
            Invite
          </div>
          <div className="tooltip-1">
            <img
              className="avatar"
              src="https://www.takadada.com/wp-content/uploads/2019/07/avatar-naruto-2.jpg"
              alt="avatar"
            />
            <span className="tooltipText-1">Naruto</span>
          </div>
          <div className="tooltip-2">
            <img className="avatar" src="https://i1.sndcdn.com/avatars-000538032087-4mfpm1-t500x500.jpg" alt="avatar" />
            <span className="tooltipText-2">Sasuke</span>
          </div>
        </div>
      </div>

      <div className="chat-window-content"></div>
    </div>
  );
}

export default ChatWindow;
