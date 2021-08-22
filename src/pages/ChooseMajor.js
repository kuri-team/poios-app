import Layout from "../components/Layout";
import SubjectBoxes from "../components/ChooseMajor/SubjectBoxes";
import MajorSelectList from "../components/ChooseMajor/MajorSelectList";

import * as majorStyle from "./ChooseMajor.module.css";

const ChooseMajor = () => {
  return (
    <Layout className={majorStyle["container"]}>
      <h1 className={majorStyle["h1"]}>Choose a major</h1>
      <MajorSelectList className={majorStyle["select"]} />

      <p>WHICH SUBJECTS ARE YOU INTERESTED IN?</p>
      <SubjectBoxes />
      <button>SET</button>
    </Layout>
  );
};

export default ChooseMajor;
