import { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import DialogBox from "../../components/DialogBox";
import TogglePasswordButton from "../../components/Form/TogglePasswordButton";
import * as style from "./SignupPage.module.css";
import * as formStyle from "../../styles/form.module.css";
import * as commonStyle from "../../styles/common.module.css";
import * as dialogBoxStyle from "../../components/DialogBox.module.css";

const SignupPage = ({ prevStepUrl, authRedirectTo }) => {
  const [avatar, setAvatar] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

  return (
    <Layout>
      <DialogBox background logo>
        <div id="form" className={style["form"]}>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
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
                file.onloadend = () => {
                  setAvatar(file.result);
                  console.log(file.result);
                };
              }}
              hidden
              aria-hidden
            />
          </div>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" className={commonStyle["text-align-center"]} type="email" />
          </div>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
            <label htmlFor="username">Username</label>
            <input id="username" name="username" className={commonStyle["text-align-center"]} type="email" />
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
            />
          </div>
        </div>
        <div className={[dialogBoxStyle["button-wrapper"], dialogBoxStyle["button-wrapper-col"]].join(" ")}>
          <Link to={authRedirectTo}>
            <button
              className={dialogBoxStyle["primary"]}
              onClick={() => {
                setShowPassword(false);
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
