import { createContext, useState, useEffect } from "react";
import useUserApi from "./hooks/useUserApi";
import axios from "axios";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        const res = await axios.get("/auth/refresh_token");
        console.log(res);

        setToken(res.data.accesstoken);
        setTimeout(() => {
          refreshToken();
        }, 30 * 60 * 1000);
      };
      refreshToken();
    }
  }, []);

  const state = {
    token: [token, setToken],
    userApi: useUserApi(token),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
