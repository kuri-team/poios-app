import { useState } from "react";

import * as style from "./SubjectBox.module.css";

const SubjectBox = ({ subject, styleObject, callback, selectedSubjects }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={selectedSubjects.includes(subject) ? style["subject-box-selected"] : style["subject-box"]}
      style={styleObject}
      onClick={() => {
        let buffer = selectedSubjects;
        if (!selectedSubjects.includes(subject)) {
          buffer.push(subject);
        } else {
          const index = buffer.indexOf(subject);
          if (index > -1) {
            buffer.splice(index, 1);
          }
        }
        callback(buffer);
        setSelected(!selected);
      }}
    >
      {subject.name}
    </div>
  );
};

export default SubjectBox;
