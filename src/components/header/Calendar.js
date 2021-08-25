import * as commonStyle from "./common.module.css";

const Calendar = ({ active }) => {
  return (
    <>
      <button className={commonStyle["button"]}>
        {active ? <div className={commonStyle["active-indicator"]} /> : null}
        {active ? (
          <img src={"/media/event_black_24dp.svg"} alt={"Notifications"} />
        ) : (
          <img src={"/media/calendar_black_24dp.svg"} alt={"Notifications"} />
        )}
      </button>
    </>
  );
};

export default Calendar;
