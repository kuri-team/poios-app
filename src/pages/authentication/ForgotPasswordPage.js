import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import DialogBox from "../../components/DialogBox";
import * as style from "./ForgotPasswordPage.module.css";
import * as commonStyle from "../../styles/common.module.css";
import * as formStyle from "../../styles/form.module.css";
import * as dialogBoxStyle from "../../components/DialogBox.module.css";

const ForgotPasswordPage = ({ resetUrl, nextStepUrl }) => {
  return (
    <Layout className={style["container"]}>
      <DialogBox background logo>
        <div id="form" className={style["form"]}>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
            <label className={style["label"]}>Enter your email to retrieve password</label>
            <input className={commonStyle["text-align-center"]} type="email" />
          </div>
        </div>
        <div className={[dialogBoxStyle["button-wrapper"], style["button-wrapper"]].join(" ")}>
          <Link to={resetUrl}>
            <button>Cancel</button>
          </Link>
          <Link to={nextStepUrl}>
            <button className={dialogBoxStyle["primary"]}>Send</button>
          </Link>
        </div>
      </DialogBox>
    </Layout>
  );
};

export default ForgotPasswordPage;
