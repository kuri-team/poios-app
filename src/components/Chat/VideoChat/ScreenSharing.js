import { useContext } from "react";
import { SocketContext } from "../../../SocketContext";

import * as style from "./ScreenSharing.module.css";

const ScreenSharing = () => {
  const { myVideo, leaveCallScene } = useContext(SocketContext);
  return (
    <div className={style["wrapper"]}>
      <div className={style["app-bar"]}>
        <h2 className={style["app-bar-header"]}>Screen Sharing</h2>
      </div>
      <div>
        <video playsInline ref={myVideo} autoPlay className={style["video"]} />
      </div>
      <button className={style["leave-button"]} onClick={leaveCallScene}>
        <tspan>Stop Sharing</tspan>
      </button>
    </div>
  );
};

export default ScreenSharing;
