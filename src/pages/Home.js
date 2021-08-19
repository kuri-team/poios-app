import Layout from "../components/Layout";
import * as style from "./Home.module.css";

const Home = () => {
  return (
    <Layout className={style["container"]} header footer>
      <p>
        Edit <code>src/pages/Home.js</code> and save to hot-reload.
      </p>
    </Layout>
  );
};

export default Home;
