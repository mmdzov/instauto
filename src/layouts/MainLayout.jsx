import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import MainToolbar from "../components/MainToolbar/MainToolbar";
import Navigation from "../components/Navigation/Navigation";
import SimpleNavigation from "../components/Navigation/SimpleNavigation";
import useDevice from "../hooks/useDevice";

const MainLayout = ({ main = false, topNav = true, children }) => {
  const mobile = useDevice(handleSetHeight);
  const { pathname } = useLocation();
  const [contentHeight, setContentHeight] = useState(0);
  function handleSetHeight() {
    const c = document.getElementsByClassName("container")[0];
    const containerToolbarHeight = document
      .getElementsByClassName("containerToolbar")[0]
      ?.getBoundingClientRect()?.height;
    const nav = document
      .getElementsByClassName("navContainer")[0]
      ?.getBoundingClientRect()?.height;
    const antTabNav = document
      .getElementsByClassName("ant-tabs-nav")[0]
      ?.getBoundingClientRect()?.height;
    const bottomNav = document
      .getElementsByClassName("bottomNavContainer")[0]
      ?.getBoundingClientRect()?.height;
    let contentHeight = window.innerHeight - nav - bottomNav;
    if (antTabNav) {
      contentHeight -= antTabNav;
    }
    c?.classList?.add("normalHeight");
    if (pathname?.split("/").every((item) => item === "")) {
      contentHeight -= containerToolbarHeight;
    }
    setContentHeight(contentHeight);
  }
  useEffect(() => {
    handleSetHeight();
  }, [mobile, pathname]);
  return (
    <Container mobile={mobile} h={contentHeight}>
      {topNav ? <Navigation /> : <SimpleNavigation />}
      {main ? <MainToolbar /> : null}
      {children}
      {mobile ? <BottomNavigation /> : null}
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: ${({ mobile }) => (mobile ? "100px" : "0px")};

  & .normalHeight {
    height: ${({ h }) => (h ? h + "px" : "auto")};
  }
`;

export default MainLayout;
