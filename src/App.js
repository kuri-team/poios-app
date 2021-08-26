import { BrowserRouter, Switch, Route } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import SignUpPage from "./pages/signup/SignUpPage";
import LoginPage from "./pages/authentication/Login";
import ChooseMajorPage from "./pages/core/ChooseMajorPage";
import ForgotPwdPage from "./pages/authentication/ForgotPwdPage";
import EnterCodePage from "./pages/authentication/EnterCodePage";
import UpdatePwdPage from "./pages/authentication/UpdatePwdPage";
import OwnProfilePage from "./pages/profile/OwnProfilePage";
import TutorProfilePage from "./pages/profile/TutorProfilePage";
import ChatroomPage from "./pages/core/ChatroomPage";
import TutorListPage from "./pages/core/TutorListPage";

import "./App.module.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/chatroom">
        <ChatroomPage />
      </Route>
      <Route path="/profile">
        <OwnProfilePage />
      </Route>
      <Route path="/tutor-profile">
        <TutorProfilePage />
      </Route>
      <Route path="/tutors">
        <TutorListPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/forgot-password">
        <ForgotPwdPage />
      </Route>
      <Route path="/forgot-password/verify">
        <EnterCodePage />
      </Route>
      <Route path="/forgot-password/update-password">
        <UpdatePwdPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/choose-major">
        <ChooseMajorPage />
      </Route>
      <Route exact path="/">
        <IndexPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
