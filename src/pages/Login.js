import Layout from "../components/Layout";
import * as commonStyle from "./Home.module.css";
import * as style from "./Login.module.js.css";

const Login = () => {
  return (
    <Layout className={commonStyle["container"] + " " + commonStyle["home"]}>
      <img src={"/media/bg.jpg"} alt="" className={commonStyle["background"]} />
      <div className={["login-box"]}>
        <form className={["login-form"]} method={"post"}>
          <div className={commonStyle["brand-display"]}>
            <img src={"/media/Wordmark_Primary.svg"} className={commonStyle["brand-name"]} /> <br />
            <a href={""} className={"go-back"}>
              Back
            </a>
          </div>
          <div className={["login-field-box"]}>
            <div className={["login-field-wrapper"]}>
              <label className={["login-field-label"]}>Username/ Email</label>
              <br />
            </div>
            <div className={["login-field-wrapper"]}>
              <input className={["login-field-input"]} type={"textarea"} placeholder={"Username/ email"} />
              <br />
            </div>
            <label className={["login-field-label"]}>Password</label>
            <br />
            <input className={["login-field-input"]} type={"textarea"} placeholder={"Password"} />
          </div>
          <div className={["login-btn-box"]}>
            <button className={["login-btn"]}>LOGIN</button> <br />
            <a href={""} className={"forgot-password"}>
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
