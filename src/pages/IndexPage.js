import Layout from "../components/Layout";
import PoiosBackground from "../components/PoiosBackground";
import * as style from "./IndexPage.module.css";
import { Link } from "react-router-dom";

const IndexPage = ({ loginUrl, signupUrl }) => {
  return (
    <Layout className={style["container"]}>
      <PoiosBackground />
      <div className={style["dialogue-box"]}>
        <div className={style["brand"]}>
          <img src={"/media/Wordmark_Primary.svg"} alt="" draggable={false} />
        </div>
        <div className={style["button-wrapper"]}>
          <Link to={loginUrl}>
            <button className={style["primary"]}>Login</button>
          </Link>
          <Link to={signupUrl}>
            <button>Signup</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
