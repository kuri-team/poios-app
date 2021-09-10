import { useState } from "react";

import * as style from "./MyProfileInfo.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const MyProfileInfo = ({ state }) => {
  const [userInfo, setUserInfo] = state.userApi.userInfo;
  const token = state.token[0];
  const getMajor = userInfo.major;
  const subjectList = userInfo.subjects;
  console.log(getMajor);

  const initialState = {
    name: "",
    email: "",
    role: "",
    avatar: "",
  };

  const [editUser, setEditUser] = useState(initialState);
  const { name, email, role, avatar } = editUser;

  const [file, setFile] = useState(null);
  const [nameDisplay, setNameDisplay] = useState(false);
  const [emailDisplay, setEmailDisplay] = useState(false);
  const [roleDisplay, setRoleDisplay] = useState(false);

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
    if (name || email || role) {
      updateInfo();
    }

    if ((nameDisplay || emailDisplay || roleDisplay) == true) {
      setNameDisplay(false);
      setEmailDisplay(false);
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

  return (
    <div className={style["profile-bigcontainer"]}>
      {subjectList == null || token == null || getMajor == null ? (
        "Loading..."
      ) : (
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
                  <label htmlFor="major">Major: </label>
                </div>
                <div className={style["input-place"]}>
                  <span>{getMajor}</span>
                </div>
                <Link to={"/core/fields-of-study"}>
                  <img src={"/media/icons/pencil-edit-button-copy.svg"} alt="" />
                </Link>
              </div>
              <hr />
            </div>

            <div className={style["user-info-element"]}>
              <div className={style["user-info-row"]}>
                <div className={style["label-container"]}>
                  <label htmlFor="subject">Subjects: </label>
                </div>
                <div className={style["subject-list"]}>
                  {subjectList.map((subject, key) => {
                    return <div key={key}>{subject}</div>;
                  })}
                </div>
                <Link to={"/core/fields-of-study"}>
                  <img src={"/media/icons/pencil-edit-button-copy.svg"} alt="" />
                </Link>
              </div>
              <hr />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfileInfo;
