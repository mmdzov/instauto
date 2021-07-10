import Tabs from "../../components/Best/Tabs";
import { useState } from "react";
import Avatar from "../../assets/images/avatar.jpg";
const Best = () => {
  const [tabs] = useState([
    {
      title: "سکه",
      list: [
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
      ],
    },
    {
      title: "الماس",
      list: [],
    },
    {
      title: "سفارشات",
      list: [
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
      ],
    },
    {
      title: "خرید ها",
      list: [
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
        { username: "mmdzov", image: Avatar, count: 231313 },
      ],
    },
  ]);
  return (
    <div
      className="container"
      style={{
        marginTop: 46,
        // height: 474
      }}
    >
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Best;
