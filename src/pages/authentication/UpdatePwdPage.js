import Layout from "../../components/Layout";
import * as ForgotPwdstyle from "./ForgotPwd.module.css";
const ForgotPwdPage = () => {
  return (
    <Layout className={ForgotPwdstyle["container"]}>
      <img src={"/media/poios_background.jpg"} alt="" className={ForgotPwdstyle["background"]} />
      <div className={ForgotPwdstyle["forgot-password-box"]}>
        <div className={ForgotPwdstyle["Poios-logo"]}>
          <img src={"/media/logo_Wordmark_Primary.png"} alt="" className={ForgotPwdstyle["logo-pic"]} />
        </div>
        <form className={ForgotPwdstyle["forgot-pass-form"]} method={"post"}>
          <div className={ForgotPwdstyle["forgot-input"]}>
            <label className={ForgotPwdstyle["forgot-input-label"]}>Enter a new password</label>
            <br />
            <input className={ForgotPwdstyle["forgot-input-field"]} type={"password"} />
          </div>
          <div className={ForgotPwdstyle["forgot-btn-bx"]}>
            <button className={ForgotPwdstyle["deny-btn"]}>Cancel</button>
            <button className={ForgotPwdstyle["accept-btn"]}>Update</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPwdPage;
