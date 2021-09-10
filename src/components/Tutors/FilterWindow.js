import * as style from "./FilterWindow.module.css";

const FilterWindow = ({ filterQuery, setFilterQuery, filteredSubject, majors }) => {
  return (
    <div className={style["window-container"]}>
      <div className={style["search-input-container"]}>
        <input
          type="text"
          placeholder="Search subjects"
          name="subject-result"
          value={filterQuery}
          onInput={e => setFilterQuery(e.target.value)}
        />
        <img className={style["search-icon"]} src={"/media/icons/search_black_24dp.svg"} alt="" />
      </div>

      <div className={style["subject-result-element"]}>
        {majors.map(major => (
          <>
            <div className={style["subject-general"]}>
              <img className={style["arrow-drop-down"]} src={"/media/icons/arrow_drop_down_black_24dp.svg"} alt="" />
              <span key={major.code}>{major.name}</span>
            </div>
            {filteredSubject.map(subject => {
              if (subject.major == major.code)
                return (
                  <ul className={style["subject-result-list"]}>
                    <li key={subject.id}>{subject.name}</li>
                  </ul>
                );
            })}
          </>
        ))}
      </div>
    </div>
  );
};

export default FilterWindow;
