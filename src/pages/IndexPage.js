import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import DialogBox from "../components/DialogBox";
import * as style from "./IndexPage.module.css";
import * as dialogBoxStyle from "../components/DialogBox.module.css";

const IndexPage = ({ loginUrl, signupUrl }) => {
  return (
    <Layout>
      <DialogBox background logo>
        <div
          className={[
            dialogBoxStyle["button-wrapper"],
            dialogBoxStyle["button-wrapper-col"],
            style["button-wrapper"],
          ].join(" ")}
        >
          <Link to={loginUrl}>
            <button className={dialogBoxStyle["primary"]}>Login</button>
          </Link>
          <Link to={signupUrl}>
            <button>Signup</button>
          </Link>
        </div>
      </DialogBox>
    </Layout>
  );
};

export default IndexPage;
