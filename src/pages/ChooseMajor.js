import Layout from "../components/Layout";
import SubjectBoxes from "../components/ChooseMajor/SubjectBoxes";
import MajorSelectList from "../components/ChooseMajor/MajorSelectList";

import * as style from "./ChooseMajor.module.css";

const ChooseMajor = () => {
  return (
    <Layout className={style["container"]}>
      <h1 className={style["h1"]}>Choose a major</h1>
      <MajorSelectList className={style["select"]} />

      <p className={style["subheading"]}>WHICH SUBJECTS ARE YOU INTERESTED IN?</p>
      <SubjectBoxes />
      <button className={style["btn"]}>SET</button>
    </Layout>
  );
};

export default ChooseMajor;
