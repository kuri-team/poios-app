import * as SignUp from "./Signupform.module.css";

const Signupform = () => {
  return (
    <form className={SignUp["signup-form"]} method={"post"}>
      <div className={SignUp["pic-upload"]}>
        <img src={"/media/EulaSneeze.jpg"} alt="Upload Picture" className={SignUp["profile-pic"]} />
        <br />
        <input className={SignUp["upload-pic"]} type="file" id="img" name="img" accept="image/*" />
      </div>
      <div className={SignUp["radio-box"]}>
        <div className={SignUp["user-radiobox"]}>
          <input className={SignUp["user-radio-input"]} type="radio" id="student" name="student" value="student" />
          <label className={SignUp["label-user-radio"]}> Student</label>
          <br />
        </div>
        <div className={SignUp["user-radiobox"]}>
          <input className={SignUp["user-radio-input"]} type="radio" id="tutor" name="tutor" value="tutor" />
          <label className={SignUp["label-user-radio"]}> Tutor</label>
          <br />
        </div>
      </div>
      <div className={SignUp["signup-text-input"]}>
        <div className={SignUp["row-2-input"]}>
          <div className={SignUp["signup-input"]}>
            <label className={SignUp["signup-input-label"]}>Email</label>
            <br />
            <input className={SignUp["signup-input-field"]} type={"email"} />
          </div>
          <div className={SignUp["signup-input"]}>
            <label className={SignUp["signup-input-label"]}>Username</label>
            <br />
            <input className={SignUp["signup-input-field"]} type={"text"} />
          </div>
        </div>
        <div className={SignUp["row-2-input"]}>
          <div className={SignUp["signup-input"]}>
            <label className={SignUp["signup-input-label"]}>Password</label>
            <br />
            <input className={SignUp["signup-input-field"]} type={"password"} />
          </div>
          <div className={SignUp["signup-input"]}>
            <label className={SignUp["signup-input-label"]}> Confirm Password</label>
            <br />
            <input className={SignUp["signup-input-field"]} type={"password"} />
          </div>
        </div>
      </div>
      <div className={SignUp["signup-btn-bx"]}>
        <button className={SignUp["signup-btn"]}>Sign Up</button>
      </div>
    </form>
  );
};

export default Signupform;
