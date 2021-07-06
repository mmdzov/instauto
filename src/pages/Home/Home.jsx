import List from "../../components/List/List";
import { Container } from "./Home.styled";

const Home = () => {
  return (
    <Container className="container">
      <List mode="all" />
    </Container>
  );
};

export default Home;
