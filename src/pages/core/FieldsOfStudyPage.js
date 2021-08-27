import Layout from "../../components/Layout";
import SubjectBoxes from "../../components/ChooseMajor/SubjectBoxes";
import MajorSelectMenu from "../../components/ChooseMajor/MajorSelectMenu";

import * as style from "./FieldsOfStudy.module.css";

const FieldsOfStudyPage = () => {
  return (
    <Layout className={style["container"]}>
      <h1 className={style["h1"]}>Choose a major</h1>
      <MajorSelectMenu />

      <p className={style["subheading"]}>WHICH SUBJECTS ARE YOU INTERESTED IN?</p>
      <SubjectBoxes />
      <button className={style["btn"]}>SET</button>
    </Layout>
  );
};

export default FieldsOfStudyPage;