import { createContext } from "react";

import IndexPage from "./pages/IndexPage";
import SignupPage from "./pages/authentication/SignupPage";
import LoginPage from "./pages/authentication/LoginPage";
import ForgotPasswordPage from "./pages/authentication/ForgotPasswordPage";
import ForgotPasswordVerifyPage from "./pages/authentication/ForgotPasswordVerifyPage";
import UpdatePasswordPage from "./pages/authentication/UpdatePasswordPage";
import ProfilePage from "./pages/profile/ProfilePage";
import MyProfilePage from "./pages/profile/MyProfilePage";
import TutorsPage from "./pages/core/TutorsPage";
import FieldsOfStudyPage from "./pages/core/FieldsOfStudyPage";
import ChatPage from "./pages/core/ChatPage";

const allPages = [
  {
    name: "Chat",
    path: "/core/chat",
    reactComponent: <ChatPage />,
  },
  {
    name: "Subjects",
    path: "/core/fields-of-study",
    reactComponent: <FieldsOfStudyPage />,
  },
  {
    name: "Tutors",
    path: "/core/tutors",
    reactComponent: <TutorsPage />,
  },
  {
    name: "My Profile",
    path: "/profile/my-profile",
    reactComponent: <MyProfilePage />,
  },
  {
    name: null,
    path: "/profile",
    reactComponent: <ProfilePage />,
  },
  {
    name: null,
    path: "/auth/login/forgot-password/update-password",
    reactComponent: <UpdatePasswordPage resetUrl="/auth/login" nextStepUrl="/auth/login" />,
  },
  {
    name: null,
    path: "/auth/login/forgot-password/verify",
    reactComponent: (
      <ForgotPasswordVerifyPage
        resetUrl="/auth/login"
        prevStepUrl="/auth/login/forgot-password"
        nextStepUrl="/auth/login/forgot-password/update-password"
      />
    ),
  },
  {
    path: "/auth/login/forgot-password",
    reactComponent: <ForgotPasswordPage resetUrl="/auth/login" nextStepUrl="/auth/login/forgot-password/verify" />,
  },
  {
    path: "/auth/login",
    reactComponent: (
      <LoginPage prevStepUrl="/" authRedirectTo="/core/tutors" forgotPasswordUrl="/auth/login/forgot-password" />
    ),
  },
  {
    path: "/auth/signup",
    reactComponent: <SignupPage prevStepUrl="/" authRedirectTo="/core/fields-of-study" />,
  },
  {
    path: "/",
    reactComponent: <IndexPage loginUrl="/auth/login" signupUrl="/auth/signup" />,
  },
];

export const pages = {
  default: allPages,
  desktopNav: [allPages[2], allPages[1]],
  mobileNav: [allPages[2], allPages[1], allPages[3]],
};

export const PagesContext = createContext(pages.default);
