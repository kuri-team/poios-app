import * as style from "./ToggleButton.module.css";

const ToggleButton = ({ src, onClick }) => (
  <button className={style["btn"]} onClick={onClick}>
    <img src={src} alt="" className={style["img"]} />
  </button>
);

export default ToggleButton;
