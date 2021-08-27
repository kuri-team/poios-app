import { BrowserRouter, Switch, Route } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import SignupPage from "./pages/signup/SignupPage";
import LoginPage from "./pages/authentication/LoginPage";
import ForgotPasswordPage from "./pages/authentication/ForgotPasswordPage";
import ForgotPasswordVerifyPage from "./pages/authentication/ForgotPasswordVerifyPage";
import UpdatePasswordPage from "./pages/authentication/UpdatePasswordPage";
import ProfilePage from "./pages/profile/ProfilePage";
import MyProfilePage from "./pages/profile/MyProfilePage";
import TutorsPage from "./pages/core/TutorsPage";
import FieldsOfStudyPage from "./pages/core/FieldsOfStudyPage";
import ChatPage from "./pages/core/ChatPage";

import "./App.module.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/core/chat">
        <ChatPage />
      </Route>
      <Route path="/core/fields-of-study">
        <FieldsOfStudyPage />
      </Route>
      <Route path="/core/tutors">
        <TutorsPage />
      </Route>
      <Route path="/profile/my-profile">
        <MyProfilePage />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/auth/login/forgot-password/update-password">
        <UpdatePasswordPage />
      </Route>
      <Route path="/auth/login/forgot-password/verify">
        <ForgotPasswordVerifyPage />
      </Route>
      <Route path="/auth/login/forgot-password">
        <ForgotPasswordPage />
      </Route>
      <Route path="/auth/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
      <Route path="/">
        <IndexPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
