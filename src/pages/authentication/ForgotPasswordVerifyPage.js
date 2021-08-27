import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import * as style from "./ForgotPasswordPage.module.css";

const ForgotPasswordVerifyPage = () => {
  return (
    <Layout className={style["container"]}>
      <img src={"/media/poios_background.jpg"} alt="" className={style["background"]} />
      <div className={style["forgot-password-box"]}>
        <div className={style["Poios-logo"]}>
          <img src={"/media/logo_Wordmark_Primary.png"} alt="" className={style["logo-pic-entercode-page"]} />
        </div>
        <div className={style["notice"]}>
          <p> A verification code has been sent to your email</p>
          <a href={"/forgotpwd"} className={style["change-email"]}>
            Change email
          </a>
        </div>
        <form className={style["forgot-pass-form"]} method={"post"}>
          <div className={style["forgot-input"]}>
            <label className={style["forgot-input-label"]}>ENTER VERIFICATION CODE</label>
            <br />
            <input className={style["forgot-input-field"]} type={"text"} />
          </div>
          <div className={style["forgot-btn-bx"]}>
            <button className={style["deny-btn"]}>Resend</button>
            <Link to="/updatepwd">
              <button className={style["accept-btn"]}>Verify</button>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPasswordVerifyPage;
