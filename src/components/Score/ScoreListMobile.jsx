import Gem from "../../assets/images/icons8-jewel-48.png";
import Gold from "../../assets/Icons/CoinRewardIcon.svg";
import Lucky from "../../assets/images/fortune-wheel.png";
import ScrollContainer from "react-indiana-drag-scroll";

const ScoreListMobile = ({
  clickItem = () => {},
  data = [],
  completedLevel = 0,
  level = 0,
  awards = [],
}) => {
  return (
    <ScrollContainer className="scroll-container" horizontal>
      {data?.map((item, i) => (
        <div className="item" onClick={() => clickItem(item)} key={item?.level}>
          <div
            className={`${
              awards[i]?.received === false
                ? "notAwardReceived"
                : awards[i]?.received === true
                ? "awardReceived"
                : ""
            }   ${item?.premium ? "premium" : ""}`}
          >
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
    </ScrollContainer>
  );
};

export default ScoreListMobile;
