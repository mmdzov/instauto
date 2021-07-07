import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  background: #f3f3f3;
  /* border-top: 1px solid #ccc; */
  width: 100%;
  /* height: 65px; */
  & > div {
    display: flex;
    width: 100%;
    justify-content: space-around;
    position: relative;
  }
  & .item {
    width: 100%;
    text-align: center;
    color: #3c3c3c;
    padding: 5px 0px;
    cursor: pointer;
    & .icon {
      & > svg {
        font-size: 2rem;
      }
    }
    & .label {
      margin-top: -5px;
      font-size: 0.8rem;
    }
    &.centered {
      position: absolute;
      top: -26px;
      width: 75px;
      height: 75px;
      color: white;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 12px solid #f3f3f3;
      padding-top: 14px;
      background: #607d8b;
      & .icon {
        width: 70px;
        height: 52px;
        margin-top: -10px;
        padding-top: 10px;
        box-shadow: 0 0 9px 1px #607d8b;
        border-radius: 100px;
        background: #607d8b;
      }
      & svg {
        font-size: 2rem !important;
      }
    }
  }
`;
