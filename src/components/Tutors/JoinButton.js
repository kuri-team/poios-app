import { Link } from "react-router-dom";
import * as style from "./JoinButton.module.css";

const JoinButton = () => (
  <Link to={"./chat"}>
    <button className={style["btn"]}>JOIN</button>
  </Link>
);

export default JoinButton;
