import { useEffect, useState } from "react";
import AuctionHeader from "../../components/AuctionItem/AuctionHeader";
import AuctionUsers from "../../components/AuctionItem/AuctionUsers";
import Avatar from "../../assets/images/avatar.jpg";
import AuctionStartModal from "../../components/AuctionItem/AuctionStartModal";
import AuctionOpenModal from "../../components/AuctionItem/AuctiionOpenModal";
import AuctionButton from "../../components/AuctionItem/AuctionButton";
import useDelete from "../../hooks/useDelete";
import AuctionSlider from "../../components/AuctionItem/AuctionSlider";
import Icon from "../../assets/images/avatar1.jpg";
const AuctionItem = () => {
  const [item, setItem] = useState({
    title:
      "500 سکه به حراج گذاشته شد بدو توی حراجی شرکت کن تا از دستت نرفته اگه از دستت بره یعنی دیگه از دستت رفته ",
    image: Avatar,
    text: "قیمت بزار ببینم تایید میکنم",
    status: "waiting",
    expire: "",
    delayPerOffer: 1000 * (60 * 0 + 30),
    isAdmin: true,
    isStarted: false,
    isFinish: false,
    slider: [Avatar, Icon, Avatar, Avatar, Icon, Avatar, Avatar],
    token: "3425twrsdfsdf3dw",
    users: [
      {
        username: "mmdzov",
        avatar: Avatar,
        lastPrice: "30000",
        ultimatum: true,
        userId: 21432465,
        dissatisfiedPeople: 1,
      },
      {
        username: "mmdzov",
        avatar: Avatar,
        lastPrice: "10000",
        ultimatum: false,
        userId: 2436453542,
        dissatisfiedPeople: 2,
      },
      {
        username: "mmdzov",
        avatar: Avatar,
        lastPrice: "100000",
        ultimatum: false,
        userId: 435435764,
        dissatisfiedPeople: 2,
      },
      {
        username: "mmdzov",
        avatar: Avatar,
        lastPrice: "50000",
        ultimatum: false,
        userId: 53452342,
        dissatisfiedPeople: 2,
      },
    ],
  });
  const [openStart, setOpenStart] = useState(false);
  const [openAuction, setOpenAuction] = useState(false);
  const [openCloseAuction, setOpenCloseAuction] = useState(false);
  const pauseAuction = () => {
    setItem((prev) => ({
      ...prev,
      isFinish: true,
      isStarted: false,
      expire: 0,
    }));
  };
  useDelete(openCloseAuction, setOpenCloseAuction, pauseAuction, {
    title: "اتمام فوری مزایده!",
    text: "آیا واقعا میخواهید مزایده زودتر از زمان مشخص شده به اتمام برسد؟",
  });

  return (
    <div className="container" style={{ paddingBottom: "55px" }}>
      <AuctionHeader item={item} onEnd={pauseAuction} setItem={setItem} />
      <AuctionUsers item={item} setItem={setItem} />
      <AuctionStartModal
        setItem={setItem}
        setOpen={setOpenStart}
        open={openStart}
      />
      <AuctionOpenModal
        item={item}
        setItem={setItem}
        setOpen={setOpenAuction}
        open={openAuction}
      />
      <AuctionButton
        item={item}
        onOpen={setOpenAuction}
        onStart={setOpenStart}
        onEnd={setOpenCloseAuction}
      />
    </div>
  );
};

export default AuctionItem;
