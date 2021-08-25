import React from "react";
import Sidebar from "../components/Chatroom/Sidebar";
import ChatWindow from "../components/Chatroom/ChatWindow";

import "../components/Chatroom/Chatroom.css";

function Chatroom() {
  return (
    <div className="chatroom-content">
      <div className="chatroom-content-sidebar">
        <Sidebar />
      </div>
      <div className="chatroom-content-chatWindow">
        <ChatWindow />
      </div>
    </div>
  );
}

export default Chatroom;
