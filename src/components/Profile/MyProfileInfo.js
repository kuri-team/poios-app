import { useState } from "react";
import * as style from "./MyProfileInfo.module.css";

const MyProfileInfo = (editAva, editName, editEmail, editPassword, editSubject) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [isOn, setIsOn] = useState(false);

  const displayForm = () => {
    setIsOn(!isOn);
    console.log("hello");
  };

  return (
    <div className={style["profile-bigcontainer"]}>
      <div className={style["profile-container"]}>
        <div className={style["user-avatar"]}>
          <img className={style["avatar-image"]} src={"/media/kequing.jpg"} alt="" />
          <div className={style["upload-image-form"]}>
            <div className={style["form-image-upload"]}>
              <input type="file" id="contained-button-file" value={file} onChange={e => setFile(e.target.files[0])} />
              <div className={style["fake-file"]}>
                <label htmlFor="contained-button-file">Upload Image</label>
              </div>
            </div>
            <div>
              <img src={"/media/icons/pencil-edit-button copy.svg"} alt="" />
            </div>
          </div>
        </div>

        <div className={style["user-info-display"]}>
          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <label htmlFor="name">Name: </label>
              <div className={style["input-place"]}>
                {isOn ? (
                  <input type="text" className={style["form-control"]} value={e => e.target.value} />
                ) : (
                  <span>Sup Lo</span>
                )}
              </div>
            </div>
            <img src={"/media/icons/pencil-edit-button copy.svg"} alt="" onClick={() => displayForm()} />
            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <label htmlFor="name">Email: </label>
              <div>
                <span>s1234567@rmit.edu.vn</span>
              </div>
            </div>
            <img src={"/media/icons/pencil-edit-button copy.svg"} alt="" onClick={editEmail} />
            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <label htmlFor="name">Password: </label>
              <div>
                <span>*********</span>
              </div>
            </div>
            <img src={"/media/icons/pencil-edit-button copy.svg"} alt="" onClick={editPassword} />
            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <label htmlFor="name">Subject: </label>
              <div>
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
            <img src={"/media/icons/pencil-edit-button copy.svg"} alt="" onClick={editSubject} />
            <hr />
          </div>

          <button className={style["savebutton"]} type="submit" value="SAVE">
            SAVE
          </button>
        </div>

        {/*EDIT USER INFO*/}
        {/*<div className={style["user-info"]}>*/}
        {/*  <form onSubmit={e => e.preventDefault()}>*/}
        {/*    <label htmlFor="name">Name: </label>*/}
        {/*    <input*/}
        {/*      type="text"*/}
        {/*      id="name"*/}
        {/*      value={name}*/}
        {/*      className={style["form-control"]}*/}
        {/*      onChange={e => setName(e.target.value)}*/}
        {/*    />*/}

        {/*    <label htmlFor="email">Email: </label>*/}
        {/*    <input*/}
        {/*      type="email"*/}
        {/*      id="email"*/}
        {/*      value={email}*/}
        {/*      className={style["form-control"]}*/}
        {/*      onChange={e => setEmail(e.target.value)}*/}
        {/*    />*/}

        {/*    <label htmlFor="password">Password: </label>*/}
        {/*    <input*/}
        {/*      type="password"*/}
        {/*      id="password"*/}
        {/*      value={password}*/}
        {/*      className={style["form-control"]}*/}
        {/*      onChange={e => setPassword(e.target.value)}*/}
        {/*    />*/}

        {/*    <label htmlFor="subject">Subject: </label>*/}
        {/*    <input*/}
        {/*      type="subject"*/}
        {/*      id="subject"*/}
        {/*      value={subject}*/}
        {/*      className={style["form-control"]}*/}
        {/*      onChange={e => setSubject(e.target.value)}*/}
        {/*    />*/}

        {/*    <button type="submit" value="Save">SAVE</button>*/}
        {/*  </form>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default MyProfileInfo;
