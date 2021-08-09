import styled from "styled-components";
import StoreAccounts from "../../components/Store/StoreAccounts";
import StorePlans from "../../components/Store/StorePlans";
import StoreServices from "../../components/Store/StoreServices";

const Store = () => {
  return (
    <Container className="container">
      <StorePlans />
      <StoreAccounts />
      <StoreServices />
    </Container>
  );
};
const Container = styled.div`
  /* direction: rtl; */
  & .title {
    height: 50px;
    align-items: center;
    display: flex;
    font-size: 1.2rem;
    padding: 0 15px;
  }
`;
export default Store;
