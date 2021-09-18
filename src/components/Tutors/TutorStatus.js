import * as style from "./TutorStatus.module.css";

const TutorStatus = ({ status }) => (
  <div className={status === "Available" ? style["available"] : style["busy"]}>
    <span className={style["status-dot"]}></span>
    {status}
  </div>
);

export default TutorStatus;
