import Layout from "../components/Layout";
import * as style from "./Home.module.css";
import * as SignUpstyle from "./SignUpPage.module.css";
import Signupform from "../components/SignUpPage/Signupform";
const SignUpPage = () => {
  return (
    <Layout className={style["container"]}>
      <img src={"/media/poios_background.jpg"} alt="" className={SignUpstyle["background"]} />
      <div className={SignUpstyle["SignUp-box"]}>
        <div className={SignUpstyle["Poios-logo"]}>
          <img src={"/media/logo_Wordmark_Primary.png"} alt="" className={SignUpstyle["logo-pic"]} />
        </div>
        <a href={""} className={SignUpstyle["back"]}>
          Back
        </a>
        <Signupform />
      </div>
    </Layout>
  );
};

export default SignUpPage;
