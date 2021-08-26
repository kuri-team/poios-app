import Layout from "../components/Layout";
import * as style from "./IndexPage.module.css";

const IndexPage = () => {
  return (
    <Layout className={style["container"] + " " + style["home"]}>
      <img src={"/media/bg.jpg"} alt="" className={style["background"]} />
      <div className={style["login-signup-box"]}>
        <div className={style["brand-display"]}>
          <img src={"/media/Wordmark_Primary.svg"} className={style["brand-name"]} />
        </div>
        <div className={style["landing-btn-box"]}>
          <button className={style["landing-login-btn"] + " " + style["landing-btn"]}>LOGIN</button> <br />
          <button className={style["landing-signup-btn"] + " " + style["landing-btn"]}>SIGN UP</button>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
