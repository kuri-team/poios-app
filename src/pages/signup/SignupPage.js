import Layout from "../../components/Layout";
import Signupform from "../../components/SignUpPage/Signupform";
import * as style from "./SignupPage.module.css";

const SignupPage = () => {
  return (
    <Layout className={style["container"]}>
      <img src={"/media/poios_background.jpg"} alt="" className={style["background"]} />
      <div className={style["signup-box"]}>
        <div className={style["Poios-logo"]}>
          <img src={"/media/logo_Wordmark_Primary.png"} alt="" className={style["logo-pic"]} />
        </div>
        <a href={""} className={style["back"]}>
          Back
        </a>
        <Signupform />
      </div>
    </Layout>
  );
};

export default SignupPage;
