import styled from "styled-components";

export const Container = styled.div``;
export const ContainerOrderList = styled.div`
  padding: 10px 0px;
  direction: rtl;
  box-shadow: 0px 4px 10px -10px black;
  margin: 10px 10px;
  border: 1px solid #eee;
  border-radius: 5px;
  padding-top: 0px;
  & .title {
    /* height: 33px; */
    /* line-height: 24px; */
    padding: 10px 10px;
    display: flex;
    /* margin: 0 5px; */
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    align-items: center;
  }
  & .item {
    margin: 0px 19px;
    padding: 0px 10px;
    /* border-right: 3px solid #ffa500; */
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    /* border-bottom: 1px solid #eee; */
    &:hover {
      cursor: pointer;
      background: #f3f3f3;
      border-radius: 5px;
    }
  }
  & .more {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    & .moreBackIcon {
      height: 100%;
      line-height: 42px;
      margin-right: -2px;
    }
    & svg {
      font-size: 1.3rem;
    }
  }
`;

export const OrderPlansContainer = styled.div`
  margin: 10px 0px;
  & .item {
    direction: rtl;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    width: 91%;
    border: 1px solid #eee;
    margin: 0 auto;
    border-radius: 5px;
    margin-bottom: 5px;
    font-size: 0.8rem;
    justify-content: space-between;
    cursor: pointer;
    background: #fbfbfb;
  }
  & .more {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    & .moreBackIcon {
      height: 100%;
      line-height: 42px;
      margin-right: -2px;
    }
    & svg {
      font-size: 1.3rem;
    }
  }
`;

export const OrderPlanItemContainer = styled.div`
  & > .title {
    direction: rtl;
    font-size: 1.2rem;
    padding: 0 10px;
    margin: 10px 0px;
    color: #292929;
  }
  & .list {
    padding: 0 10px;
    margin: 5px 0px;
  }
  & .list .item {
    direction: rtl;
    height: 58px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    width: 95%;
    border: 1px solid #eee;
    margin: 0 auto;
    border-radius: 5px;
    margin-bottom: 5px;
    font-size: 0.8rem;
    justify-content: space-between;
    cursor: pointer;
    background: #fbfbfb;
    & .price {
      display: flex;
      flex-direction: column-reverse;
      height: 100%;
      justify-content: space-around;
    }
  }

  & .custom.item {
    margin-bottom: 20px;
    & .rangeslider.rangeslider-horizontal {
      width: 100%;
    }
    & .title {
      height: 40px;
      display: flex;
      align-items: center;
      font-size: 1rem;
    }
    & input {
      width: 50px;
      padding: 0 0px;
      text-align: center;
      margin-left: 10px;
      height: 42px;
    }
    & .inputs {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      align-items: center;
      padding: 0 10px;
    }
  }
`;
