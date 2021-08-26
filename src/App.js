import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
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
      <Route path="/forgot-password">
        <ForgotPwdPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/forgot-password/verify">
        <EnterCodePage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/forgot-password/update-password">
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
