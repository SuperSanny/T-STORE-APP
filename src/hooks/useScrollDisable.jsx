import { useEffect } from "react";

const useScrollDisable = (element) => {
  useEffect(() => {
    element
      ? document.body.classList.add("overflow_hide")
      : document.body.classList.remove("overflow_hide");
  }, [element]);
};

export default useScrollDisable;
