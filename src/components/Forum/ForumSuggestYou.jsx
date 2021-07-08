import { useState } from "react";
import { ForumSuggestContainer as Container } from "./Forum.styled";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { useHistory } from "react-router-dom";
const ForumSuggestYou = () => {
  const [suggests] = useState([
    { title: "1000 سکه بخر و 500 سکه جایزه بگیر", url: "/store/coin/500" },
    {
      title: "پکیج طلای سکه بخر و یک پکیج الماس نقره ای هدیه بگیر",
      url: "/store/coin/gold",
    },
  ]);
  const history = useHistory();
  return (
    <Container>
      <div className="title">پیشنهاد ویژه شما</div>
      {suggests?.map((item) => (
        <div
          key={~~(Math.random() * 9999999)}
          onClick={() => history.push(`${item?.url}`)}
          className="item special"
        >
          {/* <div className="dashedLine"></div> */}
          <div className="itemTitle">{item?.title}</div>
          {item?.off ? (
            <div className="off">
              <span>{item?.off}</span>
              <NewReleasesIcon />
            </div>
          ) : null}
          {item?.type === "ads" ? (
            <div className="icon">
              <MovieCreationIcon />
            </div>
          ) : item?.type === "reffer" ? (
            <div className="icon">
              <MonetizationOnIcon />
            </div>
          ) : null}
        </div>
      ))}
    </Container>
  );
};

export default ForumSuggestYou;
