import { useState } from "react";
import { ForumMoreContainer as Container } from "./Forum.styled";
import { useHistory } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import GavelIcon from "@material-ui/icons/Gavel";
import WorkIcon from "@material-ui/icons/Work";
import Discount from "../../assets/Icons/discount.jsx";
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
      Icon: CompareArrowsIcon,
      url: "/convert",
      type: "convert",
      token: ~~(Math.random() * 9999999),
    },
    {
      title: "انتقال سکه",
      Icon: TransferWithinAStationIcon,
      url: "/transfer",
      type: "transfer",
      token: ~~(Math.random() * 9999999),
    },
    {
      title: "برترین افراد",
      Icon: AccessibilityIcon,
      url: "/best",
      type: "best",
      token: ~~(Math.random() * 9999999),
    },
    {
      title: "حراج و مزایده دارایی ها",
      Icon: GavelIcon,
      url: "/auction",
      type: "auction",
      token: ~~(Math.random() * 9999999),
    },
    {
      title: "کسب و کار شما",
      Icon: WorkIcon,
      url: "/work",
      type: "work",
      token: ~~(Math.random() * 9999999),
    },
    {
      title: "کد تخفیف",
      Icon: Discount,
      svg: true,
      url: "/discount-code",
      type: "discountCode",
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
    else if (type === "convert") return "#3e3e3e";
    else if (type === "transfer") return "#009688";
    else if (type === "best") return "#8bc34a";
    else if (type === "work") return "#9c27b0";
    else if (type === "auction") return "#4caf50";
    else if (type === "discountCode") return "#ff9800";
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
            {/* {item?.svg ? <img src={item?.Icon} className="svgVector" alt="" /> : <item.Icon />} */}
          </div>
          <div className="itemTitle">{item?.title}</div>
        </div>
      ))}
    </Container>
  );
};

export default ForumMore;
