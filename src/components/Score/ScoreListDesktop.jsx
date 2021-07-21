import { useState, useCallback } from "react";
import Flickity from "react-flickity-component";
import Gem from "../../assets/images/icons8-jewel-48.png";
import Gold from "../../assets/Icons/CoinRewardIcon.svg";
import Lucky from "../../assets/images/fortune-wheel.png";
import Slider from "../Slider/Slider";

const ScoreListDesktop = ({ clickItem, data = [] }) => {
  const [focused, setFocused] = useState(false);
  const handleDownPointer = useCallback((e) => {
    setFocused(Date.now());
  }, []);
  const handleUpPointer = (e, item) => {
    const now = Date.now();
    if (now - focused <= 180) {
      clickItem(item);
    }
  };
  return (
    <Slider>
      {data?.map((item) => (
        <div
          className="item"
          // onClick={() => handleClickItem(item)}
          key={item?.level}
          onPointerUp={(e) => handleUpPointer(e, item)}
          onPointerDown={handleDownPointer}
        >
          <div className="" className={` ${item?.premium ? "premium" : ""}`}>
            <div className="line">
              <div
                className="lineBackground"
                style={{
                  background: item?.level <= level ? "#ff9800" : "#e6e6e6",
                  width:
                    item?.level < level
                      ? "100%"
                      : item?.level === level
                      ? completedLevel + "%"
                      : "unset",
                }}
              ></div>
              {item?.level === level ? <div className="arrowDown"></div> : null}
            </div>
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
        </div>
      ))}
    </Slider>
  );
};

export default ScoreListDesktop;
