import { CommentPostContainer as Container } from "./Home.styled";
import SendIcon from "@material-ui/icons/Send";
import { useDispatch } from "react-redux";
import { handleSendComment } from "../../store/actions/userAction";
import { useState } from "react";

const CommentPost = ({ item }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = () => {
    dispatch(handleSendComment(item?.token, text));
    setText("");
  };

  return (
    <Container className="">
      <div className="userProfile">
        <img src={item?.account?.image} alt="" className="avatar" />
        <div className="username">{item?.account?.username}</div>
      </div>
      <img src={item.media} alt="" className="mediaImg" />
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <img
          src="https://www.talab.org/wp-content/uploads/2018/04/692060199-talab-org.jpg"
          alt=""
          className="avatar"
        />
        <input
          type="text"
          placeholder="کامنت خود را بنویسید..."
          onChange={handleChange}
          value={text}
        />
        <button type="submit" onClick={handleSubmit}>
          <SendIcon />
        </button>
      </form>
    </Container>
  );
};

export default CommentPost;
