import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import * as ForgotPwdstyle from "./ForgotPwd.module.css";
const EnterCodePage = () => {
  return (
    <Layout className={ForgotPwdstyle["container"]}>
      <img src={"/media/poios_background.jpg"} alt="" className={ForgotPwdstyle["background"]} />
      <div className={ForgotPwdstyle["forgot-password-box"]}>
        <div className={ForgotPwdstyle["Poios-logo"]}>
          <img src={"/media/logo_Wordmark_Primary.png"} alt="" className={ForgotPwdstyle["logo-pic-entercode-page"]} />
        </div>
        <div className={ForgotPwdstyle["notice"]}>
          <p> A verification code has been sent to your email</p>
          <a href={"/forgotpwd"} className={ForgotPwdstyle["change-email"]}>
            Change email
          </a>
        </div>
        <form className={ForgotPwdstyle["forgot-pass-form"]} method={"post"}>
          <div className={ForgotPwdstyle["forgot-input"]}>
            <label className={ForgotPwdstyle["forgot-input-label"]}>ENTER VERIFICATION CODE</label>
            <br />
            <input className={ForgotPwdstyle["forgot-input-field"]} type={"text"} />
          </div>
          <div className={ForgotPwdstyle["forgot-btn-bx"]}>
            <button className={ForgotPwdstyle["deny-btn"]}>Resend</button>
            <Link to="/updatepwd">
              <button className={ForgotPwdstyle["accept-btn"]}>Verify</button>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EnterCodePage;
