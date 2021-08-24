import * as style from "./Searchbar.module.css";

const Searchbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={style["search-bigcontainer"]}>
      <div className={style["search-container"]}>
        <span className={style["search-icon-container"]}>
          <img className={style["searchIcon"]} src={"media/icons/search_black_24dp.svg"} alt="" />
        </span>
        <span className={style["filter-icon-container"]}>
          <img className={style["filterIcon"]} src={"media/icons/filter.svg"} alt="" />
        </span>

        <form action="/" method="get">
          <input
            className={style["form-control"]}
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="tutor-search"
            placeholder="Search for tutors"
            name="search-result"
          />
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
