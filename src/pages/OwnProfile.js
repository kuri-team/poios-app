import Layout from "../components/Layout";
import OwnProfileInfo from "../components/Profile/OwnProfileInfo";
import Timetable from "../components/Profile/Timetable";
import TimetableDay from "../components/Profile/TimetableDay";

import * as style from "./OwnProfile.module.css";

const OwnProfile = () => {
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["studentInfo-center-container"]}>
        <h2 className={style["title-header"]}>Profile</h2>
        <OwnProfileInfo />
      </div>
      <div className={style["timetable-center-container"]}>
        <h2 className={style["title-header"]}>TimeTable</h2>
        <Timetable />
      </div>
    </Layout>
  );
};

export default OwnProfile;
