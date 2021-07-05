import styled from "styled-components";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import MainToolbar from "../components/MainToolbar/MainToolbar";
import Navigation from "../components/Navigation/Navigation";
import useDevice from "../hooks/useDevice";

const MainLayout = ({ main = false, children }) => {
  const mobile = useDevice();
  return (
    <Container>
      <Navigation />
      {main ? <MainToolbar /> : null}
      {children}
      {mobile ? <BottomNavigation /> : null}
    </Container>
  );
};

const Container = styled.div``;

export default MainLayout;
