import TimetableDay from "./TimetableDay";
import * as style from "./Timetable.module.css";

const Timetable = () => {
  return (
    <>
      <div className={style["timetable-bigcontainer"]}>
        <div className={style["navigate-time"]}>
          <div className={style["button-arrow"]}>
            <img className={style["left-arrow"]} src={"media/icons/previous.svg"} alt="" />
            <img className={style["right-arrow"]} src={"media/icons/next.svg"} alt="" />
          </div>
          <span>Fri, Aug 13th, 2021</span>
        </div>
        <div className={style["schedule-container"]}>
          <div className={style["day-name"]}>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
          <div className={style["schedule"]}>
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />

            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />

            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />

            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
            <TimetableDay />

            <TimetableDay />
            <TimetableDay />
            <TimetableDay />
          </div>
        </div>
      </div>
    </>
  );
};

export default Timetable;
