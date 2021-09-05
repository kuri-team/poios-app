import { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import DialogBox from "../../components/DialogBox";
import TogglePasswordButton from "../../components/Form/TogglePasswordButton";
import * as style from "./SignupPage.module.css";
import * as formStyle from "../../styles/form.module.css";
import * as commonStyle from "../../styles/common.module.css";
import * as dialogBoxStyle from "../../components/DialogBox.module.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  verify_password: "",
  err: "",
  success: "",
};

const SignupPage = ({ prevStepUrl, authRedirectTo }) => {
  const [avatar, setAvatar] = useState(null);
  const [user, setUser] = useState(initialState);
  const { name, email, password, verify_password, err, success } = user;

  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    //add validation here
    try {
      setUser({ ...user, err: "", success: "succeed" });
    } catch (err) {
      setUser({ ...user, err: "fail", success: "" });
    }
  };
  return (
    <Layout>
      <DialogBox background logo scroll>
        <div id="form" className={style["form"]}>
          <div className={[formStyle["field"], formStyle["field-column"], style["avatar"]].join(" ")}>
            <label htmlFor="avatar">
              <img
                className={style["avatar-preview"]}
                src={avatar ? avatar : "/media/profile-placeholder_143x143.png"}
                alt="Upload a photo"
                draggable={false}
              />
            </label>
            <input
              id="avatar"
              name="avatar"
              type="file"
              accept="image/jpeg,image/png"
              onChange={e => {
                const file = new FileReader();
                file.readAsDataURL(e.target.files[0]);
                file.onloadend = () => setAvatar(file.result);
              }}
              hidden
              aria-hidden
            />
          </div>
          <div
            className={[
              formStyle["field"],
              formStyle["field-column"],
              style["acc-type"],
              commonStyle["text-align-center"],
            ].join(" ")}
          >
            <label htmlFor="acc-type" className={commonStyle["text-align-center"]}>
              Hello, I am a
            </label>
            <select id="acc-type" name="acc-type" className={commonStyle["text-align-center"]}>
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
            </svg>
          </div>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className={commonStyle["text-align-center"]}
              type="email"
              onChange={handleChangeInput}
            />
          </div>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              className={commonStyle["text-align-center"]}
              type="text"
              onChange={handleChangeInput}
            />
          </div>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
            <label htmlFor="password">
              Password
              <TogglePasswordButton
                state={showPassword}
                callback={setShowPassword}
                fill="var(--white)"
                width="auto"
                height="18px"
                margin="0 0 0 10px"
              />
            </label>
            <input
              id="password"
              name="password"
              className={commonStyle["text-align-center"]}
              type={showPassword ? "text" : "password"}
              onChange={handleChangeInput}
            />
          </div>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
            <label htmlFor="verify-password">
              Verify Password
              <TogglePasswordButton
                state={showVerifyPassword}
                callback={setShowVerifyPassword}
                fill="var(--white)"
                width="auto"
                height="18px"
                margin="0 0 0 10px"
              />
            </label>
            <input
              id="verify-password"
              className={commonStyle["text-align-center"]}
              type={showPassword ? "text" : "password"}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className={[dialogBoxStyle["button-wrapper"], dialogBoxStyle["button-wrapper-col"]].join(" ")}>
          <Link to={authRedirectTo}>
            <button
              className={dialogBoxStyle["primary"]}
              onClick={() => {
                setShowPassword(false);
                handleSubmit();
              }}
            >
              Signup
            </button>
          </Link>
        </div>
        <div className={style["nav"]}>
          <Link to={prevStepUrl} className={style["primary"]}>
            Cancel
          </Link>
        </div>
      </DialogBox>
    </Layout>
  );
};

export default SignupPage;
