import Layout from "../../components/Layout";
import SubjectBoxes from "../../components/FieldsOfStudy/SubjectBoxes";
import MajorSelectMenu from "../../components/FieldsOfStudy/MajorSelectMenu";

import * as style from "./FieldsOfStudyPage.module.css";

const FieldsOfStudyPage = () => {
  return (
    <Layout header footer className={style["container"]}>
      <h1 className={style["h1"]}>Choose a major</h1>
      <MajorSelectMenu />

      <p className={style["subheading"]}>WHICH SUBJECTS ARE YOU INTERESTED IN?</p>
      <SubjectBoxes />
      <button className={style["btn"]}>SET</button>
    </Layout>
  );
};

export default FieldsOfStudyPage;
