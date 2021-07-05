import styled from "styled-components";
import CoinIcon from "../../assets/Icons/CoinIcon";

const Coin = () => {
  return (
    <Container className="" style={{ marginRight: "5px" }}>
      <CoinIcon />
    </Container>
  );
};

const Container = styled.div``;

export default Coin;
