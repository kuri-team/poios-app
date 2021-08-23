import Layout from "../components/Layout";
import * as style from "./Home.module.css";
import * as SignUpstyle from "./SignUpPage.module.css";
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
        <form className={SignUpstyle["SignUp-form"]} method={"post"}>
          <div className={SignUpstyle["pic-upload"]}>
            <img src={"/media/EulaSneeze.jpg"} alt="Upload Picture" className={SignUpstyle["profile-pic"]} />
            <br />
            <input className={SignUpstyle["upload-pic"]} type="file" id="img" name="img" accept="image/*" />
          </div>
          <div className={SignUpstyle["radio-box"]}>
            <div className={SignUpstyle["user-radiobox"]}>
              <input
                className={SignUpstyle["user-radio-input"]}
                type="radio"
                id="student"
                name="student"
                value="student"
              />
              <label className={SignUpstyle["label-user-radio"]}> Student</label>
              <br />
            </div>
            <div className={SignUpstyle["user-radiobox"]}>
              <input className={SignUpstyle["user-radio-input"]} type="radio" id="tutor" name="tutor" value="tutor" />
              <label className={SignUpstyle["label-user-radio"]}> Tutor</label>
              <br />
            </div>
          </div>
          <div className={SignUpstyle["SignUp-text-input"]}>
            <div className={SignUpstyle["row-2-input"]}>
              <div className={SignUpstyle["signup-input"]}>
                <label className={SignUpstyle["signup-input-label"]}>Email</label>
                <br />
                <input className={SignUpstyle["signup-input-field"]} type={"email"} />
              </div>
              <div className={SignUpstyle["signup-input"]}>
                <label className={SignUpstyle["signup-input-label"]}>Username</label>
                <br />
                <input className={SignUpstyle["signup-input-field"]} type={"text"} />
              </div>
            </div>
            <div className={SignUpstyle["row-2-input"]}>
              <div className={SignUpstyle["signup-input"]}>
                <label className={SignUpstyle["signup-input-label"]}>Password</label>
                <br />
                <input className={SignUpstyle["signup-input-field"]} type={"password"} />
              </div>
              <div className={SignUpstyle["signup-input"]}>
                <label className={SignUpstyle["signup-input-label"]}> Confirm Password</label>
                <br />
                <input className={SignUpstyle["signup-input-field"]} type={"password"} />
              </div>
            </div>
          </div>
          <div className={SignUpstyle["signup-btn-bx"]}>
            <button className={SignUpstyle["signup-btn"]}>Sign Up</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignUpPage;
