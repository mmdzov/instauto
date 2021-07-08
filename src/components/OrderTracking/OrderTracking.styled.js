import styled from "styled-components";

export const OrderTrackingListContainer = styled.div`
  & .item {
    padding: 5px 10px;
    direction: rtl;
    box-shadow: 0px 4px 10px -10px black;
    margin: 10px 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    & .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
    }
    & > .subItem {
      height: 30px;
      display: flex;
      align-items: center;
      & > span {
        margin-right: 10px;
      }
    }
    & .seeMore {
      font-size: 0.7rem;
      background: #21a7f5;
      padding: 5px 14px;
      color: white;
      border-radius: 100px;
      font-weight: bold;
      margin-bottom: 5px;
      cursor: pointer;
    }
  }
  .addOrderBox {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    height: 50px;
    align-items: center;
    background: #e91e63;
    color: white;
    padding: 0 10px;
    margin: 0 10px;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 0.8rem;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const OrderNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  direction: rtl;
  height: 100%;
  text-align: center;
  flex-direction: column;
  .addOrderButton {
    margin: 10px 0px;
    padding: 5px 10px;
    background: #03a9f4;
    color: white;
    border-radius: 100px;
    cursor: pointer;
  }
`;
