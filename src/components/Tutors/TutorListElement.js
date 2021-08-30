import * as style from "./TutorListElement.module.css";
import SubjectTag from "./SubjectTag";
import JoinButton from "./JoinButton";
import MoreTag from "./MoreTag";

const TutorListElement = ({ src, name, major, subject }) => {
  return (
    <div className={style["profile-container"]}>
      <div className={style["user-avatar"]}>
        <img className={style["avatar-image"]} src={src} alt="" />
      </div>

      <div className={style["user-info-display"]}>
        <div>
          <h4>{name}</h4>
        </div>
        <p>Major: {major}</p>
        <div>
          <span>Subjects:</span>
          <div className={style["subject-list"]}>
            <SubjectTag subject={subject} />
            <SubjectTag subject={subject} />
            <SubjectTag subject={subject} />
            <MoreTag />
          </div>
        </div>

        <JoinButton />
      </div>
    </div>
  );
};

export default TutorListElement;
