import { useState } from "react";
import AuctionList from "../../components/Auction/AuctionList";
import Search from "../../components/Search/Search";
import Avatar from "../../assets/images/avatar.jpg";
const Auction = () => {
  const [list, setList] = useState([
    {
      title: "500 سکه به حراج گذاشته شد بدو توی حراجی شرکت کن تا از دستت نرفته اگه از دستت بره یعنی دیگه از دستت رفته ",
      image: Avatar,
      status: "open",
      expire: Date.now() + 10 * 1000,
      lastPrice: "30000",
      token: "3425twrsdfsdf3dw",
      users: [
        { username: "mmdzov", avatar: Avatar },
        { username: "mmdzov", avatar: Avatar },
        { username: "mmdzov", avatar: Avatar },
      ],
    },
    {
      title: "فروش پیج اینستاگرام 50k",
      image: Avatar,
      status: "open",
      lastPrice: "30000",
      expire: Date.now() + 3 * 60 * 1000,
      token: "3425twdfsvxrsdfsdf3dw",
      users: [
        { username: "mmdzov", avatar: Avatar },
        { username: "mmdzov", avatar: Avatar },
        { username: "mmdzov", avatar: Avatar },
        { username: "mmdzov", avatar: Avatar },
      ],
    },
    {
      title: "قروش پیج اینستاگرام 100k",
      image: Avatar,
      status: "open",
      lastPrice: "30000",
      expire: Date.now() + 1 * 60 * 1000,
      token: "3425fsdvxcrsdfsdf3dw",
      users: [
        { username: "mmdzov", avatar: Avatar },
        { username: "mmdzov", avatar: Avatar },
        { username: "mmdzov", avatar: Avatar },
        { username: "mmdzov", avatar: Avatar },
      ],
    },
  ]);
  return (
    <div className="container">
      <Search />
      <AuctionList list={list} setList={setList} />
    </div>
  );
};

export default Auction;
