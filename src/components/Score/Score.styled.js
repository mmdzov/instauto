import styled, { keyframes } from "styled-components";
const ItemAnimated = keyframes`
    0%{background-position:0% 2%}
    50%{background-position:100% 99%}
    100%{background-position:0% 2%}
`;
export const ScoreHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .user {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;

    img {
      width: 100px;
      height: 100px;
      border-radius: 100px;
      margin: 20px 0px;
    }
    .username {
      font-size: 1rem;
      font-weight: bold;
    }
  }
  .progress {
    display: grid;
    width: 100%;
    direction: rtl;
    padding: 0 20px;
    min-height: 90px;
    & .topBox {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    & .title {
      display: flex;
      align-items: center;
      font-size: 1rem;
      & span {
        font-size: 0.8rem;
        margin-right: 5px;
        margin-top: 3px;
        font-weight: bold;
        color: #717171;
      }
    }
    & .premiumAccountLink {
      padding: 5px 10px;
      border-radius: 100px;
      font-size: 0.8rem;
      background: ${({ premium }) => (premium ? "#f44336" : "#673ab7")};
      cursor: ${({ premium }) => (premium ? "unset" : "pointer")};
      color: white;
    }
    & .ant-progress {
      direction: ltr !important;
      display: flex;
      align-items: center;
    }
    & .ant-progress-outer {
      padding-right: 10px;
    }
    & .ant-progress-text {
      margin-right: 0 !important;
      margin-left: 10px;
    }
  }
`;

export const ScoreListContainer = styled.div`
  display: flex;
  padding: 10px 0px;
  position: relative;
  margin-top: 5px;
  & .carousel {
    width: 100%;
  }
  & .scroll-container {
    height: 106px;
    display: flex;
    align-items: flex-end;
  }
  & .item {
    min-width: 80px;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    text-align: center;
    /* border-bottom: 1px solid #efefef; */
    padding-bottom: 10px;
    padding: 5px 0px;
    align-items: center;
    /* margin: 0px 5px; */
    cursor: pointer;
    position: relative;
    & > div {
      border-radius: 5px;
      width: 75px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 7px;
      padding-right: 2px;
      &.premium {
        /* border-radius: 100px; */
        cursor: pointer;
        color: white;
        background: linear-gradient(
          126deg,
          #f24646,
          #0c8498,
          #4311dd,
          #ad2bdd,
          #d01386,
          #4ea513,
          #5713a5
        );
        background-size: 1400% 1400%;
        -webkit-animation: ${ItemAnimated} 18s ease infinite;
        -moz-animation: ${ItemAnimated} 18s ease infinite;
        -o-animation: ${ItemAnimated} 18s ease infinite;
        animation: ${ItemAnimated} 18s ease infinite;
      }
    }
  }
  & .line {
    position: absolute;
    width: 100%;
    top: -11px;
    height: 3px;
    background: #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid black;
    & .lineBackground {
      background: rgb(255, 152, 0);
      width: 100%;
      position: absolute;
      height: 3px;
      left: 0;
      transition: all 0.2s ease-in-out;
    }
    & .arrowDown {
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-top: 20px solid #ff9800;
    }
  }
  & .notAwardReceived {
    background: #f44336;
    color: white;
  }
  & .awardReceived {
    background: #ececec !important;
    color: #292929 !important;
  }
  & .levelNumber {
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 4px;
  }
  & .iconReward {
    height: 30px;
    width: 30px;
    margin-right: 4px;
    & .gemReward {
      width: inherit;
      height: inherit;
      margin-left: 1px;
      margin-top: -3px;
      transform: rotate(45deg);
    }
    & .goldReward,
    .luckyReward {
      width: inherit;
      height: inherit;
    }
  }
  & .amount {
    margin-top: 5px;
    font-size: 0.7rem;
    height: 20px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`;
