import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LotteryModeContainer as Container } from "./Lottery.styled";

const LotteryMode = ({ step = 1, list = [], setStep = () => {} }) => {
  const history = useHistory();
  const { pathname, state } = useLocation();
  const handleGoMode = (mode, stepNumber, action) => {
    if (step === 2) {
      history.push(`/lottery/add/${step}/${action}`, { ...state });
      return;
    }
    setStep(2);
    history.push(`/lottery/add/${step + 1}`, { mode });
  };
  useEffect(() => {
    const parse = pathname.split("/");
    const stepNum = parse.slice(-1)[0];
    setStep(+stepNum);
  }, [pathname]);
  return (
    <Container className="">
      {list?.map((item) => (
        <div
          key={item?.title}
          className="btn"
          onClick={() => handleGoMode(item?.mode, item?.step, item?.action)}
        >
          {item?.title}
        </div>
      ))}
    </Container>
  );
};

export default LotteryMode;
