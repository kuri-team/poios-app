import Layout from "../components/Layout";
import StudentProfileInfo from "../components/Profile/StudentProfileInfo";
import Timetable from "../components/Profile/Timetable";
import TimetableDay from "../components/Profile/TimetableDay";

import * as style from "./StudentProfile.module.css";

const StudentProfile = () => {
  return (
    <Layout className={style["container"]} header footer>
      <h1>Profile</h1>
      <StudentProfileInfo />

      <h1>TimeTable</h1>
      <Timetable />
    </Layout>
  );
};

export default StudentProfile;
