import * as commonStyle from "./common.module.css";
import * as style from "./Messages.module.css";

const Messages = ({ active }) => {
  return (
    <div className={commonStyle["wrapper"]}>
      <button className={[commonStyle["button"], style["button"]].join(" ")}>
        {active ? <div className={commonStyle["active-indicator"]} /> : null}
        {active ? (
          <img src={"/media/chat_black_24dp.svg"} alt={"Notifications"} />
        ) : (
          <img src={"/media/chat_black_24dp.svg"} alt={"Notifications"} />
        )}
      </button>
    </div>
  );
};

export default Messages;
