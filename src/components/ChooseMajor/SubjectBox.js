import { useState } from "react";

import * as style from "./SubjectBox.module.css";

const SubjectBox = ({ id, subject }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      key={id}
      className={selected ? style["subject-box-selected"] : style["subject-box"]}
      onClick={() => setSelected(!selected)}
    >
      {subject}
    </div>
  );
};

export default SubjectBox;
