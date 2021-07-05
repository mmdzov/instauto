import { Container } from "./Navigation.styled";
import { Menu } from "antd";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useEffect, useRef, useState } from "react";
import Coin from "../Coin/Coin";
import CoinIconLarge from "../../assets/Icons/CoinIconLarge";
import useDevice from "../../hooks/useDevice";
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
  const mobile = useDevice();
  return (
    <Container className="">
      <div className="username">mmdzov</div>
      <div className="coinContainer">
        <div className="coinCount">1235353</div>
        <Coin />
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
