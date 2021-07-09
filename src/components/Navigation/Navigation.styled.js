import styled from "styled-components";

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
      height: 35px;
      align-items: center;
      width: 100%;
      & div:first-of-type {
        line-height: 30px;
        height: 100%;
        font-size: 1.1rem;
        font-weight: bold;
      }
    }
  }
  & .ant-menu-vertical .ant-menu-item:not(:last-child),
  .ant-menu-vertical-left .ant-menu-item:not(:last-child),
  .ant-menu-vertical-right .ant-menu-item:not(:last-child),
  .ant-menu-inline .ant-menu-item:not(:last-child) {
    margin-bottom: 0;
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
