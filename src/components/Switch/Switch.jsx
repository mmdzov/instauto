import styled from "styled-components";

const Switch = ({
  afterChange = () => {},
  setSwitch = () => {},
  switchValue,
  title1 = "",
  title2 = "",
}) => {
  const handleChangeSwitch = () => {
    setSwitch((prev) => !prev);
    afterChange();
  };
  return (
    <Container>
      <div className={switchValue ? "active" : ""} onClick={handleChangeSwitch}>
        {title1}
      </div>
      <div
        className={!switchValue ? "active" : ""}
        onClick={handleChangeSwitch}
      >
        {title2}
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  & div {
    padding: 5px 10px;
    margin: 0 5px;
    font-size: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 100px;
    cursor: pointer;
    &.active {
      background: #2196f3;
      color: white;
    }
  }
`;
export default Switch;
