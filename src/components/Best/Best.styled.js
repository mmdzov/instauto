import styled from "styled-components";

export const TabsContainer = styled.div`
  & .ant-tabs-nav-list {
    width: 100% !important;
    justify-content: space-between !important;
  }
  & .ant-tabs {
    margin-top: -46px;
  }
  & .ant-tabs > .ant-tabs-nav,
  .ant-tabs > div > .ant-tabs-nav {
    /* position: fixed !important;
    width: 100% !important;
    background: white !important;
    right: 0 !important; */
    z-index: 1;
  }
  & .number {
    font-size: 1rem;
    font-weight: bold;
    width: 17px;
  }
  & .ant-tabs-nav {
    position: fixed;
    right: 0;
    width: 100%;
    background: white;
  }

  & .ant-tabs-content-holder {
    padding-top: 55px;
  }

  & .ant-tabs-tab {
    margin: 0 !important;
    width: 100% !important;
    text-align: center !important;
    display: unset !important;
  }
  & .list {
    & .item {
      display: flex;
      justify-content: space-between;
      direction: ltr;
      padding: 0 10px;
      align-items: center;
      margin-bottom: 10px;
      padding-bottom: 10px;
      & .profileFlex {
        display: flex;
        align-items: center;
      }
      & .username {
        margin-left: 10px;
        font-weight: bold;
      }
      & .image {
        width: 40px;
        height: 40px;
        border-radius: 100px;
      }
      & .count {
        font-size: 0.8rem;
        font-weight: bold;
      }
    }
  }
  & .emptyList {
    height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`;
