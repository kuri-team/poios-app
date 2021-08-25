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
      <Route path="/forgotpwd">
        <ForgotPwdPage />
      </Route>
      <Route path="/entercode">
        <EnterCodePage />
      </Route>
      <Route path="/updatepwd">
        <UpdatePwdPage />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
