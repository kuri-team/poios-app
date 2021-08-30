import * as style from "./TutorListElement.module.css";

const TutorListElement = () => {
  return (
    <div className={style["profile-big-container"]}>
      <div className={style["profile-container"]}>
        <div className={style["user-avatar"]}>
          <img className={style["avatar-image"]} src={"/media/venti.jpg"} alt="" />
        </div>

        <div className={style["user-info-display"]}>
          <div>
            <h2>Venti</h2>
            <p>Tutor</p>
            <p>Major Musical Instruments</p>
          </div>

          <div>
            <div className={style["user-info-element"]}>
              Subject:
              <div className={style["subject-list"]}>
                <div>JavaScript</div>
                <div>ReactJS</div>
                <div>NoSQL</div>
                <div>PHP</div>
                <div>PHP</div>
                <div>PHP</div>
                <div>PHP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorListElement;
