import React, { useContext } from "react";

import { Link } from "react-router-dom";
import * as style from "./SubjectTag.module.css";
import { GlobalState } from "../../GlobalState";

const MoreTag = ({ hidden }) => {
  const state = useContext(GlobalState);
  const [isTutor, setIsTutor] = state.userApi.isTuTor;

  if (isTutor) {
    return (
      <Link to={"/profile/my-profile"}>
        <div
          className={
            hidden
              ? [style["subject-tag"], style["link"], style["hidden"]].join(" ")
              : [style["subject-tag"], style["link"]].join(" ")
          }
        >
          More...
        </div>
      </Link>
    );
  } else {
    return (
      <Link to={"/profile"}>
        <div
          className={
            hidden
              ? [style["subject-tag"], style["link"], style["hidden"]].join(" ")
              : [style["subject-tag"], style["link"]].join(" ")
          }
        >
          More...
        </div>
      </Link>
    );
  }
};

export default MoreTag;
