import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  height: 51px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 9px -6px #8e8e8e;
  position: sticky;
  top: 0;
  & .username {
    padding-left: 10px;
  }
  & .coinContainer {
    display: flex;
    align-items: center;
    padding-right: 10px;
    & .coinCount {
      margin-right: 5px;
      color: #565656;
      font-size: 0.8rem;
      margin-bottom: 2px;
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
