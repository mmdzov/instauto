import { Container } from "./List.styled";

const List = ({ items = [], mode = "" }) => {
  return (
    <Container>
      {items?.map((item) => (
        <div className="item" key={~~(Math.random() * 9999999)}></div>
      ))}
    </Container>
  );
};

export default List;
