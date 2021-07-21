import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch } from "react-redux";
import { commentLiked } from "../../store/actions/userAction";
import LinesEllipsis from "react-lines-ellipsis";
import { CommentItemContainer as Container } from "./Home.styled";

const CommentItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleLike = (token, liked) => {
    dispatch(commentLiked(token, liked));
  };
  const handleRtl = (text) => {
    const rtl = text?.match(/^[a-zA-Z0-9]/gi);
    if (rtl) return false;
    return true;
  };
  return (
    <Container>
      <img src={item?.account?.image} className="avatar" alt="" />
      <div className="content">
        <div className="username">{item?.account?.username}</div>
        <div className={`text ${handleRtl(item?.commentText) ? "rtl" : ""}`}>
          <LinesEllipsis
            text={item?.commentText}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
      <div
        className="liked"
        onClick={() => handleLike(item?.token, item?.liked)}
      >
        {item.liked ? (
          <FavoriteIcon style={{ color: "#ff6666" }} />
        ) : (
          <FavoriteBorderIcon style={{ color: "#969696" }} />
        )}
      </div>
    </Container>
  );
};

export default CommentItem;
