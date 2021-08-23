import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import ForgotPwdPage from "./pages/ForgotPwdPage";
import EnterCodePage from "./pages/EnterCodePage";
import UpdatePwdPage from "./pages/UpdatePwdPage";
import "./App.module.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/page2">
        <Page2 />
      </Route>
      <Route path="/ForgotPwd">
        <ForgotPwdPage />
      </Route>
      <Route path="/EnterCode">
        <EnterCodePage />
      </Route>
      <Route path="/UpdatePwd">
        <UpdatePwdPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
