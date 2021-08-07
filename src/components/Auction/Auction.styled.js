import styled from "styled-components";

export const AuctionListContainer = styled.div`
  & .ant-avatar-group .ant-avatar {
    margin-right: -6px;
  }
  & .avatars {
    position: relative;
    width: fit-content;
    position: absolute;
    bottom: 0;
  }
  & .title {
    font-size: 0.8rem;
    color: #060606;
  }
  & .layout {
    position: absolute;
    width: 32px;
    height: 32px;
    left: 0px;
    top: 0;
    border-radius: 100px;
    cursor: pointer;
  }
  & .item {
    display: flex;
    direction: rtl;
    width: 95%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 14px;
    box-shadow: 0 5px 10px -10px #717171;
    position: relative;
    min-height: 100px;
  }
  & .auctionImage {
    position: relative;
    height: fit-content;
    margin-left: 11px;
    & img {
      width: 50px;
      height: 50px;
      border-radius: 15px;
    }
    & .status {
      position: absolute;
      top: -5px;
      border: 3px solid white;
      right: -5px;
      width: 15px;
      height: 15px;
      display: flex;
      border-radius: 100px;
      &.open {
        background-color: green;
      }
      &.closed {
        background: #ff7777;
      }
    }
  }
  & .expire {
    display: grid;
    align-items: center;
    flex-direction: row-reverse;
    grid-template-columns: auto auto;
    direction: initial;
    position: absolute;
    bottom: 0;
    left: 10px;
    grid-gap: 5px;
  }
  & .ant-statistic-content-value {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;
