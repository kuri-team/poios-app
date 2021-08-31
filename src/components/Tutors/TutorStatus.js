import * as style from "./TutorStatus.module.css";

const TutorStatus = status => {
  return (
    <div>
      <div className={style["available"]}></div>
      {status}
    </div>
  );
};

export default TutorStatus;
