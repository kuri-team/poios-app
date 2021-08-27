import Layout from "../../components/Layout";
import * as SignUpstyle from "./SignupPage.module.css";
import Signupform from "../../components/SignUpPage/Signupform";
const SignupPage = () => {
  return (
    <Layout className={SignUpstyle["container"]}>
      <img src={"/media/poios_background.jpg"} alt="" className={SignUpstyle["background"]} />
      <div className={SignUpstyle["signup-box"]}>
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

export default SignupPage;
