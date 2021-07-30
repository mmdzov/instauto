import { useLocation } from "react-router-dom";
import LotteryCreate from "../../components/Lottery/LotteryCreate";

const LotteryCreateMode = () => {
  const { state, pathname } = useLocation();
  return (
    <div className="container">
      <LotteryCreate mode={state?.mode} />
    </div>
  );
};

export default LotteryCreateMode;
