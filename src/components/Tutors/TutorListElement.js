import * as style from "./TutorListElement.module.css";
import SubjectTag from "./SubjectTag";

const TutorListElement = () => {
  return (
    <div className={style["profile-container"]}>
      <div className={style["user-avatar"]}>
        <img className={style["avatar-image"]} src={"/media/hansooyoung.jpg"} alt="" />
      </div>

      <div className={style["user-info-display"]}>
        <div>
          <h4>Han Sooyoung</h4>
          <p>Major: Musical Instruments</p>
        </div>
        <div>
          <span>Subjects:</span>
          <div className={style["subject-list"]}>
            <SubjectTag />
            <SubjectTag />
            <SubjectTag />
            <SubjectTag />
            <SubjectTag />
            <SubjectTag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorListElement;
