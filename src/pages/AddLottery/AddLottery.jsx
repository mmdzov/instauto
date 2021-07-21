import { useState } from "react";
import LotteryMode from "../../components/Lottery/LotteryMode";

const AddLottery = () => {
  const [step, setStep] = useState(1);
  const [step1] = useState([
    { title: "قرعه کشی رسانه", mode: "media" },
    { title: "قرعه کشی محلی", mode: "local" },
    { title: "قرعه کشی عمومی", mode: "global" },
  ]);
  const [step2] = useState([
    { title: "ایجاد قرعه کشی", action: "create" },
    { title: "عضویت در قرعه کشی", action: "join" },
  ]);
  const handleSetStepData = () => {
    if (step === 1) return step1;
    if (step === 2) return step2;
  };
  return (
    <div className="container">
      <LotteryMode step={step} setStep={setStep} list={handleSetStepData()} />
    </div>
  );
};

export default AddLottery;
