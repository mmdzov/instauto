import { Container } from "./BottomNavigation.styled";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import SettingsIcon from "@material-ui/icons/Settings";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const BottomNavigation = () => {
  const [label] = useState(true);
  const [list] = useState([
    { label: "اصلی", Icon: HomeIcon, url: "/", centered: false },
    {
      label: "پیگیری",
      Icon: AllInboxIcon,
      url: `/order/mmdzov`,
      centered: false,
    },
    { label: "", Icon: StoreIcon, url: "/store", centered: true },
    { label: "", Icon: StoreIcon, url: "", centered: false },
    {
      label: "سفارش",
      Icon: WhatshotIcon,
      url: "/order",
      centered: false,
      color: "#ff4c4c",
    },
    { label: "تنظیمات", Icon: SettingsIcon, url: "/setting", centered: false },
  ]);
  const history = useHistory();
  const handleGo = (path) => {
    if (path) {
      history.push(path);
    }
  };
  return (
    <Container>
      <div className="bottomNavContainer">
        {list?.map((item) => (
          <div
            className={`item ${item?.centered ? "centered" : ""}`}
            key={item?.url}
            onClick={() => handleGo(item?.url)}
          >
            <div
              className="icon"
              style={{ color: item?.color ? item?.color : "" }}
            >
              <item.Icon />
            </div>
            {label ? <div className="label">{item?.label}</div> : null}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BottomNavigation;
