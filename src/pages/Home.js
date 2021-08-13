import * as style from "./Home.module.css";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout className={style["container"]}>
      <p>
        Edit <code>src/pages/Home.js</code> and save to hot-reload.
      </p>
    </Layout>
  );
};

export default Home;
