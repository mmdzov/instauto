import styled from "styled-components";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import Navigation from "../components/Navigation/Navigation";
import useDevice from "../hooks/useDevice";

const MainLayout = ({ children }) => {
  const mobile = useDevice();
  return (
    <Container>
      <Navigation />
      {children}
      {mobile ? <BottomNavigation /> : null}
    </Container>
  );
};

const Container = styled.div``;

export default MainLayout;
