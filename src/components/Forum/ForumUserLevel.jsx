import { useState } from "react";
import LevelIcon from "../../assets/Icons/LevelIcon";
import { ForumUserLevelContainer as Container } from "./Forum.styled";
import ProfileImage from "../../assets/images/avatar.jpg";
import { Progress } from "antd";
import { useHistory } from "react-router-dom";

const ForumUserLevel = () => {
  const [level] = useState(34);
  const history = useHistory();
  return (
    <Container onClick={() => history.push("/score")}>
      <div className="progressHeader">
        <div className="progressTitle">
          سطح شما : <span>{level}</span>
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
        <div className="reward">Coin 2×</div>
      </div>
    </Container>
  );
};

export default ForumUserLevel;
