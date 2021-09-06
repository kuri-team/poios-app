import { createContext, useState, useEffect } from "react";
import UserApi from "./api/UserApi";
import axios from "axios";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const refreshToken = async () => {
    const token = await axios.get("/auth/refresh_token");
    console.log(res);
    // setToken(res.data.accesstoken);
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) refreshToken(), [];
  });

  const state = {
    token: [token, setToken],
    userApi: UserApi(token),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
