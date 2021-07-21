import { useEffect, useState } from "react";
import { Container } from "./Home.styled";
import { useDispatch } from "react-redux";
import { combineHomeData, getUser } from "../../store/actions/userAction";
import Story from "../../components/Home/Story";
import MainToolbar from "../../components/MainToolbar/MainToolbar";
import List from "../../components/Home/List";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(combineHomeData());
    // dispatch(getUser());
  }, []);
  return (
    <Container className="container">
      <Story />
      <MainToolbar />
      <List />
    </Container>
  );
};

export default Home;
