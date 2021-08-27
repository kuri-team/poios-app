import Layout from "../../components/Layout";
import PoiosBackground from "../../components/PoiosBackground";
import * as commonStyle from "../IndexPage.module.css";
import * as style from "./LoginPage.module.js.css";

const LoginPage = () => {
  return (
    <Layout className={commonStyle["container"] + " " + commonStyle["home"]}>
      <PoiosBackground />
      <div className={["login-box"]}>
        <form className={["login-form"]} method={"post"}>
          <div className={["brand-display"]}>
            <img src={"/media/Wordmark_Primary.svg"} className={["brand-name"]} alt="" /> <br />
            <a href={""} className={"go-back"}>
              Back
            </a>
          </div>

          <div className={style["login-field-box"]}>
            <div className={style["login-field-wrapper"]}>
              <label className={style["login-field-label"]}>Username/ Email</label>
              <br />
            </div>
            <div className={style["login-field-wrapper"]}>
              <input className={style["login-field-input"]} type={"textarea"} />
              <br />
            </div>
            <label className={style["login-field-label"]}>Password</label>
            <br />
            <input className={style["login-field-input"]} type={"password"} />
          </div>
          <div className={style["login-btn-box"]}>
            <button className={style["login-btn"]}>LOGIN</button> <br />
            <a href={""} className={style["forgot-password"]}>
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;
