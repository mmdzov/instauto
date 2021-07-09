import { useState } from "react";
import SettingList from "../../components/Setting/SettingList";
import SettingTop from "../../components/Setting/SettingTop";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

const Setting = () => {
  const [data] = useState([
    {
      title: "",
      type: "item",
      item: "آیدی عددی شما",
      url: "",
      muted: "124355753",
    },
    {
      title: "",
      type: "item",
      item: "حالت شب",
      url: "",
      Icon: null,
      switch: true,
      event: "nightmode",
      mode: "day",
      token: "nightmode",
    },
    {
      title: "",
      type: "item",
      item: "تأیید دو مرحله",
      url: "/two-verification",
      Icon: LockOutlinedIcon,
      label: "ویژه اینستاتو",
    },
    {
      title: "پسند ها",
      Icon: StarOutlineIcon,
      type: "list",
      list: [
        {
          title: "لایک ها",
          Icon: FavoriteBorderOutlinedIcon,
          url: "/setting/likes",
        },
        {
          title: "کامنت ها",
          Icon: ChatBubbleOutlineOutlinedIcon,
          url: "/setting/comments",
        },
        {
          title: "بازدید ویدیو ها",
          Icon: VisibilityOutlinedIcon,
          url: "/setting/postViews",
        },
        {
          title: "لایک کامنت ها",
          Icon: ThumbUpOutlinedIcon,
          url: "/setting/commentLikes",
        },
      ],
      url: null,
      item: "",
    },
    {
      title: "",
      type: "item",
      item: "راهنمای اینستاتو",
      url: "/giude",
      Icon: MenuBookOutlinedIcon,
    },
    {
      title: "",
      type: "item",
      item: "قوانین و ضوابط",
      url: "/terms",
      Icon: AssignmentOutlinedIcon,
    },
    {
      title: "",
      type: "item",
      item: "خروج از حساب",
      Icon: ExitToAppOutlinedIcon,
      event: "leaveAccount",
      token: "leaveAccount",
    },
  ]);
  return (
    <div className="container">
      <SettingTop />
      <SettingList data={data} />
    </div>
  );
};

export default Setting;
