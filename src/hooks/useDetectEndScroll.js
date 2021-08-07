import { useState } from "react";

const useDetectEndScroll = () => {
  const [hasEndScroll, setHasEndScroll] = useState(false);
  const detectEndScroll = (e) => {
    const st = Math.abs(e.target.offsetHeight - e.target.scrollHeight);
    if (st === e.target.scrollTop) {
      setHasEndScroll(true);
    } else setHasEndScroll(false);
  };
  return { detectEndScroll, hasEndScroll, setHasEndScroll };
};

export default useDetectEndScroll;
