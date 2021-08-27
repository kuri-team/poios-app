import Layout from "../../components/Layout";
import TutorProfileInfo from "../../components/Profile/TutorProfileInfo";
import Timetable from "../../components/Profile/Timetable";
import Reviewer from "../../components/Profile/Reviewer";

import * as style from "./TutorProfilePage.module.css";
import OwnProfileInfo from "../../components/Profile/OwnProfileInfo";

const TutorProfilePage = () => {
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["tutorInfo-center-container"]}>
        <h2 className={style["title-header"]}>Profile</h2>
        <TutorProfileInfo />
      </div>
      <div className={style["reviewer-center-container"]}>
        <Reviewer />
      </div>
      <div className={style["timetable-center-container"]}>
        <h2 className={style["title-header"]}>TimeTable</h2>
        <Timetable />
      </div>
    </Layout>
  );
};

export default TutorProfilePage;
