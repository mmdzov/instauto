import styled from "styled-components";

export const DiscountCodeInfoContainer = styled.div`
  & .ant-alert {
    border-radius: 5px;
  }
  & .informing {
    margin-top: 10px;
    & > .switchContainer {
      direction: rtl;
      display: flex;
      justify-content: space-between;
      height: 40px;
      align-items: center;
      padding: 0 10px;
      & span {
        width: 100%;
        height: 100%;
        line-height: 40px;
        cursor: pointer;
      }
    }
  }
`;

export const DiscountCodeFormContainer = styled.form`
  display: grid;
  margin: 10px 0px;
  margin-bottom: 20px;
  grid-template-columns: 1fr auto;
  direction: rtl;
  grid-gap: 5px;
  & input,
  button {
    height: 40px;
    border-radius: 5px;
  }
  & button {
    direction: ltr;
  }
  & .ant-btn-loading-icon {
    margin-left: -10px;
    margin-right: 10px;
  }
`;
