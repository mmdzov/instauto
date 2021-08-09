import { useState } from "react";
import { useHistory } from "react-router-dom";
import { OrderPlansContainer as Container } from "./Order.styled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PeopleIcon from "@material-ui/icons/People";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import BuildIcon from "@material-ui/icons/Build";
import { useSelector } from "react-redux";

const OrderPlans = () => {
  const { plans } = useSelector(({ order }) => order);
  const history = useHistory();

  return (
    <Container>
      {plans.map((item) => (
        <div
          className="item"
          onClick={() => history.push(`/order/plans/${item?.type}`)}
        >
          <div className="title">{item?.title}</div>
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
            ) : item?.type === "unfollow" ? (
              <PersonAddDisabledIcon style={{ color: "#ccc" }} />
            ) : null}
          </div>
        </div>
      ))}
      <div className="item" onClick={() => history.push(`/order/plans/custom`)}>
        <div className="title">پلن سفارشی</div>
        <div className="more">
          <BuildIcon style={{ color: "#607d8b" }} />
        </div>
      </div>
    </Container>
  );
};

export default OrderPlans;
