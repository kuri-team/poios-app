import Layout from "../../components/Layout";
import * as style from "./ForgotPasswordPage.module.css";

const UpdatePasswordPage = () => {
  return (
    <Layout className={style["container"]}>
      <img src={"/media/poios_background.jpg"} alt="" className={style["background"]} />
      <div className={style["forgot-password-box"]}>
        <div className={style["Poios-logo"]}>
          <img src={"/media/logo_Wordmark_Primary.png"} alt="" className={style["logo-pic"]} />
        </div>
        <form className={style["forgot-pass-form"]} method={"post"}>
          <div className={style["forgot-input"]}>
            <label className={style["forgot-input-label"]}>Enter a new password</label>
            <br />
            <input className={style["forgot-input-field"]} type={"password"} />
          </div>
          <div className={style["forgot-btn-bx"]}>
            <button className={style["deny-btn"]}>Cancel</button>
            <button className={style["accept-btn"]}>Update</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default UpdatePasswordPage;
