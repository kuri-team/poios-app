import * as style from "./MajorSelectMenu.module.css";

const MajorSelectMenu = ({ majors }) => {
  return (
    <div className={style["wrapper"]}>
      <select className={style["select"]} name="major" id="major">
        {majors.map(major => (
          <option key={major.code} value={major.code}>
            {major.name}
          </option>
        ))}
      </select>
      <button className={style["button"]}>
        <img src={"/media/icons/expand_more_black_24dp.svg"} alt="" />
      </button>
    </div>
  );
};

export default MajorSelectMenu;
