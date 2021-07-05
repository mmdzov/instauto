import { useEffect, useState } from "react";

const useDevice = () => {
  const [mobile, setMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return mobile;
};

export default useDevice;
