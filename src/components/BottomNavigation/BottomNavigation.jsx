import { Container } from "./BottomNavigation.styled";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import SettingsIcon from "@material-ui/icons/Settings";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import PublicIcon from "@material-ui/icons/Public";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import { CoffeeOutlined } from "@ant-design/icons";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

const BottomNavigation = () => {
  const [label] = useState(true);
  const [list] = useState([
    { label: "خانه", Icon: HomeOutlinedIcon, url: "/", centered: false },
    {
      label: "کاوشگری",
      Icon: ExploreOutlinedIcon,
      url: `/explore`,
      centered: false,
    },

    { label: "", Icon: AddIcon, url: "/store", centered: true },
    { label: "", Icon: null, url: "", centered: false },
    {
      label: "تالار",
      Icon: CoffeeOutlined,
      url: `/forum`,
      centered: false,
    },
    {
      label: "تنظیمات",
      Icon: SettingsOutlinedIcon,
      url: "/setting",
      centered: false,
    },
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
            {item?.Icon ? (
              <div
                className="icon"
                style={{ color: item?.color ? item?.color : "" }}
              >
                <item.Icon />
              </div>
            ) : null}
            {label ? <div className="label">{item?.label}</div> : null}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BottomNavigation;
