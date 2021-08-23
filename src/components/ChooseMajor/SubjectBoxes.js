import { useState } from "react";
import * as style from "./SubjectBoxes.module.css";
import ToggleButton from "./ToggleButton";

const SubjectBoxes = () => {
  const subjects = [
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
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [subjectList, setSubjectList] = useState(subjects);

  const MAX_BOX_PER_PAGE = 12;
  let numPage =
    subjects.length % MAX_BOX_PER_PAGE === 0
      ? subjects.length / MAX_BOX_PER_PAGE
      : subjects.length / MAX_BOX_PER_PAGE + 1;

  const togglePrevPage = event => {
    if (currentPage <= 1) {
      console.log("Page 1");
      event.preventDefault();
    } else {
      setCurrentPage(currentPage - 1);
      setSubjectList(subjects.slice((currentPage - 1) * MAX_BOX_PER_PAGE, currentPage * MAX_BOX_PER_PAGE));
      console.log(`page ${currentPage}`);
    }
  };

  // const [selectedIds, setSelectedIds] = useState([]);
  //
  // let newSelectedIds = selectedIds;
  //
  // const handleClick = id => {
  //   selectedIds.includes(id) ? newSelectedIds.splice(selectedIds.indexOf(id), 1) : newSelectedIds.push(id);
  //   setSelectedIds(newSelectedIds);
  //   console.log(selectedIds);
  // };

  return (
    <div className={style["container"]}>
      <div className={style["prev-btn"]}>
        <ToggleButton src={"/media/chevron-left.svg.png"} onClick={event => togglePrevPage(event)} />
      </div>
      {subjects.map((subject, id) => (
        <div key={id} className={style["subject-box"]}>
          {subject}
        </div>
      ))}
      <div className={style["next-btn"]}>
        <ToggleButton src={"/media/chevron-right.svg.png"} />
      </div>
    </div>
  );
};

export default SubjectBoxes;
