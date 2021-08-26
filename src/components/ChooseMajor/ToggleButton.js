import * as style from "./ToggleButton.module.css";

const ToggleButton = ({ src, onClick, disabled }) => (
  <button className={disabled ? style["btn-disabled"] : style["btn"]} onClick={onClick}>
    <img src={src} alt="" className={style["img"]} />
  </button>
);

export default ToggleButton;
