import { useState } from "react";
import { ForumMoreContainer as Container } from "./Forum.styled";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { useHistory } from "react-router-dom";
const ForumMore = () => {
  const history = useHistory();
  const [data] = useState([
    {
      title: "فروشگاه",
      Icon: StoreFrontIcon,
      url: "/store",
      type: "store",
      token: ~~(Math.random() * 9999999),
    },
    {
      title: "تبدیل سکه",
      Icon: StoreFrontIcon,
      url: "/convert",
      type: "convert",
      token: ~~(Math.random() * 9999999),
    },
    {
      title: "انتقال سکه",
      Icon: StoreFrontIcon,
      url: "/transfer",
      type: "transfer",
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
    else if (type === "convert") return "#ffc107";
    else if (type === "transfer") return "#4caf50";
  };
  return (
    <Container>
      {data.map((item) => (
        <div
          className="item"
          style={{ background: handleBackground(item?.type) }}
          key={item?.token}
          onClick={() => history.push(item?.url)}
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
