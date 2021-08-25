import * as style from "./TutorProfileInfo.module.css";

const TutorProfileInfo = () => {
  return (
    <div className={style["profile-bigcontainer"]}>
      <div className={style["profile-container"]}>
        <div className={style["user-avatar"]}>
          <img className={style["avatar-image"]} src={"media/venti.jpg"} alt="" />
          <div className={style["rating-comment-container"]}>
            <div className={style["five-stars"]}>
              <img src={"media/icons/star.svg"} alt="" />
              <img src={"media/icons/star.svg"} alt="" />
              <img src={"media/icons/star.svg"} alt="" />
              <img src={"media/icons/star_empty.svg"} alt="" />
              <img src={"media/icons/star_empty.svg"} alt="" />
            </div>
            <span className={style["view-comments"]}>View all comments</span>
          </div>
        </div>

        <div className={style["user-info-display"]}>
          <div className={style["userinfo-top"]}>
            <div className={style["user-info-element"]}>
              <h2 className={style["tutor-name"]}>Venti</h2>
            </div>
            <div className={style["user-info-element"]}>
              <span>Tutor</span>
            </div>
            <div className={style["user-info-element"]}>
              <span>Major Musical Instruments</span>
            </div>
          </div>

          <div style={{ width: "100%" }}></div>

          <div className={style["userinfo-bottom"]}>
            <div className={style["user-info-element"]}>
              <label htmlFor="name">Subject: </label>
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
            <div className={style["button-container"]}>
              <button className={style["book-button"]} type="submit" value="BookAppointment">
                BOOK AN APPOINTMENT
              </button>
              <button className={style["message-button"]} type="submit" value="SendMessage">
                SEND A MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorProfileInfo;
