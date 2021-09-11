import { useContext, useState } from "react";

import { SocketContext } from "../../../SocketContext";
import Notification from "./Notification";

import * as style from "./VideoPlayer.module.css";

const VideoPlayer = ({ tutorName }) => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, answerCall, callUser, me, leaveCall } =
    useContext(SocketContext);

  const [buttonPopUp, setButtonPopUp] = useState(false);

  return (
    <div className={style["video-wrapper"]}>
      {stream && (
        <div className={style["video-content"]}>
          <h3 className={style["video-username"]}>{name || "Name" || tutorName}</h3>
          <video playsInline muted ref={myVideo} autoPlay className={style["video"]} />
          <button
            onClick={() => {
              setButtonPopUp(true);
              callUser(me);
            }}
          >
            Call
          </button>
          <Notification trigger={buttonPopUp}>
            {call.isReceivingCall && !callAccepted && (
              <div>
                <h3 className={style["caller-name"]}>{call.name} is calling ...</h3>
                <div className={style["call-button"]}>
                  <div
                    className={style["accept-call"]}
                    onClick={() => {
                      setButtonPopUp(false);
                      answerCall();
                    }}
                  >
                    <img src={"/media/chatroom-icons/accept-call.svg"} alt="Accept Call" />
                  </div>
                  <div
                    className={style["decline-call"]}
                    onClick={() => {
                      setButtonPopUp(false);
                      leaveCall();
                    }}
                  >
                    <img src={"/media/chatroom-icons/end-call.svg"} alt="Decline Call" />
                  </div>
                </div>
              </div>
            )}
          </Notification>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className={style["video-content"]}>
          <div>
            <h3 className={style["video-username"]}>{call.name || "Username"}</h3>
            <video playsInline ref={userVideo} autoPlay className={style["video"]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
