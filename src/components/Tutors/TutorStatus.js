import * as style from "./TutorStatus.module.css";

const TutorStatus = ({ status }) => (
  <div className={status === "available" ? style["available"] : style["busy"]}>
    <span className={style["status-dot"]}></span>
    {status.toUpperCase()}
  </div>
);

export default TutorStatus;
