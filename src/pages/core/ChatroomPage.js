import Sidebar from "../../components/Chatroom/Sidebar";
import ChatWindow from "../../components/Chatroom/ChatWindow";

import * as style from "./ChatroomPage.module.css";
import Layout from "../../components/Layout";

const ChatroomPage = () => {
  return (
    <Layout>
      <div className={style["chatroom-content"]}>
        <ChatWindow roomName="Room Name" />
        <Sidebar />
      </div>
    </Layout>
  );
};

export default ChatroomPage;
