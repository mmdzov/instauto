import { useState } from "react";
import { ScoreListContainer as Container } from "./Score.styled";

import { useHistory } from "react-router-dom";
import useDevice from "../../hooks/useDevice";
import ScoreListDesktop from "./ScoreListDesktop";
import ScoreListMobile from "./ScoreListMobile";

const ScoreList = () => {
  const [level] = useState(3);
  const [completedLevel] = useState(70);
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
  const [awards, setAwards] = useState([
    { level: 1, received: false },
    { level: 2, received: false },
    { level: 3, received: true },
  ]);

  const history = useHistory();
  const handleClickItem = (item) => {
    if (item?.level > level) return;
    if (item?.reward === "lucky") {
      history.push("/luckywheel");
    }
    if (item.level <= level) {
      const index = awards.findIndex((t) => t?.level === item?.level);
      const received = awards[index]?.received;
      if (received === false) {
        const awds = [...awards];
        awds[index].received = true;
        setAwards(awds);
        //request to server for received reward item and cache to redux
      } else if (received === true) {
        return;
      }
    }
    // for (let i of data) {
    // }
  };
  const mobile = useDevice();

  return (
    <Container className="">
      <div className="line" style={{ top: "11px" }}></div>
      {mobile ? (
        <ScoreListMobile
          clickItem={handleClickItem}
          data={data}
          completedLevel={completedLevel}
          level={level}
          awards={awards}
        />
      ) : null}
      {/* (
        <ScoreListDesktop clickItem={handleClickItem} data={data} />
      ) */}
    </Container>
  );
};

export default ScoreList;
