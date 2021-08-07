import { Fragment, useState } from "react";
import persianNumber from "../../utils/persianNumber";
import { AuctionUsersContainer as Container } from "./AuctionItem.styled";
import { FireFilled, LogoutOutlined } from "@ant-design/icons";
import useDelete from "../../hooks/useDelete";

const AuctionUsers = ({ item, setItem = () => {} }) => {
  const [userid, setUserId] = useState("");
  const [openRemove, setOpenRemove] = useState(false);

  const handleRemoveUser = () => {
    let users = [];
    try {
      users = item.users.filter((user) => user.userId !== userid);
      users = users.sort((a, b) => a.lastPrice - b.lastPrice);
      users = users.map((user) => {
        user.ultimatum = false;
        return user;
      });
      users[users.length - 1].ultimatum = true;
    } catch (e) {}
    users = users?.reverse();
    setItem((prev) => ({ ...prev, users }));
    setUserId("");
    setOpenRemove(false);
  };
  const detectDissatisfiedPeople = (num) => {
    const arr = Array(3);
    for (let i = 0; i < arr.length; i++) {
      if (i <= num - 1) {
        arr[i] = true;
      } else arr[i] = false;
    }
    return arr;
  };
  useDelete(openRemove, setOpenRemove, handleRemoveUser, {
    title: "حذف کاربر",
    text: "آیا کاربر از مزایده حذف شود",
  });
  const handleRemove = (uid) => {
    setUserId(uid);
    setOpenRemove(true);
  };
  if (item?.users?.length === 0)
    return (
      <Container>
        <div className="userNotFound">درحال حاظر شرکت کننده ای وجود ندارد.</div>
      </Container>
    );
  return (
    <Container>
      {item?.users
        ?.sort((a, b) => a.lastPrice - b.lastPrice)
        .reverse()
        .map((user) => (
          <div className="user">
            <img src={user?.avatar} alt="" />
            <div className="username">{user?.username}</div>
            <div className="dissatisfiedPeople">
              {detectDissatisfiedPeople(user?.dissatisfiedPeople).map(
                (dissatisfiedPeople) => (
                  <Fragment>
                    {dissatisfiedPeople === true ? (
                      <div className="filled"></div>
                    ) : (
                      <div className="outlined"></div>
                    )}
                  </Fragment>
                )
              )}
            </div>
            <div className="offer">
              <span>پیشنهاد :</span>
              <span>{persianNumber(user?.lastPrice)} تومان</span>
            </div>
            <div className="lastPriceUser">
              {user?.ultimatum ? (
                <div
                  className=""
                  style={{ color: "#673ab7", cursor: "default" }}
                >
                  <FireFilled />
                </div>
              ) : null}
              {item?.isAdmin ? (
                <div
                  className=""
                  style={{ color: "#888888" }}
                  onClick={() => handleRemove(user?.userId)}
                >
                  <LogoutOutlined />
                </div>
              ) : null}
            </div>
          </div>
        ))}
    </Container>
  );
};

export default AuctionUsers;
