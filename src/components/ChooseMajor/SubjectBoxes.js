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

  const [selectedIds, setSelectedIds] = useState([]);

  let newSelectedIds = selectedIds;

  const handleClick = id => {
    selectedIds.includes(id) ? newSelectedIds.splice(selectedIds.indexOf(id), 1) : newSelectedIds.push(id);
    setSelectedIds(newSelectedIds);
    console.log(selectedIds);
  };

  return (
    <div className={style["container"]}>
      <div className={style["prev-btn"]}>
        <ToggleButton disabled={true} src={"/media/chevron-left.svg.png"} />
      </div>
      {subjects.map((subject, id) => (
        <div
          key={id}
          className={selectedIds.includes(id) ? style["subject-box-selected"] : style["subject-box"]}
          onClick={id => handleClick(id)}
        >
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
