import { useState } from "react";
import * as style from "./OwnProfileInfo.module.css";

const OwnProfileInfo = (editName, editEmail, editPassword) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);

  return (
    <div className={style["profile-bigcontainer"]}>
      <div className={style["profile-container"]}>
        <div className={style["user-avatar"]}>
          <img className={style["avatar-image"]} src={"media/kequing.jpg"} alt="" />
          <div className={style["upload-image-form"]}>
            <form>
              <input type="file" value={file} onChange={e => setFile(e.target.files[0])} />
            </form>
            <div>
              <img src={"media/icons/pencil-edit-button copy.svg"} alt="" />
            </div>
          </div>
        </div>

        <div className={style["user-info-display"]}>
          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <label htmlFor="name">Name: </label>
              <div>
                <p>Sup Lo</p>
              </div>
            </div>
            <img src={"media/icons/pencil-edit-button copy.svg"} alt="" onClick={editName} />
            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <label htmlFor="name">Email: </label>
              <div>
                <p>s1234567@rmit.edu.vn</p>
              </div>
            </div>
            <img src={"media/icons/pencil-edit-button copy.svg"} alt="" onClick={editEmail} />
            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <label htmlFor="name">Password: </label>
              <div>
                <p>*********</p>
              </div>
            </div>
            <img src={"media/icons/pencil-edit-button copy.svg"} alt="" onClick={editPassword} />
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
            <img src={"media/icons/pencil-edit-button copy.svg"} alt="" onClick={editEmail} />
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

export default OwnProfileInfo;
