import Layout from "../components/Layout";
import * as ForgotPwdstyle from "./ForgotPwd.module.css";
const EnterCodePage = () => {
  return (
    <Layout className={ForgotPwdstyle["container"]}>
      <img src={"/media/poios_background.jpg"} alt="" className={ForgotPwdstyle["background"]} />
      <div className={ForgotPwdstyle["reset-password-box"]}>
        <div className={ForgotPwdstyle["Poios-logo"]}>
          <img src={"/media/logo_Wordmark_Primary.png"} alt="" className={ForgotPwdstyle["logo-pic"]} />
        </div>
        <p> A verification code has been sent to your email</p>
        <a href={""} className={ForgotPwdstyle["change-email"]}>
          Change email
        </a>
        <form className={ForgotPwdstyle["forgot-pass-form"]} method={"post"}>
          <div className={ForgotPwdstyle["forgot-input"]}>
            <label className={ForgotPwdstyle["forgot-input-label"]}>ENTER VERIFICATION CODE</label>
            <br />
            <input className={ForgotPwdstyle["forgot-input-field"]} type={"text"} />
          </div>
          <div className={ForgotPwdstyle["forgot-btn-bx"]}>
            <button className={ForgotPwdstyle["deny-btn"]}>Resend</button>
            <button className={ForgotPwdstyle["accept-btn"]}>Verify</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EnterCodePage;
