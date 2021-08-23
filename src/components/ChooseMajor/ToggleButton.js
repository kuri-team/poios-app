import * as style from "./ToggleButton.module.css";

const ToggleButton = ({ src, disabled }) => (
  <button disabled={disabled} className={style["btn"]}>
    <img src={src} alt="" className={style["img"]} />
  </button>
);

export default ToggleButton;
