import * as commonStyle from "./common.module.css";
import * as style from "./Messages.module.css";

const Messages = ({ active }) => {
  return (
    <>
      <button className={[commonStyle["button"], style["button"]].join(" ")}>
        {active ? <div className={commonStyle["active-indicator"]} /> : null}
        {active ? (
          <img src={"/media/chat_black_24dp.svg"} alt={"Notifications"} />
        ) : (
          <img src={"/media/chat_black_24dp.svg"} alt={"Notifications"} />
        )}
      </button>
    </>
  );
};

export default Messages;
