import Layout from "../../components/Layout";
import MyProfileInfo from "../../components/Profile/MyProfileInfo";
import Timetable from "../../components/Profile/Timetable";
import TimetableDay from "../../components/Profile/TimetableDay";

import * as style from "./MyProfilePage.module.css";

const MyProfilePage = () => {
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["studentInfo-center-container"]}>
        <h2 className={style["title-header"]}>Profile</h2>
        <MyProfileInfo />
      </div>
      <div className={style["timetable-center-container"]}>
        <h2 className={style["title-header"]}>TimeTable</h2>
        <Timetable />
      </div>
    </Layout>
  );
};

export default MyProfilePage;
