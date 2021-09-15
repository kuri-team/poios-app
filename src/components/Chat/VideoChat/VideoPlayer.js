import { useContext, useState } from "react";

import { SocketContext } from "../../../SocketContext";
import Notification from "./Notification";

import * as style from "./VideoPlayer.module.css";
import { Link } from "react-router-dom";

const VideoPlayer = ({ tutorName }) => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
    answerCall,
    callUser,
    me,
    leaveCallScene,
    cameraOn,
    cameraOff,
    voiceOn,
    voiceOff,
  } = useContext(SocketContext);

  const [buttonPopUp, setButtonPopUp] = useState(false);

  const [camera, setCamera] = useState(true);
  const [voice, setVoice] = useState(true);

  return (
    <div className={style["video-wrapper"]}>
      {stream && (
        <div className={style["video-content"]}>
          <h4 className={style["video-username"]}>{name || "Name" || tutorName}</h4>
          {camera && <video playsInline muted ref={myVideo} autoPlay className={style["video"]} />}

          {!camera && (
            <div>
              <video playsInline muted ref={myVideo} autoPlay className={[style["video"], style["hide"]].join(" ")} />
              <div className={style["avatar-alter"]}>
                <img className={style["avatar"]} src={"/media/profile-placeholder_143x143.png"} alt="avatar" />
              </div>
            </div>
          )}

          <div className={style["video-feature"]}>
            {camera && (
              <div
                className={style["video-feature-icon-function"]}
                onClick={() => {
                  setCamera(!camera);
                  cameraOff();
                }}
              >
                <img
                  src={"/media/chatroom-icons/videocam_24dp.svg"}
                  alt="Camera On Off"
                  className={style["video-feature-icon"]}
                />
              </div>
            )}

            {!camera && (
              <div
                className={style["video-feature-icon-function"]}
                onClick={() => {
                  setCamera(!camera);
                  cameraOn();
                }}
              >
                <img
                  src={"/media/chatroom-icons/videocam_off_24dp.svg"}
                  alt="Camera On Off"
                  className={style["video-feature-icon"]}
                />
              </div>
            )}

            {voice && (
              <div
                className={style["video-feature-icon-function"]}
                onClick={() => {
                  setVoice(!voice);
                  voiceOff();
                }}
              >
                <img
                  src={"/media/chatroom-icons/mic_24dp.svg"}
                  alt="Voice On Off"
                  className={style["video-feature-icon"]}
                />
              </div>
            )}
            {!voice && (
              <div
                className={style["video-feature-icon-function"]}
                onClick={() => {
                  setVoice(!voice);
                  voiceOn();
                }}
              >
                <img
                  src={"/media/chatroom-icons/mic_off_24dp.svg"}
                  alt="Voice On Off"
                  className={style["video-feature-icon"]}
                />
              </div>
            )}

            {!callAccepted && (
              <button
                onClick={() => {
                  setButtonPopUp(true);
                  callUser(me);
                }}
                className={style["make-a-call"]}
              >
                Call
              </button>
            )}
            {callAccepted && (
              <button
                onClick={() => {
                  leaveCallScene();
                }}
                className={style["end-call"]}
              >
                End Call
              </button>
            )}
          </div>
          <Notification trigger={buttonPopUp}>
            {call.isReceivingCall && !callAccepted && (
              <div>
                <div className={style["avatar-container"]}>
                  <img className={style["avatar"]} src={"/media/profile-placeholder_143x143.png"} alt="avatar" />
                </div>
                <audio src={"/media/chatroom-icons/phone_call.mp3"} autoPlay loop />
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
                      leaveCallScene();
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
            <h4 className={style["video-username"]}>{call.name || "Username"}</h4>
            <video playsInline ref={userVideo} autoPlay className={style["video"]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
