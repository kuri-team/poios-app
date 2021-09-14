import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();

const socket = io("http://localhost:5000");
// const socket = io("https://video-chat-app-hlinh.herokuapp.com/");

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [me, setMe] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  const myPeer = useRef();

  useEffect(() => {
    socket.on("me", id => setMe(id));

    socket.on("callUser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", data => {
      socket.emit("answerCall", { signal: data, to: call.from });
    });

    peer.on("stream", currentStream => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const cameraOff = () => {
    navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then(currentStream => {
      setStream(currentStream);

      myVideo.current.srcObject = currentStream;
    });
  };

  const cameraOn = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(currentStream => {
      setStream(currentStream);

      myVideo.current.srcObject = currentStream;
    });
  };

  const voiceOn = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(currentStream => {
      setStream(currentStream);

      myVideo.current.srcObject = currentStream;
    });
  };
  const voiceOff = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(currentStream => {
      setStream(currentStream);

      myVideo.current.srcObject = currentStream;
    });
  };

  const callUser = id => {
    setIsSharing(false);
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(currentStream => {
      setStream(currentStream);
      myVideo.current.srcObject = currentStream;
    });
    const peer = new Peer({ initiator: true, trickle: false, stream });
    setIsCalling(true);

    peer.on("signal", data => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });

    peer.on("stream", currentStream => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on("callAccepted", signal => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  const leaveCallScene = () => {
    setIsCalling(false);
    window.location.reload();
  };

  const shareScreen = () => {
    setIsSharing(true);
    navigator.mediaDevices.getDisplayMedia({ cursor: true }).then(currentStream => {
      setStream(currentStream);
      myVideo.current.srcObject = currentStream;
    });
    const peer = new Peer({ initiator: true, trickle: false, stream });
    peer.on("stream", currentStream => {
      userVideo.current.srcObject = currentStream;
    });
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        isCalling,
        callUser,
        leaveCall,
        answerCall,
        leaveCallScene,
        cameraOn,
        cameraOff,
        voiceOn,
        voiceOff,
        shareScreen,
        isSharing,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
