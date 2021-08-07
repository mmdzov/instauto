import { AuctionListContainer as Container } from "./Auction.styled";
import { useHistory } from "react-router-dom";
import { ClockCircleOutlined, FireOutlined } from "@ant-design/icons";
import LineEllipsis from "../utilities/LineEllipsis";
import { Avatar, Tooltip, Statistic } from "antd";
const { Countdown } = Statistic;

const AuctionList = ({ list = [], setList = () => {} }) => {
  const handleChangeCountdown = (date, token) => {
    // console.log(date);
    // const int = setInterval(() => {
    //     const lst = [...list]
    //   const index = list.findIndex((item) => item.token === token);
    //   lst[token].expire =
    //   if (~~(Date.now() / 1000) - date === 0) {
    //   } else {
    //   }
    // }, 1000);
  };
  const handleExpired = (token) => {
    const lst = [...list];
    const index = list.findIndex((item) => item.token === token);
    lst[index].status = "closed";
    setList(lst);
  };
  const history = useHistory();
  const handleGoAuction = (token) => {
    history.push(`/auction/${token}`);
  };
  return (
    <Container>
      {list.map((item) => (
        <div className="item" onClick={() => handleGoAuction(item?.token)}>
          <div className="auctionImage">
            <img src={item?.image} alt="" />
            <div className={`status ${item?.status}`} />
          </div>
          <div className="">
            <LineEllipsis text={item?.title} className="title" maxLine="2" />
            <div className="avatars">
              <Avatar.Group
                maxCount={2}
                maxStyle={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                }}
                maxPopoverPlacement="bottom"
              >
                {item?.users?.map((user) => (
                  <Tooltip title={user?.username} placement="top">
                    {user.avatar ? (
                      <Avatar src={user?.avatar} />
                    ) : (
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00",
                        }}
                      >
                        {user?.username.chatAt(0).toUpperString()}
                      </Avatar>
                    )}
                  </Tooltip>
                ))}
              </Avatar.Group>
              {item?.users?.length > 2 ? <div className="layout"></div> : null}
            </div>
          </div>
          <div className="" style={{ display: "flex", alignItems: "flex-end" }}>
            <div className="expire">
              <ClockCircleOutlined />
              <Countdown
                value={item?.expire}
                onFinish={() => handleExpired(item?.token)}
                onChange={(e) => handleChangeCountdown(e, item?.token)}
              />
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default AuctionList;
