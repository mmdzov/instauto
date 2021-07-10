import { useState } from "react";
import LevelIcon from "../../assets/Icons/LevelIcon";
import { ForumUserLevelContainer as Container } from "./Forum.styled";
import ProfileImage from "../../assets/images/avatar.jpg";
import { Progress } from "antd";
import { useHistory } from "react-router-dom";
import Gem from "../../assets/images/icons8-jewel-48.png";
import Gold from "../../assets/Icons/CoinRewardIcon.svg";
import Lucky from "../../assets/images/fortune-wheel.png";
const ForumUserLevel = () => {
  const [level] = useState(12);
  const history = useHistory();
  const [data] = useState([
    { level: 1, reward: "gold", amount: "200" },
    { level: 2, reward: "lucky", amount: "2", premium: true },
    { level: 3, reward: "gold", amount: "x2", expire: 24 },
    { level: 4, reward: "gem", amount: "1" },
    { level: 5, reward: "lucky", amount: "1" },
    { level: 6, reward: "gem", amount: "1", premium: true },
    { level: 7, reward: "gem", amount: "1", premium: true },
    { level: 8, reward: "lucky", amount: "1" },
    { level: 9, reward: "gold", amount: "500", premium: true },
    { level: 10, reward: "lucky", amount: "1" },
    { level: 11, reward: "gold", amount: "120" },
    { level: 12, reward: "gold", amount: "700", premium: true },
    { level: 13, reward: "lucky", amount: "3", premium: true },
    { level: 14, reward: "gold", amount: "x2", expire: 24 },
    { level: 15, reward: "gem", amount: "5", premium: true },
    { level: 16, reward: "lucky", amount: "1" },
    { level: 17, reward: "gold", amount: "500", premium: true },
    { level: 18, reward: "gem", amount: "10", premium: true },
    { level: 19, reward: "gold", amount: "100" },
    { level: 20, reward: "lucky", amount: "5", premium: true },
  ]);
  const handleReward = () => {
    const rewardIndex = data.findIndex((item) => item.level === level);
    const reward = data[rewardIndex + 1];
    if (reward.reward === "gold") return <img src={Gold} alt="" />;
    else if (reward.reward === "gem")
      return <img src={Gem} className="gemReward" alt="" />;
    else if (reward.reward === "lucky") return <img src={Lucky} alt="" />;
  };
  return (
    <Container onClick={() => history.push("/score")} className="premium">
      <div className="progressHeader">
        <div className="progressTitle">
          سطح فصلی شما : <span>{level}</span>
        </div>
        <div className="" style={{ height: 40 }}>
          {/* <img src={ProfileImage} className="progressImg" alt="" /> */}
          <LevelIcon />
        </div>
      </div>
      <div className="progressContent">
        <Progress
          strokeColor={{
            from: "#572ff7",
            to: "#13bf41",
          }}
          percent={70}
          status="active"
        />
        <div className="reward">{handleReward()}</div>
      </div>
    </Container>
  );
};

export default ForumUserLevel;
