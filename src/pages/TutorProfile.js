import Layout from "../components/Layout";
import TutorProfileInfo from "../components/Profile/TutorProfileInfo";
import Timetable from "../components/Profile/Timetable";

import * as style from "./TutorProfile.module.css";
import OwnProfileInfo from "../components/Profile/OwnProfileInfo";

const TutorProfile = () => {
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["tutorInfo-center-container"]}>
        <h2 className={style["title-header"]}>Profile</h2>
        <TutorProfileInfo />
      </div>
      <div className={style["timetable-center-container"]}>
        <h2 className={style["title-header"]}>TimeTable</h2>
        <Timetable />
      </div>
    </Layout>
  );
};

export default TutorProfile;
