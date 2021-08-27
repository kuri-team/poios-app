import * as style from "./DialogBox.module.css";
import PoiosBackground from "./PoiosBackground";

const DialogBox = ({ background, logo, children }) => (
  <>
    {background ? <PoiosBackground /> : null}
    <div className={style["wrapper"]}>
      {logo ? (
        <div className={style["brand"]}>
          <img src={"/media/Wordmark_Primary.svg"} alt="" draggable={false} />
        </div>
      ) : null}
      {children}
    </div>
  </>
);

export default DialogBox;
