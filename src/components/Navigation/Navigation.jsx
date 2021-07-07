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
  const mobile = useDevice();
  return (
    <Container className="navContainer">
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
        <div className="username">mmdzov</div>
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
        {!mobile ? (
          <div className="menuicon" onClick={handleOpenMenu}>
            <MenuIcon />
          </div>
        ) : null}
      </div>
      <Menu
        ref={menuRef}
        style={{
          width: 256,
          position: "fixed",
          right: openMenu ? "0" : "-1000%",
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
          <div className="" style={{ width: "fit-content", marginTop: "20px" }}>
            <CoinIconLarge />
          </div>
        </div>
        <Menu.Item key="1">اصلی</Menu.Item>
      </Menu>
    </Container>
  );
};

export default Navigation;
