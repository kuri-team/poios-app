import { useState, useEffect } from "react";

import ToggleButton from "./ToggleButton";
import SubjectBox from "./SubjectBox";
import * as style from "./SubjectBoxes.module.css";

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

  const boxesPerPage = 12;

  const [currentPage, setCurrentPage] = useState(0);
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

  return (
    <div className={style["container"]}>
      <div className={style["prev-btn"]}>
        {currentPage === 0 ? (
          <ToggleButton src={"/media/icons/chevron_left.svg"} onClick={() => togglePrevPage()} disabled />
        ) : (
          <ToggleButton src={"/media/icons/chevron_left.svg"} onClick={() => togglePrevPage()} />
        )}
      </div>
      <div className={style["subject-container"]}>
        {subjects.map((subject, i) =>
          visibleSubjectsIndex.startIndex <= i && i <= visibleSubjectsIndex.endIndex ? (
            <SubjectBox key={i} subject={subject} />
          ) : (
            <SubjectBox key={i} subject={subject} styleObject={{ display: "none" }} />
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
