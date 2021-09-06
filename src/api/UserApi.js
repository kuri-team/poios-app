import React, { useState, useEffect } from "react";
import axios from "axios";

const UserApi = token => {
  const [isLogged, setIsLogged] = useState(false);
  const [isTutor, setIsTutor] = useState(false);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/profile/my-profile", {
            headers: { Authorization: token },
          });
          setIsLogged(true);
          res.data.role === "tutor" ? setIsTutor(true) : setIsTutor(false);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
      getUser();
    }
  }, [token]);

  return {
    isLogged: [isLogged, setIsLogged],
    isTuTor: [isTutor, setIsTutor],
  };
};

export default UserApi;
