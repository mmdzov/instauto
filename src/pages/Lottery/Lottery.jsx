import { useState } from "react";
import styled from "styled-components";
import LotteryList from "../../components/Lottery/LotteryList";
import LotteryMode from "../../components/Lottery/LotteryMode";
import LotteryTabs from "../../components/Lottery/LotteryTabs";

const Lottery = () => {
  const [mode, setMode] = useState("");
  return (
    <Container className="container">
      {/* <LotteryTabs /> */}
      {/* <LotteryMode mode={mode} setMode={setMode} /> */}
      <LotteryList />
    </Container>
  );
};

const Container = styled.div``;

export default Lottery;
