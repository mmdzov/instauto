import styled, { keyframes } from "styled-components";

const ItemAnimated = keyframes`
    0%{background-position:0% 2%}
    50%{background-position:100% 99%}
    100%{background-position:0% 2%}
`;

export const ForumSuggestContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  & .item.special {
    height: 50px !important;
    /* border-radius: 100px; */
    cursor: pointer;
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
  & .item {
    width: 90%;
    margin: 0 auto;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: white;
    border-radius: 5px;
    margin-bottom: 10px !important;
    cursor: pointer;
    position: relative;
    & .dashedLine {
      position: absolute;
      width: 100%;
      top: 3px;
      border-top: 2px dashed white;
      left: 0;
    }
    & .off {
      position: relative;
      & svg {
        position: absolute;
        left: -4px;
        font-size: 2.2rem;
        top: -9px;
        /* transform: rotate(33deg); */
      }
      & span {
        z-index: 2;
        color: black;
        position: relative;
        font-size: 0.7rem;
        transform: rotate(0deg);
        display: flex;
        margin-top: 2px;
        font-weight: bold;
        color: #636363;
        padding-left: 2px;
      }
      &::before {
        content: "";
        width: 14px;
        height: 20px;
        display: flex;
        position: absolute;
        background: white;
        z-index: 1;
        /* transform: rotate(32deg); */
        left: 6px;
        top: -1px;
      }
    }
    & .icon {
      height: 24px;
    }
  }
  & .itemTitle {
    font-size: 0.7rem;
    font-weight: bold;
  }
`;

export const ForumBestContainer = styled.div`
  & .item {
    position: relative;
    padding: 0 10px;
    height: 45px;
    display: flex;
    align-items: center;
    background: #3f51b5;
    margin: 0 15px;
    border-radius: 10px;
    color: white;
    font-size: 0.8rem;
    cursor: pointer;
    /* padding-top: 11px; */
    margin-bottom: 10px;
    padding-right: 15px;
    /* &::before {
      content: "";
      position: absolute;
      right: -5px;
      width: 11px;
      height: 33px;
      background: white;
      border-radius: 100px;
      top: 6px;
    }
    &::after {
      content: "";
      position: absolute;
      left: -5px;
      width: 11px;
      height: 33px;
      background: white;
      border-radius: 100px;
      top: 6px;
    }
    & .dashedLine {
      position: absolute;
      width: 41%;
      top: 12px;
      left: 0;
      border-top: 3px dotted;
    } */
  }
`;

export const ForumMoreContainer = styled.div`
  & .item {
    margin: 0 auto;
    height: 43px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    border-radius: 11px;
    padding: 0 15px;
    color: white;
    cursor: pointer;
    width: 90%;
    & .icon {
      height: 28px;
      margin-left: 5px;
    }
    & .itemTitle {
    }
  }
`;

export const ForumUserLevelContainer = styled.div`
  /* padding: 5px 10px; */
  margin: 0 10px;
  margin-top: 10px;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  box-shadow: 0px 4px 11px -10px black;
  margin-bottom: 20px;
  cursor: pointer;
  overflow: hidden;
  &.premium {
    border: unset;
    /* border-radius: 100px; */
    color: white;
    cursor: pointer;
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
    -webkit-animation: ${ItemAnimated} 50s ease infinite;
    -moz-animation: ${ItemAnimated} 50s ease infinite;
    -o-animation: ${ItemAnimated} 50s ease infinite;
    animation: ${ItemAnimated} 50s ease infinite;
    & .progressHeader {
      border-bottom: unset;
    }
  }

  & .progressHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 7px;
    border-bottom: 1px solid #eee;
    padding: 5px 10px;

    & .progressTitle {
      font-size: 1rem;
      & span {
        font-size: 0.8rem;
        letter-spacing: 1px;
      }
    }
    & .progressImg {
      width: 40px;
      height: 40px;
      border-radius: 100px;
    }
  }
  & .progressContent {
    direction: ltr;
    display: grid;
    padding: 6px 10px;
    grid-template-columns: 1fr auto;
    height: 46px;
    & .ant-progress-inner {
      direction: ltr;
    }
    & .ant-progress-outer {
      width: 100%;
      padding-left: 0;
      position: absolute;
      left: 36px;
      top: 9px;
    }
    & .ant-progress {
      direction: ltr !important;
      display: grid;
      align-items: center;
      grid-template-columns: auto;
    }
    & .ant-progress-text {
      display: none;
    }
    & .reward {
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      & img {
        width: 25px;
        height: 25px;
        margin-left: 8px;
      }
      & .gemReward {
        transform: rotate(45deg);
      }
    }
  }
`;

export const ForumTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 40px;
  align-items: center;
  font-size: 0.8rem;
  /* background: #e91e63; */
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  /* /* color: white; */
  & .forumTopTitle {
  }
  & .messageIcon {
    height: 24px;
    position: relative;
    &.newMessage::before {
      content: "";
      position: absolute;
      top: 0;
      height: 10px;
      width: 10px;
      border-radius: 100px;
      background: red;
      right: -3px;
    }
  }
`;
