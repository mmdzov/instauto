import { useEffect } from "react";

const useResize = (handleResize = () => {}) => {
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", () => handleResize());
    return () => {
      window.addEventListener("resize", () => handleResize());
    };
  }, []);
};

export default useResize;
