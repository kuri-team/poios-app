import Layout from "../components/Layout";
import StudentProfileInfo from "../components/StudentProfileInfo";
import * as style from "../styles/StudentProfileInfo.module.css";

const StudentProfile = () => {
  return (
    <Layout className={style["container"]} header footer>
      <StudentProfileInfo />
    </Layout>
  );
};

export default StudentProfile;
