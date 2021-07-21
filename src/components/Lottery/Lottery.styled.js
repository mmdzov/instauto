import styled from "styled-components";

export const LotteryTabContainer = styled.div`
  & form {
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    & > input {
      height: 40px;
      font-size: 0.8rem;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }
  & span.ant-input-affix-wrapper {
    margin: 10px 0px;
    border-radius: 5px;
    & input {
      font-size: 0.8rem;
      padding-top: 2px;
    }
  }

  & .ant-btn.ant-btn-primary {
    border-radius: 5px;
  }
`;

export const LotteryModeContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  top: 0;
  & .btn {
    margin: 9px 0px;
    height: 45px;
    width: 80%;
    max-width: 300px;
    text-align: center;
    line-height: 45px;
    border-radius: 5px;
    color: white;
    font-size: 0.8rem;
    cursor: pointer;
    border: 1px solid transparent;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    border: 1px solid #607d8b;
    /* border-radius: 0; */
    box-shadow: -2px 6px 10px -3px #607d8b;
    background: #607d8b;
    &:hover {
      background: transparent !important;
      color: #607d8b !important;
      border: 1px solid #607d8b;
    }
    &.active {
      background: transparent !important;
      color: #3f51b5;
      transition: all 0.4s ease-in-out;
      border: 1px solid #3f51b5;
      &:hover {
        background: #3f51b5 !important;
        color: white !important;
      }
    }
  }
`;

export const LotteryListContainer = styled.div`
  & .header {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    height: 50px;
    align-items: center;
    padding: 0 5px;
    border-bottom: 1px solid #eee;
    color: #676767;
    /* background: #f9f9f9; */
    /* box-shadow: 0px 6px 19px -21px black inset; */
    cursor: pointer;
    & .title {
      margin-right: 10px;
      font-size: 0.8rem;
    }
    & .plus {
      font-size: 1.5rem;
      margin-top: 8px;
    }
    & .icons {
      display: flex;
      width: 60px;
      margin-left: 10px;
      justify-content: space-between;
    }
  }
  & .list {
    & .item {
      display: flex;
      padding: 11px 10px;
      direction: rtl;
      margin-bottom: 10px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      & img {
        width: 50px;
        height: 50px;
        border-radius: 100px;
      }
      & .middle {
        margin: 0 10px;
      }
      & .title {
        font-size: 1rem;
      }
      & .caption {
        font-size: 0.8rem;
        color: #797979;
        max-height: 40px;
        overflow: hidden;
      }
      & .dates {
        display: grid;
        grid-template-columns: auto auto;
        font-size: 0.7rem;
        margin: 5px 0px;
        & > div {
          display: flex;
          & span {
            margin: 0 4px;
            font-weight: bold;
          }
        }
      }
    }
  }
  & form {
    display: grid;
    justify-content: space-between;
    width: 100%;
    grid-template-columns: auto 1fr;
    grid-gap: 5px;
    direction: rtl;
    align-items: center;
    & > div:first-of-type {
      font-size: 1.2rem;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & > span:last-of-type {
      height: 40px;
    }
    & input {
      height: 40px;
    }
    & .ant-btn.ant-btn-primary.ant-btn-rtl.ant-input-search-button {
      height: 40px;
      font-size: 1.2rem;
      padding-top: 5px;
    }
  }
`;
