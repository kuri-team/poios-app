import Layout from "../../components/Layout";
import MyProfileInfo from "../../components/Profile/MyProfileInfo";

import * as style from "./MyProfilePage.module.css";
import { useContext } from "react";
import { GlobalState } from "../../GlobalState";

const MyProfilePage = () => {
  const state = useContext(GlobalState);
  console.log(state);

  return (
    <Layout className={style["container"]} header footer>
      <div className={style["studentInfo-center-container"]}>
        <h2 className={style["title-header"]}>Profile</h2>
        <MyProfileInfo state={state} />
      </div>
    </Layout>
  );
};

export default MyProfilePage;
