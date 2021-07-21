import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LotteryTabs from "../../components/Lottery/LotteryTabs";

const LotteryCreateMode = () => {
  const [mode, setMode] = useState("");
  const { state, pathname } = useLocation();
  useEffect(() => {
    if (pathname.includes("create")) setMode("create");
    else if (pathname.includes("join")) setMode("join");
  }, [pathname]);
  return (
    <div className="container">
      {state?.mode === "media" && mode === "create" ? <LotteryTabs /> : null}
    </div>
  );
};

export default LotteryCreateMode;
