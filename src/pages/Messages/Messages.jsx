import { Tabs as TabList, Badge } from "antd";
import { useState } from "react";
import { NotificationOutlined, UserOutlined } from "@ant-design/icons";
import Avatar from "../../assets/images/avatar.jpg";
import styled from "styled-components";
import Search from "../../components/Search/Search";
const { TabPane } = TabList;

const Messages = () => {
  const [tabs, setTabs] = useState([
    {
      title: "سیستم",
      type: "system",
      unreadCount: 1,
      list: [
        {
          title: "عضویت شما را بهتون تبریک میگم دوست عزیز",
          image: Avatar,
          from: "System",
          date: "1400/5/3",
          text: "توضیحات پیغام",
          unread: true,
        },
        {
          title: "عضویت شما را بهتون تبریک میگم دوست عزیز",
          image: Avatar,
          from: "System",
          date: "1400/5/3",
          text: "توضیحات پیغام",
          unread: false,
        },
        {
          title: "عضویت شما را بهتون تبریک میگم دوست عزیز",
          image: Avatar,
          from: "System",
          date: "1400/5/3",
          text: "توضیحات پیغام",
          unread: false,
        },
        {
          title: "عضویت شما را بهتون تبریک میگم دوست عزیز",
          image: Avatar,
          from: "System",
          date: "1400/5/3",
          text: "توضیحات پیغام",
          unread: false,
        },
        {
          title: "عضویت شما را بهتون تبریک میگم دوست عزیز",
          image: Avatar,
          from: "System",
          date: "1400/5/3",
          text: "توضیحات پیغام",
          unread: false,
        },
        {
          title: "عضویت شما را بهتون تبریک میگم دوست عزیز",
          image: Avatar,
          from: "System",
          date: "1400/5/3",
          text: "توضیحات پیغام",
          unread: false,
        },
        {
          title: "عضویت شما را بهتون تبریک میگم دوست عزیز",
          image: Avatar,
          from: "System",
          date: "1400/5/3",
          text: "توضیحات پیغام",
          unread: false,
        },
        {
          title: "عضویت شما را بهتون تبریک میگم دوست عزیز",
          image: Avatar,
          from: "System",
          date: "1400/5/3",
          text: "توضیحات پیغام",
          unread: false,
        },
        {
          title: "عضویت شما را بهتون تبریک میگم دوست عزیز",
          image: Avatar,
          from: "System",
          date: "1400/5/3",
          text: "توضیحات پیغام",
          unread: false,
        },
        {
          title: "عضویت شما را بهتون تبریک میگم دوست عزیز",
          image: Avatar,
          from: "System",
          date: "1400/5/3",
          text: "توضیحات پیغام",
          unread: false,
        },
      ],
    },
    {
      title: "کاربران",
      type: "users",
      unreadCount: 12,
      list: [
        {
          title: "سلام داداش داری صدتا سکه بهم قرض بدی احتیاج دارم سلطان",
          image: Avatar,
          from: "hamidretete",
          date: "1400/5/3",
          text: "جبران میکنم داداشم",
          unreadCount: 0,
        },
        {
          title: "سلطان صدتا الماس بده برات یه وام از بانک ملی بگیرم",
          image: Avatar,
          from: "alinaseri",
          date: "1400/5/3",
          text: "توضیحی ندارم ممکنه اینجا خالی باشه ولی چون برای تست لازمه پس میزارم پر بمونه",
          unreadCount: 10000,
        },
      ],
    },
  ]);
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <Container className="container">
      <TabList defaultActiveKey="1" centered onChange={handleChange}>
        {tabs?.map((item) => (
          <TabPane
            tab={
              <span
                style={{
                  display: "flex",
                  fontSize: "1.2rem",
                  alignItems: "center",
                }}
              >
                <Badge
                  dot={item?.unreadCount > 0 ? true : false}
                  style={{ position: "absolute", right: "-6px" }}
                >
                  {item?.type === "system" ? (
                    <NotificationOutlined />
                  ) : item?.type === "users" ? (
                    <UserOutlined />
                  ) : null}
                </Badge>
                <div className="title" style={{ fontSize: ".8rem" }}>
                  {item?.title}
                </div>
              </span>
            }
            key={~~(Math.random() * 999999)}
            className="list"
          >
            <Search />
            {item?.list?.length > 0 ? (
              item?.list?.map((user, index) => (
                <div
                  className={`item ${
                    item?.type.toLowerCase() !== "system"
                      ? user?.unreadCount === 0
                        ? "hasRead"
                        : ""
                      : user?.unread
                      ? "hasRead"
                      : ""
                  }`}
                >
                  <div className="">
                    <img src={user?.image} className="image" alt="" />
                    {item?.type.toLowerCase() !== "system" &&
                    user?.unreadCount > 0 ? (
                      <div className="unread">{user?.unreadCount}</div>
                    ) : null}
                  </div>
                  <div className="">
                    <div className="from">{user?.from}</div>
                    <div className="title">{user?.title}</div>
                    <div className="text">{user?.text}</div>
                  </div>
                  <div className="datetime">{user?.date}</div>
                </div>
              ))
            ) : (
              <div className="emptyList">هنوز پیغامی دریافت نکردید.</div>
            )}
          </TabPane>
        ))}
      </TabList>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 46px;
  & .ant-tabs-nav-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  & .ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab .anticon {
    margin-left: 5px !important;
  }
  & .ant-tabs-tab {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 0 !important;
  }

  & .hasRead {
    background: #fbfbfb;
    & > div {
      opacity: 0.7;
    }
  }

  & .ant-tabs > .ant-tabs-nav,
  .ant-tabs > div > .ant-tabs-nav {
    margin-bottom: 0px !important;
    margin-top: -46px;
    position: fixed;
    width: 100%;
    right: 0;
  }
  & .item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 10px;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 15px;
    cursor: pointer;
    position: relative;
    box-shadow: 0 5px 12px -8px #777777;
  }
  & img {
    width: 45px;
    height: 45px;
    border-radius: 100px;
  }
  & .from {
    font-size: 0.9rem;
    font-weight: bold;
  }
  & .title {
    font-size: 0.8rem;
  }
  & .text {
    padding-bottom: 10px;
    font-size: 0.7rem;
  }
  & .unread {
    margin-top: 15px;
    min-width: 20px;
    height: 20px;
    top: 65px;
    background: #51c155;
    border-radius: 100px;
    text-align: center;
    font-size: 0.7rem;
    line-height: 23px;
    color: white;
  }
  & .datetime {
    position: absolute;
    bottom: 6px;
    font-size: 0.7rem;
    left: 8px;
  }
`;

export default Messages;
