import { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import DialogBox from "../../components/DialogBox";
import TogglePasswordButton from "../../components/Form/TogglePasswordButton";
import * as style from "./LoginPage.module.css";
import * as commonStyle from "../../styles/common.module.css";
import * as formStyle from "../../styles/form.module.css";
import * as dialogBoxStyle from "../../components/DialogBox.module.css";

const LoginPage = ({ authRedirectTo, forgotPasswordUrl }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <DialogBox background logo>
        <div id="form" className={style["form"]}>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
            <label htmlFor="userid">Username/Email</label>
            <input id="userid" name="userid" className={commonStyle["text-align-center"]} type="text" />
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
        </div>
        <div className={[dialogBoxStyle["button-wrapper"], dialogBoxStyle["button-wrapper-col"]].join(" ")}>
          <Link to={authRedirectTo}>
            <button
              className={dialogBoxStyle["primary"]}
              onClick={() => {
                setShowPassword(false);
              }}
            >
              Login
            </button>
          </Link>
          <Link to={forgotPasswordUrl}>Forgot Password?</Link>
        </div>
      </DialogBox>
    </Layout>
  );
};

export default LoginPage;
