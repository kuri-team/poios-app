import { useState } from "react";

import * as style from "./MobileNav.module.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </button>
      <div></div>
    </>
  );
};

export default MobileNav;
