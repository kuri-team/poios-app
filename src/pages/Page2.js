import Layout from "../components/Layout";
import * as style from "./Home.module.css";

const Page2 = () => (
  <Layout className={style["container"]} header footer>
    <p>Hello, welcome to page 2 :)</p>
  </Layout>
);

export default Page2;
