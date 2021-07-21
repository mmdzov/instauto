import { LotteryListContainer as Container } from "./Lottery.styled";
import {
  PlusCircleOutlined,
  SearchOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Avatar from "../../assets/images/avatar.jpg";
import { Fragment, useState } from "react";
import { Input } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const { Search } = Input;

const LotteryList = () => {
  const { list } = useSelector(({ lottery }) => lottery);
  const history = useHistory();
  const [enableSearch, setEnableSearch] = useState(false);
  const closeSearch = () => {
    setEnableSearch(false);
    // console.log("closed");
  };
  return (
    <Container className="">
      <div className="header">
        {!enableSearch ? (
          <Fragment>
            <div className="title">همه قرعه کشی ها</div>
            <div className="icons">
              <div
                className="plus"
                style={{ color: "#ccc" }}
                onClick={() => setEnableSearch(true)}
              >
                <SearchOutlined />
              </div>
              <div
                className="plus"
                style={{ color: "#2196f3" }}
                onClick={() => history.push("/lottery/add/1")}
              >
                <PlusCircleOutlined />
              </div>
            </div>
          </Fragment>
        ) : (
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="" onClick={closeSearch}>
              <CloseOutlined />
            </div>
            <Search placeholder="جستجو کنید..." loading={false} enterButton />
          </form>
        )}
      </div>
      <div className="list">
        {list.map((item) => (
          <div className="item">
            <img src={item.image} alt="" />
            <div className="middle">
              <div className="title">{item.title}</div>
              <div className="caption">{item.caption}</div>
              <div className="dates">
                <div className="">
                  تاریخ شروع : <span>{item.startDate}</span>
                </div>
                <div className="">
                  زمان قرعه کشی : <span>{item.expDate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LotteryList;
