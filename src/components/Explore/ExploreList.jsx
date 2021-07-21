import { useState } from "react";
import useResize from "../../hooks/useResize";
import { ExploreListContainer as Container } from "./Explore.styled";

const ExploreList = ({ list = [] }) => {
  const [width, setWidth] = useState(0);
  const handleResize = () => {
    const expImg = document.getElementsByClassName("expImage")[0];
    const expImgWidth = expImg?.getBoundingClientRect()?.width;
    setWidth(expImgWidth);
  };
  useResize(handleResize);
  return (
    <Container>
      {list.map((item) => (
        <div className="item">
          <img
            src={item?.image}
            style={{ height: width }}
            alt=""
            className="expImage"
          />
        </div>
      ))}
    </Container>
  );
};

export default ExploreList;
