import toToman from "../../utils/toToman";
import { ContainerOrderList } from "./Order.styled";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PeopleIcon from "@material-ui/icons/People";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const OrderList = ({ item = {}, list = [] }) => {
  const persianNumber = (number) => {
    const nm = +number;
    return nm.toLocaleString("fa-IR");
  };
  const titleBackground = (type) => {
    if (type === "follower") return "#2196f329";
    else if (type === "like") return "#ff4c4c45";
    else if (type === "comment") return "#9c27b04f";
    else if (type === "postView") return "#607d8b52";
    else if (type === "commentLike") return "#3f51b54f";
  };
  return (
    <ContainerOrderList className="">
      <div
        className="title"
        style={{ background: titleBackground(item?.type) }}
      >
        <div className="">{item?.title}</div>
        <div className="more">
          {item?.type === "like" ? (
            <FavoriteIcon style={{ color: "#ff4c4c" }} />
          ) : item?.type === "follower" ? (
            <PeopleIcon style={{ color: "#2196f3" }} />
          ) : item?.type === "comment" ? (
            <ModeCommentIcon style={{ color: "#9c27b0" }} />
          ) : item?.type === "postView" ? (
            <VisibilityIcon style={{ color: "#607d8b" }} />
          ) : item?.type === "commentLike" ? (
            <ThumbUpAltIcon style={{ color: "#3f51b5" }} />
          ) : null}
          {/* <div className="moreTitle">مشاهده کامل</div>
          <div className="moreBackIcon">
            <ArrowBackIosIcon />
          </div> */}
        </div>
      </div>
      {list?.map((item) => (
        <div className="item">
          <div className="">{persianNumber(item?.amount)}</div>
          <div className="">{toToman(item?.price)}</div>
        </div>
      ))}
    </ContainerOrderList>
  );
};

export default OrderList;
