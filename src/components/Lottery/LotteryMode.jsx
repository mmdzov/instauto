import { LotteryModeContainer as Container } from "./Lottery.styled";

const LotteryMode = ({ mode = "", setMode = () => {} }) => {
  return (
    <Container className="">
      <div className="btn" onClick={() => setMode("global")}>
        قرعه کشی رسانه
      </div>
      <div className="btn" onClick={() => setMode("local")}>
        قرعه کشی محلی
      </div>
      <div className="btn" onClick={() => setMode("local")}>
        قرعه کشی عمومی
      </div>
    </Container>
  );
};

export default LotteryMode;
