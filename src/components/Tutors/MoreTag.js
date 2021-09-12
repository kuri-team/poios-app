import { Link } from "react-router-dom";
import * as style from "./SubjectTag.module.css";

const MoreTag = ({ hidden }) => (
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

export default MoreTag;
