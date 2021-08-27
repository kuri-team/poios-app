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

const App = () => {
  const pages = [
    {
      path: "/core/chat",
      reactComponent: <ChatPage />,
    },
    {
      path: "/core/fields-of-study",
      reactComponent: <FieldsOfStudyPage />,
    },
    {
      path: "/core/tutors",
      reactComponent: <TutorsPage />,
    },
    {
      path: "/profile/my-profile",
      reactComponent: <MyProfilePage />,
    },
    {
      path: "/profile",
      reactComponent: <ProfilePage />,
    },
    {
      path: "/auth/login/forgot-password/update-password",
      reactComponent: <UpdatePasswordPage />,
    },
    {
      path: "/auth/login/forgot-password/verify",
      reactComponent: <ForgotPasswordVerifyPage />,
    },
    {
      path: "/auth/login/forgot-password",
      reactComponent: <ForgotPasswordPage resetUrl="/auth/login" nextStepUrl="/auth/login/forgot-password/verify" />,
    },
    {
      path: "/auth/login",
      reactComponent: <LoginPage authRedirectTo="/core/tutors" forgotPasswordUrl="/auth/login/forgot-password" />,
    },
    {
      path: "/signup",
      reactComponent: <SignupPage />,
    },
    {
      path: "/",
      reactComponent: <IndexPage loginUrl="/auth/login" signupUrl="/signup" />,
    },
  ];

  return (
    <BrowserRouter>
      <Switch>
        {pages.map(page => (
          <Route path={page.path}>{page.reactComponent}</Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
