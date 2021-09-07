import { useContext, useEffect, useState } from "react";

import { GlobalState } from "../../GlobalState";
import * as style from "./MyProfileInfo.module.css";
import axios from "axios";

const subjectList = ["JavaScript", "PHP", "SQL", "ReactJS", "JavaScript", "JavaScript", "PHP"];

const MyProfileInfo = () => {
  const state = useContext(GlobalState);
  const [userInfo, setUserInfo] = state.userApi.userInfo;
  console.log(userInfo);

  const initialState = {
    name: "",
    email: "",
    role: "",
    subject: "",
    avatar: "",
  };

  const [editUser, setEditUser] = useState(initialState);
  const { name, email, role, subject, avatar } = editUser;

  const [file, setFile] = useState(null);
  const [nameDisplay, setNameDisplay] = useState(false);
  const [emailDisplay, setEmailDisplay] = useState(false);
  const [roleDisplay, setRoleDisplay] = useState(false);
  const [subjectDisplay, setSubjectDisplay] = useState(false);

  const onChangeInput = e => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
    console.log(editUser.name);
  };

  const updateInfo = () => {
    try {
      axios.patch(
        "/profile/my-profile",
        {
          name: name ? editUser.name : userInfo.name,
          email: email ? editUser.email : userInfo.email,
          role: role ? editUser.role : userInfo.role,
          subject: subject ? editUser.subject : userInfo.subject,
          avatar: avatar ? editUser.avatar : userInfo.avatar,
        },
        {
          headers: { Authorization: token },
        },
      );
      setEditUser({ ...editUser });
      alert("Update Successfully!");
    } catch (err) {
      alert("Update Failed.");
    }
  };

  console.log(nameDisplay);
  const handleSubmit = () => {
    if (name || email || role || subject) {
      updateInfo();
    }

    if ((nameDisplay || emailDisplay || subjectDisplay) == true) {
      setNameDisplay(false);
      setEmailDisplay(false);
      setSubjectDisplay(false);
      setRoleDisplay(false);
    }
  };

  const displayNameEdit = () => {
    setNameDisplay(true);
  };
  const displayEmailEdit = () => {
    setEmailDisplay(true);
  };
  const displayRoleEdit = () => {
    setRoleDisplay(true);
  };
  const displaySubjectEdit = () => {
    setSubjectDisplay(true);
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
              <img src={"/media/icons/pencil-edit-button-copy.svg"} alt="" />
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
                  <input
                    id="name"
                    type="text"
                    className={style["form-control"]}
                    name="name"
                    defaultValue={userInfo.name}
                    onChange={onChangeInput}
                  />
                ) : (
                  <span>{userInfo.name}</span>
                )}
              </div>
              {nameDisplay ? (
                <button
                  className={style["mini-save-button"]}
                  value="SAVE"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  SAVE
                </button>
              ) : (
                <img src={"/media/icons/pencil-edit-button-copy.svg"} alt="" onClick={() => displayNameEdit()} />
              )}
            </div>
            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <div className={style["label-container"]}>
                <label htmlFor="email">Email: </label>
              </div>
              <div className={style["input-place"]}>
                {emailDisplay ? (
                  <input
                    type="text"
                    id="email"
                    className={style["form-control"]}
                    name="email"
                    defaultValue={userInfo.email}
                    onChange={onChangeInput}
                  />
                ) : (
                  <span>{userInfo.email}</span>
                )}
              </div>
              {emailDisplay ? (
                <button
                  className={style["mini-save-button"]}
                  value="SAVE"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  SAVE
                </button>
              ) : (
                <img src={"/media/icons/pencil-edit-button-copy.svg"} alt="" onClick={() => displayEmailEdit()} />
              )}
            </div>

            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <div className={style["label-container"]}>
                <label htmlFor="role">Role: </label>
              </div>
              <div className={style["input-place"]}>
                {roleDisplay ? (
                  <input
                    id="role"
                    type="text"
                    className={style["form-control"]}
                    name="role"
                    defaultValue={userInfo.role}
                    onChange={onChangeInput}
                  />
                ) : (
                  <span>{userInfo.role}</span>
                )}
              </div>
              {roleDisplay ? (
                <button
                  className={style["mini-save-button"]}
                  value="SAVE"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  SAVE
                </button>
              ) : (
                <img src={"/media/icons/pencil-edit-button-copy.svg"} alt="" onClick={() => displayRoleEdit()} />
              )}
            </div>
            <hr />
          </div>

          <div className={style["user-info-element"]}>
            <div className={style["user-info-row"]}>
              <div className={style["label-container"]}>
                <label htmlFor="subject">Subject: </label>
              </div>
              {subjectDisplay ? (
                <div className={style["input-place"]}>
                  <input
                    type="text"
                    className={style["form-control"]}
                    id="subject"
                    name="subject"
                    defaultValue={userInfo.subject}
                    onChange={onChangeInput}
                  />
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
                  value="SAVE"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  SAVE
                </button>
              ) : (
                <img src={"/media/icons/pencil-edit-button-copy.svg"} alt="" onClick={() => displaySubjectEdit()} />
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
