import * as style from "./TutorListElement.module.css";
import SubjectTag from "./SubjectTag";
import JoinButton from "./JoinButton";
import MoreTag from "./MoreTag";
import { Link } from "react-router-dom";
import TutorStatus from "./TutorStatus";

const TutorListElement = ({ src, name, major, subjects, status }) => {
  let subjectList;
  const maxSubjectCards = 4;

  if (subjects.length > maxSubjectCards) {
    subjectList = subjects.slice(0, maxSubjectCards);
  } else {
    subjectList = subjects;
  }

  return (
    <div className={style["profile-container"]}>
      <div className={style["user-avatar"]}>
        <Link to="/profile">
          <img className={style["avatar-image"]} src={src} alt="" />
        </Link>
      </div>

      <div className={style["user-info-display"]}>
        <div className={style["user-info-header"]}>
          <Link to="/profile">
            <h4>{name}</h4>
          </Link>
          <TutorStatus status={status} />
        </div>
        <p>Major: {major}</p>
        <div>
          <span>Subjects:</span>
          <div className={style["subject-list"]}>
            {subjectList.map((subject, key) => (
              <SubjectTag key={key} subject={subject} />
            ))}
            {subjects.length > maxSubjectCards ? <MoreTag /> : <MoreTag hidden />}
          </div>
        </div>

        <JoinButton />
      </div>
    </div>
  );
};

export default TutorListElement;
