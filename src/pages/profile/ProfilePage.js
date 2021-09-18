import Layout from "../../components/Layout";
import TutorProfileInfo from "../../components/Profile/TutorProfileInfo";
import Reviewer from "../../components/Profile/Reviewer";

import * as style from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["tutorInfo-center-container"]}>
        <h2 className={style["title-header"]}>Profile</h2>
        <TutorProfileInfo />
      </div>
      <div className={style["reviewer-center-container"]}>
        <Reviewer />
      </div>
    </Layout>
  );
};

export default ProfilePage;
