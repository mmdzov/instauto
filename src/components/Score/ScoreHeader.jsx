import { ScoreHeaderContainer as Container } from "./Score.styled";
import Avatar from "../../assets/images/avatar.jpg";
import { useState } from "react";
import { Progress } from "antd";
import { useHistory } from "react-router-dom";

const ScoreHeader = () => {
  const [level] = useState(34);
  const [premium] = useState(false);
  const history = useHistory();
  const handlePremiumAccount = () => {
    if (!premium) {
      history.push("/store/premium");
    }
  };
  return (
    <Container className="" premium={premium}>
      <div className="user">
        <img src={Avatar} alt="" />
        <div className="username">mmdzov</div>
      </div>
      <div className="progress">
        <div className="topBox">
          <div className="title">
            سطح شما: <span>{level}</span>
          </div>
          <div className="premiumAccountLink" onClick={handlePremiumAccount}>
            {premium ? "حساب ویژه" : "حسابتو ویژه کن"}
          </div>
        </div>
        <Progress
          strokeColor={{
            from: "#572ff7",
            to: "#13bf41",
          }}
          percent={70}
          status="active"
        />
      </div>
    </Container>
  );
};

export default ScoreHeader;
