import { AuctionHeader as Container } from "./AuctionItem.styled";
import {
  ExclamationCircleOutlined,
  ShareAltOutlined,
  ExportOutlined,
  AlignCenterOutlined,
  FontSizeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Statistic } from "antd";
import persianNumber from "../../utils/persianNumber";
import { Fragment, useEffect, useState } from "react";
import Report from "../Report/Report";
import { useHistory } from "react-router-dom";
import Share from "../Share/Share";
import AuctionSlider from "./AuctionSlider";
const { Countdown } = Statistic;

const AuctionHeader = ({ item, setItem = () => {}, onEnd = () => {} }) => {
  const [expire, setExpire] = useState("");
  const handleExpired = () => {
    item.status = "closed";
    item.isFinish = true;
    item.isStarted = false;
    setItem(item);
    onEnd();
  };
  const highestBid = () => {
    const getHighestBid = item?.users?.sort(
      (a, b) => a.lastPrice - b?.lastPrice
    );
    return getHighestBid.slice(-1)[0];
  };
  useEffect(() => {
    if (item?.status === "closed") {
      setExpire(Date.now());
    } else {
      setExpire(Date.now() + item?.expire);
    }
  }, [item]);
  const [openReport, setOpenReport] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const handleSubmit = (item) => {
    console.log(item);
  };
  const history = useHistory();
  const handleBack = () => {
    history.replace("/auction");
  };
  return (
    <Container>
      <Report
        open={openReport}
        onSubmit={handleSubmit}
        setOpen={setOpenReport}
        title="گزارش مزایده"
      />
      <div className="iconsContainer">
        <div className="icons" style={{ direction: "ltr" }}>
          <ExportOutlined onClick={handleBack} />
          <ExclamationCircleOutlined onClick={() => setOpenReport(true)} />
          <ShareAltOutlined onClick={() => setOpenShare((prev) => !prev)} />
        </div>
        <Share
          url={window.location.href}
          open={openShare}
          setOpen={setOpenShare}
        />
        {/* {item?.isAdmin ? (
          <div className="icons">
            <SettingOutlined style={{ fontSize: "1.5rem", color: "#9e9e9e" }} />
          </div>
        ) : null} */}
      </div>
      <div className="">
        <div className="avatar">
          <img src={item?.image} alt="" />
          <div className={`status ${item?.status}`} />
        </div>
        <div className="info">
          <div className="">
            <FontSizeOutlined />
            <div className="title">{item?.title}</div>
          </div>
          <div className="">
            <AlignCenterOutlined />
            <div className="title">{item?.text}</div>
          </div>
        </div>
      </div>
      <AuctionSlider slides={item?.slider} />
      <div className="lastOffer">
        <div className="">
          <span>بالاترین پیشنهاد :</span>
          <div className="highestBid">
            {item?.users?.some((user) => user?.ultimatum === true) ? (
              <Fragment>
                <img src={highestBid()?.avatar} alt="" />
                <div className="lastPrice">
                  {persianNumber(highestBid()?.lastPrice)} تومان
                </div>
              </Fragment>
            ) : (
              <Fragment>بدون پیشنهاد</Fragment>
            )}
          </div>
        </div>
        <div className="">
          <div className="">پایان مزایده :</div>
          {!item?.isStarted && !item?.isFinish ? (
            <span>مزایده هنوز آغاز نشده.</span>
          ) : (
            <Countdown value={expire} onFinish={() => handleExpired()} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default AuctionHeader;
