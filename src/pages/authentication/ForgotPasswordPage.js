import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import * as style from "./ForgotPasswordPage.module.css";

const ForgotPasswordPage = () => {
  return (
    <Layout className={style["container"]}>
      <img src={"/media/poios_background.jpg"} alt="" className={style["background"]} />
      <div className={style["forgot-password-box"]}>
        <div className={style["Poios-logo"]}>
          <img src={"/media/logo_Wordmark_Primary.png"} alt="" className={style["logo-pic"]} />
        </div>
        <form className={style["forgot-pass-form"]} method={"post"}>
          <div className={style["forgot-input"]}>
            <label className={style["forgot-input-label"]}>Enter your email to retrieve password</label>
            <br />
            <input className={style["forgot-input-field"]} type={"email"} />
          </div>
          <div className={style["forgot-btn-bx"]}>
            <button className={style["deny-btn"]}>Cancel</button>
            <Link to="/entercode">
              <button className={style["accept-btn"]}>Send</button>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPasswordPage;
