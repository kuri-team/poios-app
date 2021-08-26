import ReviewerElement from "./ReviewerElement";
import * as style from "./Reviewer.module.css";

const Reviewer = () => {
  return (
    <div className={style["reviewer-bigcontainer"]}>
      <h3>REVIEWS</h3>
      <div className={style["reviewer-container"]}>
        <ReviewerElement />
        <ReviewerElement />
        <ReviewerElement />
        <ReviewerElement />
        <ReviewerElement />
        <ReviewerElement />
      </div>
    </div>
  );
};

export default Reviewer;
