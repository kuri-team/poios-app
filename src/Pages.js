import { createContext, useEffect, useState } from "react";

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
import FieldsOfStudyUpdatePage from "./pages/core/FieldsOfStudyUpdatePage";
import ChatPage from "./pages/core/ChatPage";

const allPages = {
  chat: {
    name: "Chat",
    path: "/core/chat",
    reactComponent: <ChatPage />,
  },
  fieldsOfStudy: {
    name: "Fields",
    path: "/core/fields-of-study",
    reactComponent: <FieldsOfStudyPage />,
  },
  fieldsOfStudyUpdate: {
    name: "FieldsUpdate",
    path: "/core/update-fields-of-study",
    reactComponent: <FieldsOfStudyUpdatePage />,
  },
  tutors: {
    name: "Tutors",
    path: "/core/tutors",
    reactComponent: <TutorsPage />,
  },
  myProfile: {
    name: "My Profile",
    path: "/profile/my-profile",
    reactComponent: <MyProfilePage />,
  },
  profile: {
    name: null,
    path: "/profile",
    reactComponent: <ProfilePage />,
  },
  forgotPasswordUpdatePassword: {
    name: null,
    path: "/auth/login/forgot-password/update-password",
    reactComponent: <UpdatePasswordPage resetUrl="/auth/login" nextStepUrl="/auth/login" />,
  },
  forgotPasswordVerify: {
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
  forgotPassword: {
    path: "/auth/login/forgot-password",
    reactComponent: <ForgotPasswordPage resetUrl="/auth/login" nextStepUrl="/auth/login/forgot-password/verify" />,
  },
  login: {
    path: "/auth/login",
    reactComponent: (
      <LoginPage prevStepUrl="/" authRedirectTo="/core/tutors" forgotPasswordUrl="/auth/login/forgot-password" />
    ),
  },
  signup: {
    path: "/auth/signup",
    reactComponent: <SignupPage prevStepUrl="/" authRedirectTo="/core/fields-of-study" />,
  },
  index: {
    path: "/",
    reactComponent: <IndexPage loginUrl="/auth/login" signupUrl="/auth/signup" />,
  },
};

export const pages = {
  default: Object.values(allPages),
  account: [allPages.index, allPages.myProfile],
  desktopNav: [allPages.tutors, allPages.fieldsOfStudy],
  mobileNav: [allPages.tutors, allPages.fieldsOfStudy, allPages.myProfile],
};

export const PagesContext = createContext(pages.default);
