import { SimpleNavContainer as Container } from "./Navigation.styled";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const SimpleNavigation = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname;
    if (path.includes("setting")) setTitle("تنظیمات");
    else if (path.includes("score")) setTitle("تابلوی امتیازات");
    else if (path.includes("luckywheel")) setTitle("گردونه شانس");
    else if (path.includes("convert")) setTitle("تبدیل");
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
