import * as style from "./MajorSelectMenu.module.css";

const MajorSelectMenu = ({ majors, callback }) => {
  return (
    <div className={style["wrapper"]}>
      <select
        className={style["select"]}
        name="major"
        id="major"
        onChange={e => {
          callback(e.target.value);
        }}
      >
        <option value="" selected>
          Please select a major
        </option>
        {majors.map(major => (
          <option key={major._id} value={major.code}>
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
