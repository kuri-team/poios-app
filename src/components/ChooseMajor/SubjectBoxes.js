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

  const maxBoxPerPage = 12;

  const [currentPage, setCurrentPage] = useState(1);
  const [subjectList, setSubjectList] = useState(subjects.slice(0, maxBoxPerPage));

  let numPage =
    subjects.length % maxBoxPerPage === 0
      ? subjects.length / maxBoxPerPage
      : Math.ceil(subjects.length / maxBoxPerPage);

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
    setSubjectList(subjects.slice((currentPage - 1) * maxBoxPerPage, currentPage * maxBoxPerPage));
  }, [currentPage]);

  return (
    <div className={style["container"]}>
      <div className={style["prev-btn"]}>
        <ToggleButton src={"/media/chevron_left.svg"} onClick={event => togglePrevPage(event)} />
      </div>
      <div className={style["subject-container"]}>
        {subjectList.map((subject, id) => (
          <SubjectBox id={id} subject={subject} />
        ))}
      </div>
      <div className={style["next-btn"]}>
        <ToggleButton src={"/media/chevron_right.svg"} onClick={event => toggleNextPage(event)} />
      </div>
    </div>
  );
};

export default SubjectBoxes;
