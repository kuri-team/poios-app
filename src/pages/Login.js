import Layout from "../components/Layout";
import * as commonStyle from "./Home.module.css";
import * as style from "./Login.module.js.css";

const Login = () => {
  return (
    <Layout className={commonStyle["container"] + " " + commonStyle["home"]}>
      <img src={"/media/bg.jpg"} alt="" className={commonStyle["background"]} />
      <form className={commonStyle["login-box"]} method={"post"}>
        <div className={style["brand-display"]}>
          <img src={"/media/Wordmark_Primary.svg"} className={style["brand-name"]} /> <br />
          <a href={""}>Back</a>
        </div>
        <div className={style["login-field"]}>
          <input className={style["user-field"]} type={"textarea"} placeholder={"Username/ email"} />
          <br />
          <input className={style["pwd-field"]} type={"textarea"} placeholder={"Password"} />
        </div>
        <div className={style["login-btn-box"]}>
          <button className={style["login-btn"]}>LOGIN</button> <br />
        </div>
      </form>
    </Layout>
  );
};

export default Login;
