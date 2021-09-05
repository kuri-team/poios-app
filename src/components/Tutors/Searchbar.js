import * as style from "./Searchbar.module.css";
import FilterWindow from "./FilterWindow";
import { useState } from "react";

const Searchbar = ({ searchQuery, setSearchQuery }) => {
  const [open, setOpen] = useState(false);
  const ref = useDetectCloseDropdown(setOpen, [open]);
  return (
    <div className={style["search-bigcontainer"]}>
      <div className={style["search-container"]}>
        <span className={style["search-icon-container"]}>
          <img className={style["searchIcon"]} src={"/media/icons/search_black_24dp.svg"} alt="" />
        </span>
        <span className={style["filter-icon-container"]}>
          <img className={style["filterIcon"]} src={"/media/icons/filter.svg"} alt="" onClick={() => setOpen(!open)} />
        </span>

        <div className={open ? style["filter-window"] : [style["filterWindow"], style["hidden"]].join(" ")}>
          <FilterWindow filterQuery={filterQuery} setFilterQuery={setFilterQuery} filteredSubject={filteredSubject} />
        </div>

        <input
          className={style["form-control"]}
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          type="text"
          id="tutor-search"
          placeholder="Search for tutors"
          name="search-result"
        />
      </div>
    </div>
  );
};

export default Searchbar;
