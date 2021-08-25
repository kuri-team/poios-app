import { useState } from "react";
import { Link } from "react-router-dom";

import * as commonStyle from "./common.module.css";

const Notifications = ({ active }) => {
  const [open, setOpen] = useState(false);

  const notifications = [
    {
      title: "Request Accepted",
      description: "Lacnham accepted your tutor request",
    },
    {
      title: "Request Declined",
      description: "miketvo declined your tutor request",
    },
    {
      title: "Request Accepted",
      description: "Lacnham accepted your tutor request",
    },
    {
      title: "Request Declined",
      description: "miketvo declined your tutor request",
    },
    {
      title: "Request Accepted",
      description: "Lacnham accepted your tutor request",
    },
    {
      title: "Request Declined",
      description: "miketvo declined your tutor request",
    },
  ];

  return (
    <div className={commonStyle["wrapper"]}>
      <button
        className={commonStyle["button"]}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {active ? <div className={commonStyle["active-indicator"]} /> : null}
        {active ? (
          <img src={"/media/notifications_active_black_24dp.svg"} alt={"Notifications"} />
        ) : (
          <img src={"/media/notifications_black_24dp.svg"} alt={"Notifications"} />
        )}
      </button>
      <div className={open ? commonStyle["menu"] : [commonStyle["menu"], commonStyle["hidden"]].join(" ")}>
        <div className={commonStyle["header"]}>
          <h2>Notifications</h2>
        </div>
        <div className={commonStyle["content"]}>
          {notifications.map(notification => (
            <div className={commonStyle["item"]}>
              <h2>{notification.title}</h2>
              <p>{notification.description}</p>
            </div>
          ))}
        </div>
        <div className={commonStyle["footer"]}>
          <Link to="/">All notifications</Link>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
