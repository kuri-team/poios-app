import * as style from "./MajorSelectMenu.module.css";

const MajorSelectMenu = () => {
  const majors = [
    { code: "BP162", name: "Information Technology" },
    { code: "BP251", name: "Economics and Finance" },
    { code: "BP316", name: "Design Studies" },
    { code: "BP222", name: "Professional Communication" },
    { code: "BP317", name: "Languages" },
  ];

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
