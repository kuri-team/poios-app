import { useContext } from "react";
import { useLocation } from "react-router-dom";

import Layout from "../../components/Layout";
import ChatWindow from "../../components/Chat/ChatWindow";

const ChatPage = () => {
  let queries = new URLSearchParams(useLocation().search);

  return (
    <Layout>
      <ChatWindow tutorName={queries.get("tutor")} />
    </Layout>
  );
};

export default ChatPage;
