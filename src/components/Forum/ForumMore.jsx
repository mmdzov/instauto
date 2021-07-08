import { useState } from "react";
import { ForumMoreContainer as Container } from "./Forum.styled";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const ForumMore = () => {
  const [data] = useState([
    {
      title: "فروشگاه",
      Icon: StoreFrontIcon,
      url: "/store",
      type: "store",
      token: ~~(Math.random() * 9999999),
    },
    {
      title: "ارتباط با پشتیبانی",
      Icon: PersonOutlineIcon,
      url: "/contact",
      type: "contact",
      token: ~~(Math.random() * 9999999),
    },
  ]);
  const handleBackground = (type) => {
    if (type === "store") return "crimson";
    else if (type === "contact") return "steelblue";
  };
  return (
    <Container>
      {data.map((item) => (
        <div
          className="item"
          style={{ background: handleBackground(item?.type) }}
        >
          <div className="icon">
            <item.Icon />
          </div>
          <div className="itemTitle">{item?.title}</div>
        </div>
      ))}
    </Container>
  );
};

export default ForumMore;
