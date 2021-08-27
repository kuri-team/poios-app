import Sidebar from "../../components/Chat/Sidebar";
import ChatWindow from "../../components/Chat/ChatWindow";

import * as style from "./ChatPage.module.css";
import Layout from "../../components/Layout";

const ChatPage = () => {
  return (
    <Layout>
      <div className={style["chatroom-content"]}>
        <ChatWindow roomName="Room Name" />
        <Sidebar />
      </div>
    </Layout>
  );
};

export default ChatPage;
