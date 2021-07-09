import { useState, useEffect, useCallback } from "react";
import { ScoreListContainer as Container } from "./Score.styled";
import Gem from "../../assets/images/icons8-jewel-48.png";
import Gold from "../../assets/Icons/CoinRewardIcon.svg";
import Lucky from "../../assets/images/fortune-wheel.png";
import Flickity from "react-flickity-component";
import { useHistory } from "react-router-dom";
const ScoreList = () => {
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
  const history = useHistory();
  const handleClickItem = (item) => {
    console.log(item);
    if (item?.level > 34) return;
    if (item?.reward === "lucky") {
      history.push("/luckywheel");
    }
  };
  const [focused, setFocused] = useState(false);
  const handleDownPointer = useCallback((e) => {
    setFocused(Date.now());
  }, []);
  const handleUpPointer = (e, item) => {
    const now = Date.now();
    if (now - focused <= 180) {
      handleClickItem(item);
    }
  };
  return (
    <Container className="">
      <Flickity
        className={"carousel"}
        elementType={"div"}
        options={{
          freeScroll: true,
          prevNextButtons: false,
          contain: true,
          pageDots: false,
          rightToLeft: true,
          freeScrollFriction: 0.03,
          cellAlign: "right",
          // draggable: false,
        }}
        // reloadOnUpdate
        static
      >
        {data?.map((item) => (
          <div
            className={`item ${item?.premium ? "premium" : ""}`}
            // onClick={() => handleClickItem(item)}
            key={item?.level}
            onPointerUp={(e) => handleUpPointer(e, item)}
            onPointerDown={handleDownPointer}
          >
            <div className="levelNumber">{item?.level}</div>
            <div className="iconReward">
              {item?.reward === "gem" ? (
                <img src={Gem} className="gemReward" alt="" />
              ) : item?.reward === "gold" ? (
                <img src={Gold} className="goldReward" alt="" />
              ) : item?.reward === "lucky" ? (
                <img src={Lucky} alt="" className="luckyReward" />
              ) : item?.reward === "empty" ? null : (
                item?.reward
              )}
            </div>
            <div className="amount">{item?.amount}</div>
          </div>
        ))}
      </Flickity>
    </Container>
  );
};

export default ScoreList;
