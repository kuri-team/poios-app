import * as style from "./TutorListElement.module.css";
import SubjectTag from "./SubjectTag";
import JoinButton from "./JoinButton";
import MoreTag from "./MoreTag";

const TutorListElement = () => {
  return (
    <div className={style["profile-container"]}>
      <div className={style["user-avatar"]}>
        <img className={style["avatar-image"]} src={"/media/hansooyoung.jpg"} alt="" />
      </div>

      <div className={style["user-info-display"]}>
        <div>
          <h4>Han Sooyoung</h4>
        </div>
        <p>Major: Creative Writing</p>
        <div>
          <span>Subjects:</span>
          <div className={style["subject-list"]}>
            <SubjectTag />
            <SubjectTag />
            <SubjectTag />
            <MoreTag />
          </div>
        </div>

        <JoinButton />
      </div>
    </div>
  );
};

export default TutorListElement;
