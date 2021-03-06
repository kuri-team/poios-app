import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/Layout";
import DialogBox from "../../components/DialogBox";
import TogglePasswordButton from "../../components/Form/TogglePasswordButton";
import * as style from "./SignupPage.module.css";
import * as formStyle from "../../styles/form.module.css";
import * as commonStyle from "../../styles/common.module.css";
import * as dialogBoxStyle from "../../components/DialogBox.module.css";

const SignupPage = ({ prevStepUrl, authRedirectTo }) => {
  const [avatar, setAvatar] = useState("");
  const [avaObj, setAvaObj] = useState();
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    verifypassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    //add validation here
    try {
      let data = new FormData();
      Object.entries(user).forEach(entry => {
        data.append(entry[0], entry[1]);
      });
      data.append("image", avaObj);
      await axios({
        method: "post",
        url: "/auth/signup",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });

      localStorage.setItem("firstLogin", true);
      window.location.href = "/core/fields-of-study";
    } catch (err) {
      alert(err.response.data.msg);
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
              accept="image/jpeg,image/png,image/jpg"
              onChange={e => {
                const file = new FileReader();
                file.readAsDataURL(e.target.files[0]);
                file.onloadend = () => setAvatar(file.result);
                setAvaObj(e.target.files[0]);
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
            <select
              id="acc-type"
              name="role"
              className={commonStyle["text-align-center"]}
              value={user.role}
              onChange={onChangeInput}
            >
              <option value="">Choose a role</option>
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
              value={user.email}
              onChange={onChangeInput}
            />
          </div>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
            <label htmlFor="name">Username</label>
            <input
              id="name"
              name="name"
              className={commonStyle["text-align-center"]}
              type="text"
              value={user.name}
              onChange={onChangeInput}
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
              value={user.password}
              onChange={onChangeInput}
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
              name="verifypassword"
              className={commonStyle["text-align-center"]}
              type={showPassword ? "text" : "password"}
              value={user.verifypassword}
              onChange={onChangeInput}
            />
          </div>
        </div>
        <div className={[dialogBoxStyle["button-wrapper"], dialogBoxStyle["button-wrapper-col"]].join(" ")}>
          <button
            className={[dialogBoxStyle["primary"], style["button"]].join(" ")}
            onClick={() => {
              setShowPassword(false);
              handleSubmit();
            }}
          >
            Signup
          </button>
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
