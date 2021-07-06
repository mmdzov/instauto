import { useState } from "react";
import { Container } from "./MainToolbar.styled";
import { useHistory } from "react-router-dom";
const MainToolbar = () => {
  const [list] = useState([
    { name: "لایک", url: "/like" },
    { name: "کامنت", url: "/comment" },
    { name: "ویو", url: "/view" },
    { name: "استوری", url: "/story" },
  ]);
  const history = useHistory();

  return (
    <Container className="containerToolbar">
      {list?.map((item) => (
        <div
          className="item"
          key={item?.url}
          onClick={() => history.push(item?.url)}
        >
          {item?.name}
        </div>
      ))}
    </Container>
  );
};

export default MainToolbar;
