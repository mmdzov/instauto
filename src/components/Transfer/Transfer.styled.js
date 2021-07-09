import styled from "styled-components";

export const TransferHeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 15px;
  & .ant-alert {
    border-radius: 5px;
  }
  & .transferButton {
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
  }
`;

export const TransferFormContainer = styled.form`
  direction: rtl;
  margin: 30px 0px;
  padding: 0 20px;
  display: grid;
  grid-gap: 10px;
  margin-top: 0px;
  & .ant-input {
    border-radius: 5px;
    font-size: 0.8rem;
    height: 35px;
  }
  & .box {
    display: grid;
    grid-template-columns: 18fr auto;
    grid-gap: 10px;
  }
  & .tip {
  }
`;
