import * as style from "./Notification.module.css";

const Notification = props => {
  return props.trigger ? (
    <div className={style["popup"]}>
      <div className={style["popup-inner"]}>{props.children}</div>
    </div>
  ) : (
    ""
  );
};

export default Notification;
