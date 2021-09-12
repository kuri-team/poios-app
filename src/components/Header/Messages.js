import { useState } from "react";
import { Link } from "react-router-dom";

import useDetectCloseDropdown from "../../hooks/useDetectCloseDropdown";
import * as style from "./Messages.module.css";
import * as commonStyle from "./common.module.css";

const Messages = ({ active }) => {
  const [open, setOpen] = useState(false);
  const ref = useDetectCloseDropdown(setOpen, [open]);

  const messages = [
    {
      link: "/",
      picture: "/media/profile-placeholder_143x143.png",
      who: "Eula",
      content: "Can you clarify the difference between React state and prop? I'm confused by these definitions.",
      status: "Delivered",
    },
    {
      link: "/",
      picture: "/media/profile-placeholder_143x143.png",
      who: "Lacnham",
      content: "Thank you :)",
      status: "Seen",
    },
    {
      link: "/",
      picture: "/media/profile-placeholder_143x143.png",
      who: "Tao Hu",
      content: "Who's your waifu?",
      status: "Sent",
    },
  ];

  return (
    <div className={commonStyle["wrapper"]} ref={ref}>
      <button className={[commonStyle["button"], style["button"]].join(" ")} onClick={() => setOpen(!open)}>
        {active ? <div className={commonStyle["active-indicator"]} /> : null}
        {active ? (
          <img src={"/media/icons/chat_black_24dp.svg"} alt={"Notifications"} />
        ) : (
          <img src={"/media/icons/chat_black_24dp.svg"} alt={"Notifications"} />
        )}
      </button>
      <div className={open ? commonStyle["menu"] : [commonStyle["menu"], commonStyle["hidden"]].join(" ")}>
        <div className={commonStyle["header"]}>
          <h2>Messages</h2>
        </div>
        <div className={commonStyle["content"]}>
          {messages.length === 0 ? (
            <div className={commonStyle["empty"]}>
              <p>Nothing new for now...</p>
            </div>
          ) : (
            messages.map(message => (
              <div className={[commonStyle["item"], style["item"]].join(" ")}>
                <Link to={message.link}>
                  <img src={message.picture} alt={message.who} className={style["picture"]} />
                </Link>
                <div className={style["content"]}>
                  <Link to={message.link}>
                    <h2>{message.who}</h2>
                  </Link>
                  <p className={style["message"]}>{message.content}</p>
                  <p className={style["status"]}>{message.status}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className={commonStyle["footer"]}>
          <Link to="/">All messages</Link>
        </div>
      </div>
    </div>
  );
};

export default Messages;
