import * as style from "./TutorStatus.module.css";

const TutorStatus = ({ status }) => {
  return (
    <div className={style["available"]}>
      <span className={style["status-dot"]}></span>
      {status.toUpperCase()}
    </div>
  );
};

export default TutorStatus;
