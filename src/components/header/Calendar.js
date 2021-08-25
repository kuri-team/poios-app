import { useState } from "react";
import { Link } from "react-router-dom";

import useDetectCloseDropdown from "../../hooks/header/useDetectCloseDropdown";
import * as style from "./Calendar.module.css";
import * as commonStyle from "./common.module.css";

const Calendar = ({ active }) => {
  const [open, setOpen] = useState(false);
  const ref = useDetectCloseDropdown(setOpen, [open]);

  const meetings = [
    {
      link: "/",
      picture: "/media/profile-placeholder_143x143.png",
      who: "Eula",
      subject: "Further Web Programming",
      start: "16:00",
      end: "19:00",
    },
    {
      link: "/",
      picture: "/media/profile-placeholder_143x143.png",
      who: "",
      subject: "",
      start: "",
      end: "",
    },
    {
      link: "/",
      picture: "/media/profile-placeholder_143x143.png",
      who: "",
      subject: "",
      start: "",
      end: "",
    },
    {
      link: "/",
      picture: "/media/profile-placeholder_143x143.png",
      who: "",
      subject: "",
      start: "",
      end: "",
    },
  ];

  return (
    <div className={commonStyle["wrapper"]} ref={ref}>
      <button className={commonStyle["button"]} onClick={() => setOpen(!open)}>
        {active ? <div className={commonStyle["active-indicator"]} /> : null}
        {active ? (
          <img src={"/media/event_black_24dp.svg"} alt={"Notifications"} />
        ) : (
          <img src={"/media/calendar_black_24dp.svg"} alt={"Notifications"} />
        )}
      </button>
      <div className={open ? commonStyle["menu"] : [commonStyle["menu"], commonStyle["hidden"]].join(" ")}>
        <div className={commonStyle["header"]}>
          <h2>Today's Meeting</h2>
        </div>
        <div className={commonStyle["content"]}>
          {meetings.length === 0 ? (
            <div className={commonStyle["empty"]}>
              <p>Nothing new for now...</p>
            </div>
          ) : (
            meetings.map(meeting => (
              <div className={[commonStyle["item"], style["item"]].join(" ")}>
                <Link to={meeting.link}>
                  <img src={meeting.picture} alt={meeting.who} className={style["picture"]} />
                </Link>
                <div className={style["content"]}>
                  <Link to={meeting.link}>
                    <h2>Meeting with {meeting.who}</h2>
                  </Link>
                  <p className={style["subject"]}>{meeting.subject}</p>
                  <p className={style["time"]}>
                    {meeting.start} &#8211; {meeting.end}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className={commonStyle["footer"]}>
          <Link to="/">Full schedule</Link>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
