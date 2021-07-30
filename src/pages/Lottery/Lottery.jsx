import { useState } from "react";
import styled from "styled-components";
import LotteryList from "../../components/Lottery/LotteryList";
import LotteryMode from "../../components/Lottery/LotteryMode";

const Lottery = () => {
  return (
    <Container className="container">
      {/* <LotteryMode mode={mode} setMode={setMode} /> */}
      <LotteryList />
    </Container>
  );
};

const Container = styled.div``;

export default Lottery;
