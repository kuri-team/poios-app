import * as style from "../../styles/Searchbar.module.css";

const Searchbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <div className={style["searchbar-h1"]}>
        <h1>OUR TUTORS</h1>
      </div>
      <div className={style["search-bigcontainer"]}>
        <div className={style["search-container"]}>
          <span className={style["SearchIcon"]}>
            <img src={"media/icons/search_black_24dp.svg"} />
          </span>

          <span className={style["FilterIcon"]}>
            <img src={"media/icons/filter_alt_black_24dp.svg"} />
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
    </>
  );
};

export default Searchbar;
