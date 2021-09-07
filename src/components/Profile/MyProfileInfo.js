import { useState } from "react";
import * as style from "./MyProfileInfo.module.css";

const subjectList = ["JavaScript", "PHP", "SQL", "ReactJS", "JavaScript", "JavaScript", "PHP"];

const MyProfileInfo = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [nameDisplay, setNameDisplay] = useState(false);
  const [emailDisplay, setEmailDisplay] = useState(false);
  const [passDisplay, setPassDisplay] = useState(false);
  const [subjectDisplay, setSubjectDisplay] = useState(false);

  const displayNameEdit = () => {
    setNameDisplay(true);
  };
  const displayEmailEdit = () => {
    setEmailDisplay(true);
  };
  const displayPassEdit = () => {
    setPassDisplay(true);
    console.log("setPassDisplay");
  };
  const displaySubjectEdit = () => {
    setSubjectDisplay(true);
    console.log("setSubjectDisplay");
  };

  return (
    <div className={style["profile-bigcontainer"]}>
      <div className={style["profile-container"]}>
        <div className={style["user-avatar"]}>
          <span>{file}</span>
          <img className={style["avatar-image"]} src={"/media/kequing.jpg"} alt="" />
          <div className={style["upload-image-form"]}>
            <div className={style["form-image-upload"]}>
              <input type="file" id="contained-button-file" onChange={e => setFile(e.target.files[0])} />
              <div className={style["fake-file"]}>
                <label htmlFor="contained-button-file">Upload Image</label>
              </div>
            </div>
            <label htmlFor="contained-button-file">
              <img src={"/media/icons/pencil-edit-button copy.svg"} alt="" />
            </label>
          </div>
        </div>

        <div className={style["user-info-display"]}>
          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <div className={style["label-container"]}>
                <label htmlFor="name">Name: </label>
              </div>
              <div className={style["input-place"]}>
                {nameDisplay ? (
                  <input type="text" className={style["form-control"]} onChange={e => setName(e.target.value)} />
                ) : (
                  <span>{name}</span>
                )}
              </div>
              {nameDisplay ? (
                <button
                  className={style["mini-save-button"]}
                  type="submit"
                  value="SAVE"
                  onClick={() => setNameDisplay(false)}
                >
                  SAVE
                </button>
              ) : (
                <img src={"/media/icons/pencil-edit-button copy.svg"} alt="" onClick={() => displayNameEdit()} />
              )}
            </div>
            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <div className={style["label-container"]}>
                <label htmlFor="name">Email: </label>
              </div>
              <div className={style["input-place"]}>
                {emailDisplay ? (
                  <input type="text" className={style["form-control"]} onChange={e => setEmail(e.target.value)} />
                ) : (
                  <span>{email}</span>
                )}
              </div>
              {emailDisplay ? (
                <button
                  className={style["mini-save-button"]}
                  type="submit"
                  value="SAVE"
                  onClick={() => setEmailDisplay(false)}
                >
                  SAVE
                </button>
              ) : (
                <img src={"/media/icons/pencil-edit-button copy.svg"} alt="" onClick={() => displayEmailEdit()} />
              )}
            </div>

            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <div className={style["label-container"]}>
                <label htmlFor="name">Password: </label>
              </div>
              <div className={style["input-place"]}>
                {passDisplay ? (
                  <input type="text" className={style["form-control"]} onChange={e => setPassword(e.target.value)} />
                ) : (
                  <span>{password}</span>
                )}
              </div>
              {passDisplay ? (
                <button
                  className={style["mini-save-button"]}
                  type="submit"
                  value="SAVE"
                  onClick={() => setPassDisplay(false)}
                >
                  SAVE
                </button>
              ) : (
                <img src={"/media/icons/pencil-edit-button copy.svg"} alt="" onClick={() => displayPassEdit()} />
              )}
            </div>

            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <div className={style["label-container"]}>
                <label htmlFor="name">Subject: </label>
              </div>
              {subjectDisplay ? (
                <div className={style["input-place"]}>
                  <input type="text" className={style["form-control"]} onChange={e => setSubject(e.target.value)} />
                </div>
              ) : (
                <div className={style["subject-list"]}>
                  {subjectList.map(subject => (
                    <div>{subject}</div>
                  ))}
                </div>
              )}
              {subjectDisplay ? (
                <button
                  className={style["mini-save-button"]}
                  type="submit"
                  value="SAVE"
                  onClick={() => setSubjectDisplay(false)}
                >
                  SAVE
                </button>
              ) : (
                <img src={"/media/icons/pencil-edit-button copy.svg"} alt="" onClick={() => displaySubjectEdit()} />
              )}
            </div>

            <hr />
          </div>
          {/*<button className={style["savebutton"]} type="submit" value="SAVE" onClick={handleButtonClicked()}>*/}
          {/*  SAVE*/}
          {/*</button>*/}
        </div>
      </div>
    </div>
  );
};

export default MyProfileInfo;
