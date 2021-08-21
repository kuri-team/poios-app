import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";

import * as style from "./TutorList.module.css";

const TutorList = () => {
  return (
    <Layout className={style["container"]} header footer>
      <Searchbar />
    </Layout>
  );
};

export default TutorList;
