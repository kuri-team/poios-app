import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import DialogBox from "../../components/DialogBox";
import * as style from "./ForgotPasswordVerifyPage.module.css";
import * as forgotPasswordStyle from "./ForgotPasswordPage.module.css";
import * as formStyle from "../../styles/form.module.css";
import * as commonStyle from "../../styles/common.module.css";
import * as dialogBoxStyle from "../../components/DialogBox.module.css";

const ForgotPasswordVerifyPage = ({ resetUrl, prevStepUrl, nextStepUrl }) => (
  <Layout>
    <DialogBox background logo>
      <div id="form" className={[forgotPasswordStyle["form"], style["form"]].join(" ")}>
        <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
          <label htmlFor="code" className={forgotPasswordStyle["label"]}>
            Please enter the verification code sent to your email to continue
          </label>
          <input id="code" name="code" className={commonStyle["text-align-center"]} type="text" />
        </div>
        <Link to={prevStepUrl}>Change email</Link>
      </div>
      <div className={[dialogBoxStyle["button-wrapper"], forgotPasswordStyle["button-wrapper"]].join(" ")}>
        <Link to={resetUrl}>
          <button>Cancel</button>
        </Link>
        <Link to={nextStepUrl}>
          <button className={dialogBoxStyle["primary"]}>Verify</button>
        </Link>
      </div>
    </DialogBox>
  </Layout>
);

export default ForgotPasswordVerifyPage;
