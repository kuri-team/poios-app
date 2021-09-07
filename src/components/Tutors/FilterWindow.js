import * as style from "./FilterWindow.module.css";

const FilterWindow = ({ filterQuery, setFilterQuery, filteredSubject }) => {
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
        <div className={style["subject-general"]}>
          <img className={style["arrow-drop-down"]} src={"/media/icons/arrow_drop_down_black_24dp.svg"} alt="" />
          <span>Subject 1</span>
        </div>
        <ul className={style["subject-result-list"]}>
          {filteredSubject.map(subject => {
            if (subject.id < 4) return <li key={subject.id}>{subject.name}</li>;
          })}
        </ul>
      </div>

      <div className={style["subject-result-element"]}>
        <div className={style["subject-general"]}>
          <img className={style["arrow-drop-down"]} src={"/media/icons/arrow_drop_down_black_24dp.svg"} alt="" />
          <span>Subject 2</span>
        </div>
        <ul className={style["subject-result-list"]}>
          {filteredSubject.map(subject => (
            <li key={subject.id}>{subject.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterWindow;
