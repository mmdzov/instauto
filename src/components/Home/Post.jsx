import { CommentPostContainer as Container } from "./Home.styled";
import { useDispatch } from "react-redux";
import { handleLikePost } from "../../store/actions/userAction";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Post = ({ item }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(handleLikePost(item?.token, item?.liked));
  };

  return (
    <Container className="">
      <div className="userProfile">
        <img src={item?.account?.image} alt="" className="avatar" />
        <div className="username">{item?.account?.username}</div>
      </div>
      <img src={item.media} alt="" className="mediaImg" />
      <div className="likeContainer" onClick={handleLike}>
        {item.liked ? (
          <FavoriteIcon style={{ color: "#ff6666" }} />
        ) : (
          <FavoriteBorderIcon style={{ color: "#969696" }} />
        )}
      </div>
    </Container>
  );
};

export default Post;
