import VideoPlayer from "./VideoPlayer";

import * as style from "./VideoChatWindow.module.css";

const VideoChatWindow = () => {
  return (
    <div className={style["wrapper"]}>
      <div className={style["app-bar"]}>
        <h1>Video Call Application</h1>
      </div>
      <VideoPlayer />
    </div>
  );
};

export default VideoChatWindow;
