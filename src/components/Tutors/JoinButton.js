import { Link } from "react-router-dom";
import * as style from "./JoinButton.module.css";

const JoinButton = ({ hidden }) => (
  <Link to={"./chat"}>
    <button className={hidden ? [style["btn"], style["hidden"]].join(" ") : style["btn"]}>JOIN</button>
  </Link>
);

export default JoinButton;
