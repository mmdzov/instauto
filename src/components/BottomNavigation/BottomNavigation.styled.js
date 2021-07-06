import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  background: #f3f3f3;
  border-top: 1px solid #ccc;
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
      top: -30px;
      width: 65px;
      height: 65px;
      background: #ff4c4c;
      color: white;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* border: 1px solid #ccc; */
      padding-top: 8px;
      /* box-shadow: 0px 0px 8px 1px #ff4c4c; */
      & svg {
        font-size: 3rem !important;
      }
    }
  }
`;
