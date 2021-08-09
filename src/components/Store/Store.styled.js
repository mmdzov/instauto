import styled from "styled-components";

export const StorePlansContainer = styled.div`
  direction: rtl;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  & .description {
    padding: 0 20px;
    font-size: 0.8rem;
    margin-bottom: 10px;
    color: #757575;
  }
  & .item {
    width: 170px;
    height: 55px;
    border-radius: 5px;
    border: 5px solid transparent;
    &:first-of-type {
      width: 180px;
      border-left: 10px solid transparent;
    }
    &:last-of-type {
      width: 185px;
      border-right: 10px solid transparent;
    }
    & > div {
      padding: 12px 10px;
      background: #fbfbfb;
      border: 1px solid #eee;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  & .optionContainer {
    padding: 0 15px;
    & .optionTitle {
      /* height: 35px; */
      display: flex;
      align-items: center;
      flex-direction: column;
      /* font-size: 0.9rem; */
      /* font-weight: bold; */
    }
    & .options {
      font-size: 0.8rem;
      line-height: 25px;
      padding: 0 7px;
      margin-top: 10px;
    }
    & .option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    & svg {
      color: #4caf50;
    }
  }
`;

export const StoreAccountsContainer = styled.div`
  direction: rtl;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  & .description {
    padding: 0 20px;
    font-size: 0.8rem;
    margin-bottom: 10px;
    color: #757575;
  }
  & .item {
    width: 90%;
    margin: 0 auto;
    padding: 0 10px;
    height: 45px;
    display: flex;
    align-items: center;
    /* border: 1px solid #eee; */
    border-radius: 5px;
    /* background: #bf4e4e; */
    font-size: 0.8rem;
    color: white;
    margin-bottom: 10px;
  }
`;

export const StoreServicesContainer = styled.div`
  direction: rtl;
  padding-bottom: 10px;
  & .item {
    display: flex;
    justify-content: space-between;
    direction: rtl;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    padding: 0 10px;
    height: 45px;
    border: 1px solid #eee;
    border-radius: 5px;
    /* background: ; */
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
`;
