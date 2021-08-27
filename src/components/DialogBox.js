import * as style from "./DialogBox.module.css";
import PoiosBackground from "./PoiosBackground";

const DialogBox = ({ background, logo, children }) => (
  <div className={style["wrapper"]}>
    {background ? <PoiosBackground /> : null}
    <div className={style["box"]}>
      {logo ? (
        <div className={style["brand"]}>
          <img src={"/media/Wordmark_Primary.svg"} alt="" draggable={false} />
        </div>
      ) : null}
      {children}
    </div>
  </div>
);

export default DialogBox;
