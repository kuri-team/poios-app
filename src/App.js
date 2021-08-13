import * as style from "./App.module.css";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout className={style["container"]}>
      <p>
        Edit <code>src/App.js</code> and save to hot-reload.
      </p>
    </Layout>
  );
};

export default App;
