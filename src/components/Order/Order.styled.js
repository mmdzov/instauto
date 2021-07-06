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
