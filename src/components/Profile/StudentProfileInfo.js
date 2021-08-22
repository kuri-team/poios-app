import * as style from "../../styles/StudentProfileInfo.module.css";
import { useState } from "react";

const StudentProfileInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);

  return (
    <div className={style["profile-bigcontainer"]}>
      <h1>Profile</h1>
      <div className={style["profile-container"]}>
        <div className={style["user-avatar"]}>
          <img src={"media/kequing.jpg"} />
          <div className={style["upload-image-form"]}>
            <div>
              <form>
                <input type="file" value={file} onChange={e => setFile(e.target.files[0])} />
              </form>
            </div>
            <div>
              <img src={"media/icons/pencil-edit-button copy.svg"} />
            </div>
          </div>
        </div>

        <div className={style["user-info-display"]}>
          <div className={style["user-info-element"]}>
            <ul className={style["user-info-row"]}>
              <li>
                <label htmlFor="name">Name: </label>
              </li>
              <li>
                <p>Sup Lo</p>
              </li>
            </ul>
            <img src={"media/icons/pencil-edit-button copy.svg"} />
            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <ul className={style["user-info-row"]}>
              <li>
                <label htmlFor="name">Email: </label>
              </li>
              <li>
                <p>s1234567@rmit.edu.vn</p>
              </li>
            </ul>
            <img src={"media/icons/pencil-edit-button copy.svg"} />
            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <ul className={style["user-info-row"]}>
              <li>
                <label htmlFor="name">Password: </label>
              </li>
              <li>
                <p>*********</p>
              </li>
            </ul>
            <img src={"media/icons/pencil-edit-button copy.svg"} />
            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <ul className={style["user-info-row"]}>
              <li>
                <label htmlFor="name">Subject: </label>
              </li>
              <li>
                <p>s1234567@rmit.edu.vn</p>
              </li>
            </ul>
            <img src={"media/icons/pencil-edit-button copy.svg"} />
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

export default StudentProfileInfo;
