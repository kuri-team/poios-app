import { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import DialogBox from "../../components/DialogBox";
import * as forgotPasswordStyle from "./ForgotPasswordPage.module.css";
import * as formStyle from "../../styles/form.module.css";
import * as commonStyle from "../../styles/common.module.css";
import * as dialogBoxStyle from "../../components/DialogBox.module.css";
import TogglePasswordButton from "../../components/Form/TogglePasswordButton";

const UpdatePasswordPage = ({ resetUrl, nextStepUrl }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <DialogBox background logo>
        <div id="form" className={forgotPasswordStyle["form"]}>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
            <TogglePasswordButton
              state={showPassword}
              callback={setShowPassword}
              fill="var(--white)"
              width="auto"
              height="18px"
              margin="0 0 16px 0"
            />
            <label htmlFor="password" className={forgotPasswordStyle["label"]}>
              Enter new password
            </label>
            <input
              id="password"
              name="password"
              className={commonStyle["text-align-center"]}
              type={showPassword ? "text" : "password"}
            />
          </div>
        </div>
        <div className={[dialogBoxStyle["button-wrapper"], forgotPasswordStyle["button-wrapper"]].join(" ")}>
          <Link to={resetUrl}>
            <button>Cancel</button>
          </Link>
          <Link to={nextStepUrl}>
            <button className={dialogBoxStyle["primary"]}>Update</button>
          </Link>
        </div>
      </DialogBox>
    </Layout>
  );
};

export default UpdatePasswordPage;
