import { useState } from "react";
import { ForumSuggestContainer as Container } from "./Forum.styled";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Share from "../Share/Share";

const ForumSuggest = () => {
  const [suggests] = useState([
    { title: "تخفیف ویژه سفارشات", off: "90%", type: "order" },
    { title: "تخفیف خرید سکه تا پایان ماه", off: "34%", type: "store" },
    {
      title: "دوستاتو دعوت کن 500 سکه هدیه بگیر",
      coin: "500",
      type: "reffer",
    },
    {
      title: "سکه رایگان",
      coin: "15",
      type: "ads",
    },
  ]);
  const [openRef, setOpenRef] = useState(false);
  const handleClickSuggest = (item) => {
    if (item.type === "reffer") setOpenRef(true);
  };

  return (
    <Container>
      <Share
        open={openRef}
        setOpen={setOpenRef}
        url={window.location.origin + "/login/ref/mmdzov"}
      />
      <div className="title">پیشنهاد ویژه</div>
      {suggests?.map((item) => (
        <div
          key={~~(Math.random() * 9999999)}
          className="item"
          style={{
            background: item?.off
              ? "#ea4747"
              : item?.type === "reffer"
              ? "#009688"
              : item?.type === "ads"
              ? "#673ab7"
              : "#ccc",
          }}
          onClick={() => handleClickSuggest(item)}
        >
          <div className="dashedLine"></div>
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

export default ForumSuggest;
