import Layout from "../components/Layout";
import * as style from "./Home.module.css";

const Home = () => {
  return (
    <Layout className={style["container"]}>
      <img src={"/media/bg.jpg"} alt="" className={style["background"]} />
      <p>
        Edit <code>src/pages/Home.js</code> and save to hot-reload.
      </p>
    </Layout>
  );
};

export default Home;
