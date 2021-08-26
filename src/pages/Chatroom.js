import Sidebar from "../components/Chatroom/Sidebar";
import ChatWindow from "../components/Chatroom/ChatWindow";

import * as style from "./Chatroom.module.css";
import Layout from "../components/Layout";

function Chatroom() {
  return (
    <Layout>
      <div className={style["chatroom-content"]}>
        <ChatWindow roomName="Room Name" />
        <Sidebar />
      </div>
    </Layout>
  );
}

export default Chatroom;
