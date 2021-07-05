import { Container } from "./BottomNavigation.styled";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import SettingsIcon from "@material-ui/icons/Settings";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useState } from "react";
const BottomNavigation = () => {
  const [label] = useState(true);
  return (
    <Container>
      <div className="">
        <div className="item">
          <div className="icon">
            <HomeIcon />
          </div>
          {label ? <div className="label">اصلی</div> : null}
        </div>
        <div className="item">
          <div className="icon">
            <AllInboxIcon />
          </div>
          {label ? <div className="label">پیگیری</div> : null}
        </div>
        <div className="item centered">
          <div className="icon">
            <StoreIcon />
          </div>
          {/* {label ? <div className="label">فروشگاه</div> : null} */}
        </div>
        <div className="item" style={{ cursor: "unset" }}></div>
        <div className="item">
          <div className="icon" style={{ color: "#ff4c4c" }}>
            <WhatshotIcon />
          </div>
          {label ? <div className="label">سفارش</div> : null}
        </div>
        <div className="item">
          <div className="icon">
            <SettingsIcon />
          </div>
          {label ? <div className="label">تنظیمات</div> : null}
        </div>
      </div>
    </Container>
  );
};

export default BottomNavigation;
