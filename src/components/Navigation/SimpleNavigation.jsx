import { SimpleNavContainer as Container } from "./Navigation.styled";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const SimpleNavigation = () => {
  const history = useHistory();
  const { token } = useParams();
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname;
    if (path.includes("setting")) setTitle("تنظیمات");
    else if (path.includes("score")) setTitle("تابلوی امتیازات");
    else if (path.includes("luckywheel")) setTitle("گردونه شانس");
    else if (path.includes("convert")) setTitle("تبدیل");
    else if (path.includes("transfer")) setTitle("انتقال سکه");
    else if (path.includes("best")) setTitle("برترین افراد");
    else if (path.includes("order") && token) setTitle(`سفارشات شما`);
    else if (path.includes("order") && path.includes("new"))
      setTitle("سفارش جدید");
    else if (path.includes("order") && path.includes("special"))
      setTitle("سفارش ویژه");
    else if (path.includes("order")) setTitle("سفارش");
  }, [pathname]);
  return (
    <Container className="navContainer">
      <div
        className="icon"
        style={{ cursor: "pointer" }}
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </div>
      <div className="title">{title}</div>
    </Container>
  );
};

export default SimpleNavigation;
