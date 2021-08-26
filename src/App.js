import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import LoginPage from "./pages/Login";
import ChooseMajorPage from "./pages/ChooseMajorPage";
import ForgotPwdPage from "./pages/ForgotPwdPage";
import EnterCodePage from "./pages/EnterCodePage";
import UpdatePwdPage from "./pages/UpdatePwdPage";
import OwnProfile from "./pages/OwnProfile";
import TutorProfile from "./pages/TutorProfile";

import "./App.module.css";
import TutorList from "./pages/TutorList";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/profile">
        <OwnProfile />
      </Route>
      <Route path="/tutorprofile">
        <TutorProfile />
      </Route>
      <Route path="/tutors">
        <TutorList />
      </Route>
      <Route path="/forgotpwd">
        <ForgotPwdPage />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/entercode">
        <EnterCodePage />
      </Route>
      <Route path="/updatepwd">
        <UpdatePwdPage />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/choose-major">
        <ChooseMajorPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
