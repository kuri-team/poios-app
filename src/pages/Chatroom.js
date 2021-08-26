import React from "react";
import Sidebar from "../components/Chatroom/Sidebar";
import ChatWindow from "../components/Chatroom/ChatWindow";

import * as style from "./Chatroom.module.css";

function Chatroom() {
  return (
    <div className={style["chatroom-content"]}>
      <div className={style["chatroom-content-sidebar"]}>
        <Sidebar />
      </div>
      <div className={style["chatroom-content-chatWindow"]}>
        <ChatWindow />
      </div>
    </div>
  );
}

export default Chatroom;
