import { useContext, useEffect, useState } from "react";

import { GlobalState } from "../../GlobalState";
import * as style from "./MyProfileInfo.module.css";
import axios from "axios";

const MyProfileInfo = () => {
  const state = useContext(GlobalState);
  const [userInfo] = state.userApi.userInfo;
  const token = state.token[0];
  const subjectList = userInfo.subjects;
  console.log(userInfo.subjects);
  console.log(userInfo);

  const initialState = {
    name: "",
    email: "",
    role: "",
    subjects: [],
    avatar: "",
  };

  const [editUser, setEditUser] = useState(initialState);
  const { name, email, role, subjects, avatar } = editUser;

  const [file, setFile] = useState(null);
  const [nameDisplay, setNameDisplay] = useState(false);
  const [emailDisplay, setEmailDisplay] = useState(false);
  const [roleDisplay, setRoleDisplay] = useState(false);
  const [subjectDisplay, setSubjectDisplay] = useState(false);

  const onChangeInput = e => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const updateInfo = () => {
    try {
      axios.patch(
        "/profile/my-profile/update",
        {
          name: name ? name : userInfo.name,
          email: email ? email : userInfo.email,
          role: role ? role : userInfo.role,
          subjects: subjects ? subjects : userInfo.subjects,
          avatar: avatar ? avatar : userInfo.avatar,
        },
        {
          headers: { Authorization: token },
        },
      );

      setEditUser({ ...editUser });

      alert("Update Successfully!");
      window.location.reload();
    } catch (err) {
      alert("Update Failed.");
    }
  };

  const handleSubmit = () => {
    if (name || email || role || subjects) {
      updateInfo();
    }

    if ((nameDisplay || emailDisplay || roleDisplay || subjectDisplay) == true) {
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
                  <>
                    <div className={style["student-radio"]}>
                      <input
                        id="student"
                        type="radio"
                        className={style["radio-form-control"]}
                        name="role"
                        value="student"
                        onChange={onChangeInput}
                      />
                      <label htmlFor="student">Student</label>
                    </div>
                    <div className={style["tutor-radio"]}>
                      <input
                        id="tutor"
                        type="radio"
                        className={style["radio-form-control"]}
                        name="role"
                        value="tutor"
                        onChange={onChangeInput}
                      />
                      <label htmlFor="tutor">Tutor</label>
                    </div>
                  </>
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
                <label htmlFor="subject">Subjects: </label>
              </div>
              {subjectDisplay ? (
                <div className={style["input-place"]}>
                  <input
                    type="text"
                    className={style["form-control"]}
                    id="subjects"
                    name="subjects"
                    defaultValue={userInfo.subjects}
                    onChange={onChangeInput}
                  />
                </div>
              ) : (
                <div className={style["subject-list"]}>
                  {subjectList.map((subject, key) => {
                    return <div key={key}>{subject}</div>;
                  })}
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
