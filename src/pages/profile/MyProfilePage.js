import Layout from "../../components/Layout";
import MyProfileInfo from "../../components/Profile/MyProfileInfo";

import * as style from "./MyProfilePage.module.css";

const MyProfilePage = () => {
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["studentInfo-center-container"]}>
        <h2 className={style["title-header"]}>Profile</h2>
        <MyProfileInfo />
      </div>
    </Layout>
  );
};

export default MyProfilePage;
