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
  & .carousel {
    width: 100%;
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
    border-radius: 5px;
    margin: 0px 5px;
    cursor: pointer;
  }
  & .item.premium {
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
  & .levelNumber {
    font-size: 1.2rem;
    font-weight: bold;
  }
  & .iconReward {
    height: 30px;
    width: 30px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`;
