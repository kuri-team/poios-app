import * as commonStyle from "./common.module.css";

const Notifications = ({ active }) => {
  return (
    <>
      <button className={commonStyle["button"]}>
        {active ? <div className={commonStyle["active-indicator"]} /> : null}
        {active ? (
          <img src={"/media/notifications_active_black_24dp.svg"} alt={"Notifications"} />
        ) : (
          <img src={"/media/notifications_black_24dp.svg"} alt={"Notifications"} />
        )}
      </button>
    </>
  );
};

export default Notifications;
