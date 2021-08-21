import Layout from "../components/Layout";
import SubjectBoxes from "../components/SubjectBoxes";
import MajorSelectList from "../components/MajorSelectList";

import * as style from "./Home.module.css";
import * as majorStyle from "./ChooseMajor.module.css";

const ChooseMajor = () => {
  return (
    <Layout className={style["container"]}>
      <h1 className={majorStyle["h1"]}>CHOOSE A MAJOR</h1>
      <MajorSelectList className={majorStyle["select"]} />

      <p>WHICH SUBJECTS ARE YOU INTERESTED IN?</p>
      <SubjectBoxes />
      <button>SET</button>
    </Layout>
  );
};

export default ChooseMajor;
