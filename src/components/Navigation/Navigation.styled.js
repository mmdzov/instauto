import styled, { keyframes } from "styled-components";

const BlurAnimate = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.nav`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  background: white;
  align-items: center;
  box-shadow: 0 5px 9px -6px #8e8e8e;
  position: sticky;
  top: 0;
  z-index: 9;
  & .username {
    padding-left: 10px;
    cursor: pointer;
  }
  & .coinContainer {
    display: flex;
    align-items: center;
    padding-right: 10px;
    & .coinCount {
      margin-right: 5px;
      color: #565656;
      font-size: 0.8rem;
      margin-bottom: -2px;
    }
  }
  & .menuicon {
    height: 24px;
    margin-left: 5px;
    cursor: pointer;
    & > svg {
    }
  }
  & .menuHeader {
    height: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .menuHeaderTop {
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
      height: 45px;
      align-items: center;
      width: 100%;
      line-height: 10px;
      & div:first-of-type {
        line-height: 40px;
        height: 100%;
        font-size: 1.1rem;
      }
    }
  }
  & .ant-menu-vertical .ant-menu-item:not(:last-child),
  .ant-menu-vertical-left .ant-menu-item:not(:last-child),
  .ant-menu-vertical-right .ant-menu-item:not(:last-child),
  .ant-menu-inline .ant-menu-item:not(:last-child) {
    margin-bottom: 0;
  }
  & .itemContainer {
    display: flex;
    align-items: center;
    position: relative;
    & .icon {
      display: flex;
      margin-bottom: 5px;
    }
    & .itemTitle {
      margin-right: 5px;
    }
    & .itemUnread {
      position: absolute;
      left: 8px;
      width: 20px;
      height: 20px;
      background: #ff5f5f;
      border-radius: 100px;
      top: 9px;
      z-index: 2;
      cursor: pointer;
      color: white;
      font-size: 0.8rem;
      font-weight: bold;
      text-align: center;
      line-height: 23px;
    }
  }
  & .ant-menu {
    z-index: 9;
  }
  & .ant-menu-item {
    padding: 0 15px !important;
  }
  & .anticon {
    margin-right: 5px !important;
    margin-left: 4px !important;
    & svg {
      font-size: 1.3rem;
      margin-right: -4px;
    }
  }
  & .blur {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 0;
    animation: ${BlurAnimate} 1s alternate;
    transition: all 1s ease-in-out;
    top: 0;
    cursor: pointer;
    background: #00000059;
  }
  & .unread {
    position: absolute;
    right: 8px;
    width: 7px;
    height: 7px;
    background: red;
    border-radius: 100px;
    top: 14px;
    z-index: 2;
    cursor: pointer;
  }
`;
export const SimpleNavContainer = styled.div`
  display: flex;
  height: 50px;
  z-index: 1;
  width: 100%;
  justify-content: space-between;
  background: white;
  align-items: center;
  /* box-shadow: 0 5px 9px -9px #8e8e8e; */
  position: sticky;
  top: 0;
  border-bottom: 1px solid #eee;
  padding: 0 10px;
  background: #fbfbfb;
  & .icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
  }
  & .title {
    font-size: 1rem;
    color: #4e4e4e;
  }
`;
