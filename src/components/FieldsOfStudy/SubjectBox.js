import { useState } from "react";

import * as style from "./SubjectBox.module.css";

const SubjectBox = ({ subject, styleObject }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={selected ? style["subject-box-selected"] : style["subject-box"]}
      style={styleObject}
      onClick={() => setSelected(!selected)}
    >
      {subject.name}
    </div>
  );
};

export default SubjectBox;
