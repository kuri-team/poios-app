import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import SignUpPage from "./pages/signup/SignUpPage";
import LoginPage from "./pages/authentication/Login";
import ChooseMajorPage from "./pages/core/ChooseMajorPage";
import ForgotPwdPage from "./pages/authentication/ForgotPwdPage";
import EnterCodePage from "./pages/authentication/EnterCodePage";
import UpdatePwdPage from "./pages/authentication/UpdatePwdPage";
import OwnProfile from "./pages/profile/OwnProfile";
import TutorProfile from "./pages/profile/TutorProfile";
import Chatroom from "./pages/core/Chatroom";
import TutorList from "./pages/core/TutorList";

import "./App.module.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/chatroom">
        <Chatroom />
      </Route>
      <Route path="/profile">
        <OwnProfile />
      </Route>
      <Route path="/tutor-profile">
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
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/updatepwd">
        <UpdatePwdPage />
      </Route>
      <Route path="/choose-major">
        <ChooseMajorPage />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
