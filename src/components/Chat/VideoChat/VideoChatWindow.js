import VideoPlayer from "./VideoPlayer";

import * as style from "./VideoChatWindow.module.css";

const VideoChatWindow = ({ tutorName }) => {
  return (
    <div className={style["wrapper"]}>
      <div className={style["app-bar"]}>
        <h1 className={style["app-bar-header"]}>Video Call</h1>
      </div>
      <VideoPlayer tutorName={tutorName} />
    </div>
  );
};

export default VideoChatWindow;
