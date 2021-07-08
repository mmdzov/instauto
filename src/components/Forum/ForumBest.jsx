import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ForumBestContainer as Container } from "./Forum.styled";

const ForumBest = () => {
  const history = useHistory();
  const [data] = useState([
    {
      title: "برترین خرید ها",
      type: "buy",
      url: "/best/purchases",
      token: ~~(Math.random() * 9999999),
    },
    {
      title: "برترین سفارشات",
      type: "order",
      url: "/best/order",
      token: ~~(Math.random() * 9999999),
    },
    {
      title: "برترین افراد",
      type: "users",
      url: "/best/users",
      token: ~~(Math.random() * 9999999),
    },
    {
      title: "برترین دارایی ها",
      type: "rich",
      url: "/best/richs",
      token: ~~(Math.random() * 9999999),
    },
  ]);
  const handleBackground = (type) => {
    if (type === "buy") return "#2196f3";
    else if (type === "order") return "#4caf50";
    else if (type === "users") return "#9c27b0";
    else if (type === "rich") return "#f44336";
  };
  return (
    <Container className="">
      <div className="title">برترین ها</div>
      {data?.map((item) => (
        <div
          className="item"
          style={{ background: handleBackground(item?.type) }}
          onClick={() => history.push(`${item?.url}`)}
        >
            <div className="dashedLine"></div>
          {item?.title}
        </div>
      ))}
    </Container>
  );
};

export default ForumBest;
