import { useState, useEffect } from "react";
import * as style from "./SubjectBoxes.module.css";
import ToggleButton from "./ToggleButton";

const SubjectBoxes = () => {
  const subjects = [
    "Omniscient Reader's Viewpoint",
    "Purple Hyacinth",
    "Kieran White",
    "Han Sooyoung",
    "Kim Dokja",
    "Yoo Joonghyuk",
    "Belladonna Davenport",
    "Lauren Sinclair",
    "Akashi Seijuro",
    "Introduction to Programming",
    "Prices and Markets",
    "Asian Cinemas",
    "History and Theory of Design 1",
    "Japanese 1",
    "Organisational Analysis",
    "International Business",
    "Machine Learning",
    "Engineering Computing 1",
    "Photography 101",
    "Introduction to Language",
    "Introduction to Fashion Enterprise",
    "Accounting in Organisations & Society",
    "Web Programming",
    "Commercial Law",
    "Business Statistics 1",
  ];

  const MAX_BOX_PER_PAGE = 12;

  const [currentPage, setCurrentPage] = useState(1);
  const [subjectList, setSubjectList] = useState(subjects.slice(0, MAX_BOX_PER_PAGE));

  let numPage =
    subjects.length % MAX_BOX_PER_PAGE === 0
      ? subjects.length / MAX_BOX_PER_PAGE
      : Math.ceil(subjects.length / MAX_BOX_PER_PAGE);

  const togglePrevPage = event => {
    if (currentPage <= 1) {
      event.preventDefault();
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleNextPage = event => {
    if (currentPage >= numPage) {
      event.preventDefault();
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setSubjectList(subjects.slice((currentPage - 1) * MAX_BOX_PER_PAGE, currentPage * MAX_BOX_PER_PAGE));
  }, [currentPage]);

  // const [selectedIds, setSelectedIds] = useState([]);
  // let newSelectedIds = [];
  //
  // const handleClick = id => {
  //   newSelectedIds.includes(id) ? newSelectedIds.splice(selectedIds.indexOf(id), 1) : newSelectedIds.push(id);
  //   console.log(selectedIds);
  // };

  return (
    <div className={style["container"]}>
      <div className={style["prev-btn"]}>
        <ToggleButton src={"/media/chevron-left.svg.png"} onClick={event => togglePrevPage(event)} />
      </div>
      <div className={style["subject-container"]}>
        {subjectList.map((subject, id) => (
          <div key={id} className={style["subject-box"]}>
            {subject}
          </div>
        ))}
      </div>
      <div className={style["next-btn"]}>
        <ToggleButton src={"/media/chevron-right.svg.png"} onClick={event => toggleNextPage(event)} />
      </div>
    </div>
  );
};

export default SubjectBoxes;
