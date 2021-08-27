import * as style from "./DialogBox.module.css";
import PoiosBackground from "./PoiosBackground";

const DialogBox = ({ background, logo, scroll, children }) => (
  <div className={scroll ? [style["wrapper"], style["wrapper-scroll"]].join(" ") : style["wrapper"]}>
    <div className={style["box"]}>
      {logo ? (
        <div className={style["brand"]}>
          <img src={"/media/Wordmark_Primary.svg"} alt="" draggable={false} />
        </div>
      ) : null}
      {children}
    </div>
    {background ? <PoiosBackground /> : null}
  </div>
);

export default DialogBox;
