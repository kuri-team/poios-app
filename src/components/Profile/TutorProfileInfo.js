import * as style from "./TutorProfileInfo.module.css";
import { useState } from "react";

const subjectList = ["JavaScript", "PHP", "SQL", "ReactJS", "JavaScript", "JavaScript", "PHP"];

const TutorProfileInfo = () => {
  return (
    <div className={style["profile-bigcontainer"]}>
      <div className={style["profile-container"]}>
        <div className={style["user-avatar"]}>
          <img className={style["avatar-image"]} src={"/media/venti.jpg"} alt="" />
          <div className={style["rating-comment-container"]}>
            <div className={style["five-stars"]}>
              <img src={"/media/icons/star.svg"} alt="" />
              <img src={"/media/icons/star.svg"} alt="" />
              <img src={"/media/icons/star.svg"} alt="" />
              <img src={"/media/icons/star_empty.svg"} alt="" />
              <img src={"/media/icons/star_empty.svg"} alt="" />
            </div>
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
                {subjectList.map(subject => (
                  <div>{subject}</div>
                ))}
              </div>
            </div>
            <div className={style["button-container"]}>
              <div className={style["status"]}>
                <div>Status:</div>
                <div className={style["status-detail"]}>
                  <img className={style["green"]} src={"/media/icons/Green_sphere.svg"} alt="" />
                  <span className={style["green-active"]}>Available</span>
                  {/*<img className={style["red"]} src={"/media/icons/red-circle.svg"} alt="" />*/}
                  {/*<span className={style["red-offline"]}>Busy</span>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorProfileInfo;
