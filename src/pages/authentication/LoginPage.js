import Layout from "../../components/Layout";
import DialogBox from "../../components/DialogBox";
import * as style from "./LoginPage.module.js.css";
import * as dialogBoxStyle from "../../components/DialogBox.module.css";
import { Link } from "react-router-dom";

const LoginPage = ({ authRedirectTo, forgotPasswordUrl }) => {
  return (
    <Layout>
      <DialogBox background logo>
        <div className={style["form"]}>
          <label>Username/Email</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
        </div>
        <div className={[dialogBoxStyle["button-wrapper"], dialogBoxStyle["button-wrapper-col"]].join(" ")}>
          <Link to={authRedirectTo}>
            <button className={dialogBoxStyle["primary"]}>Login</button>
          </Link>
          <Link to={forgotPasswordUrl}>Forgot Password?</Link>
        </div>
      </DialogBox>
    </Layout>
  );
};

export default LoginPage;
