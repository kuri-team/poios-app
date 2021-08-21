import * as style from "../styles/Searchbar.module.css";

const Searchbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <div className={style["searchbar-h1"]}>
        <h1>OUR TUTORS</h1>
      </div>
      <div className={style["search-bigcontainer"]}>
        <div className={style["search-container"]}>
          <span className={style["SearchIcon"]}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </span>

          <span className={style["FilterIcon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              fill="#000000"
            >
              <g>
                <path d="M0,0h24 M24,24H0" fill="none" />
                <path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" />
                <path d="M0,0h24v24H0V0z" fill="none" />
              </g>
            </svg>
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
