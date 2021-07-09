import styled, { keyframes } from "styled-components";

const Animatedgradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`;

export const SettingTopContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 215px;
  border-bottom: 1px solid #eee;

  & img {
    width: 125px;
    height: 125px;
    border-radius: 100px;
  }
  & .username {
    margin-top: 11px;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .gradient-border {
    border-radius: 100px;
    display: flex;
    --borderWidth: 2px;
    background: #1d1f20;
    position: relative;
    border-radius: var(--borderWidth);
  }
  .gradient-border:after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(
      60deg,
      #607d8b,
      #f37055,
      #ef4e7b,
      #9c27b0,
      #2196f3,
      #607d8b,
      #07b39b,
      #6fba82
    );
    border-radius: 100px;
    z-index: -1;
    animation: ${Animatedgradient} 5s cubic-bezier(0.26, 0.02, 0.83, 0.87)
      alternate infinite;
    background-size: 300% 300%;
  }
`;

export const SettingListContainer = styled.div`
  direction: rtl;
  & > .item {
  }
  & .unit {
    margin-top: 5px;
    height: 50px;
    display: flex;
    cursor: pointer;
    align-items: center;
    /* height: 100%; */
    padding: 0 10px;
    justify-content: space-between;
    & .right {
      display: flex;
      align-items: center;
      height: 100%;
    }
    & .label {
      font-size: 0.6rem;
      background: #f44336;
      padding: 3px 8px;
      border-radius: 100px;
      color: white;
    }
    & .muted {
      font-size: 0.8rem;
      color: #565656;
      font-weight: bold;
      letter-spacing: 1px;
    }
    & .title {
      margin-right: 10px;
      font-size: 0.8rem;
    }
  }
  .icon {
    display: flex;
    margin-top: -2px;
    color: #5f5f5f;
    & svg {
      font-size: 1.2rem;
    }
  }
  & .list {
    background: #f9f9f9;
    height: 0px;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    &.active {
      transition: all 0.2s ease-in-out;
    }
  }
  #arrowLeft {
    transition: all 0.2s ease-in-out;
    height: 24px;
  }
`;
