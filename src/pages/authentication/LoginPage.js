import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/Layout";
import DialogBox from "../../components/DialogBox";
import TogglePasswordButton from "../../components/Form/TogglePasswordButton";
import * as style from "./LoginPage.module.css";
import * as commonStyle from "../../styles/common.module.css";
import * as formStyle from "../../styles/form.module.css";
import * as dialogBoxStyle from "../../components/DialogBox.module.css";

const LoginPage = ({ prevStepUrl, authRedirectTo, forgotPasswordUrl }) => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const loginSubmit = async () => {
    try {
      await axios.post("/auth/login", { ...user });

      localStorage.setItem("firstLogin", true);
      window.location.href = "/core/fields-of-study";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <DialogBox background logo>
        <div id="form" className={style["form"]}>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
            <label htmlFor="name">Username/Email</label>
            <input
              id="name"
              name="name"
              value={user.name}
              required
              className={commonStyle["text-align-center"]}
              type="text"
              onChange={onChangeInput}
            />
          </div>
          <div className={[formStyle["field"], formStyle["field-column"]].join(" ")}>
            <label htmlFor="password">
              Password
              <TogglePasswordButton
                state={showPassword}
                callback={setShowPassword}
                fill="var(--white)"
                width="auto"
                height="18px"
                margin="0 0 0 10px"
              />
            </label>
            <input
              id="password"
              name="password"
              value={user.password}
              required
              className={commonStyle["text-align-center"]}
              type={showPassword ? "text" : "password"}
              onChange={onChangeInput}
            />
          </div>
        </div>
        <div className={[dialogBoxStyle["button-wrapper"], dialogBoxStyle["button-wrapper-col"]].join(" ")}>
          <button
            type="submit"
            className={[dialogBoxStyle["primary"], style["button"]].join(" ")}
            onClick={() => {
              setShowPassword(false);
              loginSubmit();
            }}
          >
            Login
          </button>
        </div>
        <div className={style["nav"]}>
          <Link to={forgotPasswordUrl}>Forgot Password?</Link>
          <Link to={prevStepUrl} className={style["primary"]}>
            Back
          </Link>
        </div>
      </DialogBox>
    </Layout>
  );
};

export default LoginPage;
