import { useHistory } from "react-router-dom";
import { SingleOrderHeaderContainer as Container } from "./SingleOrder.styled";

const SingleOrderHeader = ({ data }) => {
  const history = useHistory();
  return (
    <Container className="">
      {/* user not you ?  so visible this row bottom else hide row Bottom  */}
      <div
        className="row"
        onClick={() => history.push(`/profile/${data?.account?.username}`)}
      >
        <div className="item">
          <span>{data?.account?.username}</span>
        </div>
        <img src={data?.account?.avatar} alt="" />
      </div>
      <div className="topSingleOrder">
        <img src={data?.postPreview} alt="" className="postPreview" />
      </div>
    </Container>
  );
};

export default SingleOrderHeader;
