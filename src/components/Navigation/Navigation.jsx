import { Container } from "./Navigation.styled";
import { Menu } from "antd";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useEffect, useRef, useState } from "react";
import Coin from "../Coin/Coin";
import CoinIconLarge from "../../assets/Icons/CoinIconLarge";
import useDevice from "../../hooks/useDevice";
import { useHistory } from "react-router-dom";
import Gem from "../../assets/images/icons8-jewel-48.png";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import GavelIcon from "@material-ui/icons/Gavel";
import WorkIcon from "@material-ui/icons/Work";
import InboxIcon from "@material-ui/icons/Inbox";
import {
  PercentageOutlined,
  MessageOutlined,
  ShakeOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Navigation = () => {
  const menuRef = useRef();
  const [openMenu, setOpenMenu] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let timeout;
    if (!openMenu) {
      timeout = setTimeout(() => {
        setVisible(false);
      }, 1000);
    } else {
      timeout = setTimeout(() => {
        setVisible(true);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [openMenu]);
  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const history = useHistory();
  const [data] = useState([
    {
      title: "پیغام ها",
      Icon: MessageOutlined,
      url: "/messages",
      type: "messages",
      token: ~~(Math.random() * 9999999),
      unread: 88,
    },
    {
      title: "قرعه کشی",
      Icon: ShakeOutlined,
      url: "/lottery",
      type: "lottery",
      token: ~~(Math.random() * 9999999),
      unread: false,
    },
    {
      title: "سفارشات",
      Icon: InboxIcon,
      url: "/user-order",
      type: "order",
      token: ~~(Math.random() * 9999999),
      unread: false,
    },
    {
      title: "فروشگاه",
      Icon: StoreFrontIcon,
      url: "/store",
      type: "store",
      token: ~~(Math.random() * 9999999),
      unread: false,
    },
    {
      title: "تبدیل سکه",
      Icon: CompareArrowsIcon,
      url: "/convert",
      type: "convert",
      token: ~~(Math.random() * 9999999),
      unread: false,
    },
    {
      title: "انتقال سکه",
      Icon: TransferWithinAStationIcon,
      url: "/transfer",
      type: "transfer",
      token: ~~(Math.random() * 9999999),
      unread: false,
    },
    {
      title: "برترین افراد",
      Icon: AccessibilityIcon,
      url: "/best",
      type: "best",
      token: ~~(Math.random() * 9999999),
      unread: false,
    },
    {
      title: "حراج و مزایده دارایی ها",
      Icon: GavelIcon,
      url: "/auction",
      type: "auction",
      token: ~~(Math.random() * 9999999),
      unread: false,
    },
    {
      title: "کسب و کار شما",
      Icon: WorkIcon,
      url: "/work",
      type: "work",
      token: ~~(Math.random() * 9999999),
      unread: false,
    },
    {
      title: "کد تخفیف",
      Icon: PercentageOutlined,
      svg: true,
      url: "/discount-code",
      type: "discountCode",
      token: ~~(Math.random() * 9999999),
      unread: false,
    },
    {
      title: "ارتباط با پشتیبانی",
      Icon: PersonOutlineIcon,
      url: "/contact",
      type: "contact",
      token: ~~(Math.random() * 9999999),
      unread: false,
    },
  ]);
  const [unread] = useState(true);
  return (
    <Container className="navContainer">
      {unread ? <div className="unread"></div> : null}
      {openMenu ? <div className="blur" onClick={handleOpenMenu}></div> : null}
      <div
        onClick={() => history.push(`/profile/mmdzov`)}
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "5px",
          cursor: "pointer",
        }}
      >
        <img
          src="https://www.talab.org/wp-content/uploads/2018/04/692060199-talab-org.jpg"
          style={{ height: "40px", width: "40px", borderRadius: "100px" }}
          alt=""
        />
        {/* <div className="username">mmdzov</div> */}
      </div>
      <div className="coinContainer">
        <div className="coinCount" style={{ marginBottom: "-4px" }}>
          1235353
        </div>
        <Coin />
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{ marginTop: "3px", fontSize: ".8rem", color: "#565656" }}
          >
            423
          </span>
          <img
            src={Gem}
            alt=""
            style={{
              width: "20px",
              height: "20px",
              transform: "rotate(45deg)",
              marginTop: "-5px",
              marginLeft: "4px",
            }}
          />
        </div>
        {/* {!mobile ? ( */}
        <div className="menuicon" onClick={handleOpenMenu}>
          <MenuIcon />
        </div>
        {/* ) : null} */}
      </div>
      <Menu
        ref={menuRef}
        style={{
          width: 256,
          position: "fixed",
          right: openMenu ? "0" : "-100%",
          transition: "all .4s ease-in-out",
          top: 0,
          height: "100%",
          // display: visible ? "flex" : "none",
          overflowY: "auto",
          overflowX: "hidden",
          flexDirection: "column",
        }}
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <div className="menuHeader">
          <div className="menuHeaderTop">
            <div className="">منو</div>
            <div
              className=""
              style={{ cursor: "pointer" }}
              onClick={handleOpenMenu}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="" style={{ width: "fit-content", marginTop: "10px" }}>
            <CoinIconLarge />
          </div>
        </div>
        {data.map((item) => (
          <Menu.Item
            className="item"
            // style={{ background: handleBackground(item?.type) }}
            key={item?.token}
            onClick={() => history.push(item?.url)}
          >
            <div className="itemContainer">
              {item?.unread ? (
                <div className="itemUnread">{item?.unread}</div>
              ) : null}
              <div className="icon">
                <item.Icon />
                {/* {item?.svg ? <img src={item?.Icon} className="svgVector" alt="" /> : <item.Icon />} */}
              </div>
              <div className="itemTitle">{item?.title}</div>
            </div>
          </Menu.Item>
        ))}
      </Menu>
    </Container>
  );
};

export default Navigation;
