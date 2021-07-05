import { Container } from "./List.styled";

const List = ({ items = [], mode = "" }) => {
  return (
    <Container>
      {items?.map((item) => (
        <div className="item"></div>
      ))}
    </Container>
  );
};

export default List;
