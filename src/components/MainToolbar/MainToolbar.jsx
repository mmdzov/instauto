import { useState } from "react";
import { Container } from "./MainToolbar.styled";
import { useHistory } from "react-router-dom";
import Slider from "../Slider/Slider";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CameraOutlinedIcon from "@material-ui/icons/CameraOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AppsIcon from "@material-ui/icons/Apps";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
const MainToolbar = () => {
  const [list] = useState([
    { name: "همه", url: "/", Icon: AppsIcon, token: "fspdofk43sd" },
    {
      name: "لایک",
      url: "/like-post",
      Icon: FavoriteBorderIcon,
      token: "fspdodsfk43sd",
    },
    {
      name: "کامنت",
      url: "/comment-post",
      Icon: ChatBubbleOutlineIcon,
      token: "fspdofk4354",
    },
    {
      name: "لایک کامنت",
      url: "/comment-like",
      Icon: ThumbUpAltOutlinedIcon,
      token: "fdsdofk43sd",
    },
    // { name: "استوری", url: "/story", Icon: CameraOutlinedIcon },
    // { name: "ویو", url: "/view", Icon: VisibilityIcon },
  ]);
  const history = useHistory();

  return (
    <Container className="containerToolbar">
      <Slider align="left">
        {list?.map((item) => (
          <div
            className="item"
            key={item?.url}
            onClick={() => history.push(item?.url)}
          >
            <div className="title">{item?.name}</div>
            <span>
              <item.Icon />
            </span>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default MainToolbar;
