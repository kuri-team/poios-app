import { useContext } from "react";

import { SocketContext } from "../../../SocketContext";

import * as style from "./VideoPlayer.module.css";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className={style["video-wrapper"]}>
      {stream && (
        <div className={style["video-content"]}>
          <h3 className={style["video-username"]}>{name || "Name"}</h3>
          <video playsInline muted ref={myVideo} autoPlay className={style["video"]} />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className={style["video-content"]}>
          <div>
            <h3 className={style["video-username"]}>{call.name || "username"}</h3>
            <video playsInline ref={userVideo} autoPlay className={style["video"]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
