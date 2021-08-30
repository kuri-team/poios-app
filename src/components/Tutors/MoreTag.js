import { Link } from "react-router-dom";
import * as style from "./SubjectTag.module.css";

const MoreTag = () => (
  <Link to={"/profile"}>
    <div className={[style["subject-tag"], style["link"]].join(" ")}>More...</div>
  </Link>
);

export default MoreTag;
