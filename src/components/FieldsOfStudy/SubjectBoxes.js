import { useState, useEffect } from "react";

import ToggleButton from "./ToggleButton";
import SubjectBox from "./SubjectBox";
import * as style from "./SubjectBoxes.module.css";

const SubjectBoxes = ({ subjects, callback, selected, currentPage, setCurrentPage }) => {
  const boxesPerPage = 12;

  const [visibleSubjectsIndex, setVisibleSubjectsIndex] = useState({
    startIndex: 0,
    endIndex: 11,
  });

  let numPages =
    subjects.length % boxesPerPage === 0 ? subjects.length / boxesPerPage : Math.ceil(subjects.length / boxesPerPage);

  const togglePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleNextPage = () => {
    if (currentPage < numPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setVisibleSubjectsIndex({
      startIndex: currentPage * boxesPerPage,
      endIndex:
        currentPage * boxesPerPage + boxesPerPage - 1 < subjects.length
          ? currentPage * boxesPerPage + boxesPerPage - 1
          : subjects.length - 1,
    });
  }, [currentPage]);

  return subjects.length === 0 ? (
    <></>
  ) : (
    <div className={style["container"]}>
      <div className={style["prev-btn"]}>
        {currentPage === 0 ? (
          <ToggleButton src={"/media/icons/chevron_left.svg"} onClick={() => togglePrevPage()} disabled />
        ) : (
          <ToggleButton src={"/media/icons/chevron_left.svg"} onClick={() => togglePrevPage()} />
        )}
      </div>
      <div className={style["content"]}>
        {subjects.map((subject, i) =>
          visibleSubjectsIndex.startIndex <= i && i <= visibleSubjectsIndex.endIndex ? (
            <SubjectBox key={i} subject={subject} callback={callback} selectedSubjects={selected} />
          ) : (
            <SubjectBox
              key={i}
              subject={subject}
              styleObject={{ display: "none" }}
              callback={callback}
              selectedSubjects={selected}
            />
          ),
        )}
      </div>
      <div className={style["next-btn"]}>
        {currentPage === numPages - 1 ? (
          <ToggleButton src={"/media/icons/chevron_right.svg"} onClick={() => toggleNextPage()} disabled />
        ) : (
          <ToggleButton src={"/media/icons/chevron_right.svg"} onClick={() => toggleNextPage()} />
        )}
      </div>
    </div>
  );
};

export default SubjectBoxes;
