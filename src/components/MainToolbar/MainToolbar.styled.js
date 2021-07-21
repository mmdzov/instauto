import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 15px;
  margin-top: 5px;
  padding: 0 10px;
  & .item {
    /* width: 60px; */
    padding: 2px 10px;
    border-radius: 5px;
    margin-left: 8px;
    border: 1px solid #ececec;
    margin-top: 5px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    cursor: pointer;
    box-shadow: 0 4px 10px -5px #ccc;
    & .title {
      white-space: nowrap;
      font-size: 0.8rem;
    }
    & span {
      color: #545454;
      margin-top: -1px;
      margin-left: 5px;
      height: 16px;
      & svg {
        font-size: 1rem;
      }
    }
  }
`;
