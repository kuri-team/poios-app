import { useState } from "react";

import * as style from "./SubjectBox.module.css";

const SubjectBox = ({ key, subject, styleObject }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      key={key}
      className={selected ? style["subject-box-selected"] : style["subject-box"]}
      style={styleObject}
      onClick={() => setSelected(!selected)}
    >
      {subject}
    </div>
  );
};

export default SubjectBox;
