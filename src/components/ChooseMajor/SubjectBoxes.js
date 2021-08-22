import * as style from "./SubjectBoxes.module.css";

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

  return (
    <div className={style["container"]}>
      {subjects.map((subject, id) => (
        <div key={id} className={style["subject-box"]}>
          {subject}
        </div>
      ))}
    </div>
  );
};

export default SubjectBoxes;
