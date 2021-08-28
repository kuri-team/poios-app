import * as style from "./ReviewerElement.module.css";

const Reviewer = () => {
  return (
    <div className={style["reviewer-element-bigcontainer"]}>
      <div className={style["reviewer-element-container"]}>
        <div className={style["avatar-name-star"]}>
          <img className={style["avatar-image"]} src={"/media/kequing.jpg"} alt="" />
          <div className={style["name-star"]}>
            <span>Kequing</span>
            <div className={style["five-stars"]}>
              <img src={"/media/icons/star.svg"} alt="" />
              <img src={"/media/icons/star.svg"} alt="" />
              <img src={"/media/icons/star.svg"} alt="" />
              <img src={"/media/icons/star.svg"} alt="" />
              <img src={"/media/icons/star_empty.svg"} alt="" />
            </div>
          </div>
        </div>
        <div className={style["comment"]}>
          <p>Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing</p>
        </div>
      </div>
    </div>
  );
};

export default Reviewer;
