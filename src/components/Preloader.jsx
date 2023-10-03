import { useEffect } from "react";
import { useState } from "react";
import useScrollDisable from "../hooks/useScrollDisable";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useScrollDisable(isLoading);

  useEffect(() => {
    const handleIsLoading = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleIsLoading);

    return () => {
      window.removeEventListener("load", handleIsLoading);
    };
  }, []);
  return <>{isLoading && <div className="spinner"></div>}</>;
};

export default Preloader;
