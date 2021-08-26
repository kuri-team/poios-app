import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/Login";
import ChooseMajorPage from "./pages/ChooseMajorPage";
import ForgotPwdPage from "./pages/ForgotPwdPage";
import EnterCodePage from "./pages/EnterCodePage";
import UpdatePwdPage from "./pages/UpdatePwdPage";
import OwnProfile from "./pages/OwnProfile";
import TutorProfile from "./pages/TutorProfile";
import Chatroom from "./pages/Chatroom";
import TutorList from "./pages/TutorList";

import "./App.module.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/chatroom">
        <Chatroom />
      </Route>
      <Route path="/page2">
        <Page2 />
      </Route>
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
