import { useEffect, useRef } from "react";

const useDetectCloseDropdown = (callback, deps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (open) {
      const handleEscapeDown = e => {
        if (e.key === "Escape") {
          callback(false);
          window.removeEventListener("keydown", handleEscapeDown);
        }
      };
      window.addEventListener("keydown", handleEscapeDown);

      const handleClickOutside = e => {
        if (ref.current && !ref.current.contains(e.target)) {
          callback(false);
          window.removeEventListener("click", handleClickOutside);
        }
      };
      window.addEventListener("click", handleClickOutside);
    }
  }, deps);

  return ref;
};

export default useDetectCloseDropdown;
