import styled, { keyframes } from "styled-components";

const ItemAnimated = keyframes`
    0%{background-position:0% 2%}
    50%{background-position:100% 99%}
    100%{background-position:0% 2%}
`;
export const StoryContainer = styled.div`
  .flickity-slider {
    height: inherit;
  }
  .item {
    width: 60px;
    padding-top: 7px;
    /* border: 10px solid transparent; */
    height: 49px;
    margin: 5px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    .active {
      border-radius: 100px;
      cursor: pointer;
      width: 49px;
      height: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background: linear-gradient(126deg, #673ab7, #3485f1, #9c27b0, #881bff);
      background-size: 1400% 1400%;
      -webkit-animation: ${ItemAnimated} 8s ease infinite;
      -moz-animation: ${ItemAnimated} 8s ease infinite;
      -o-animation: ${ItemAnimated} 8s ease infinite;
      animation: ${ItemAnimated} 8s ease infinite;
    }

    img {
      width: 45px;
      height: 45px;
      border-radius: 100px;
      /* padding: 0px 5px; */
    }
  }
`;

export const ListContainer = styled.div`
  ${({ story }) =>
    story
      ? `
      display: grid;
    grid-template-columns: repeat(5,20%);
    justify-items: center;
    `
      : ""}
  .item {
    padding: 10px 10px;
    /* align-items: center; */
    box-shadow: 0 3px 13px -5px #d6d6d6;
    margin: 0 auto;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid #eee;
  }
  & .story {
    overflow: hidden;
    margin: 0 5px;
    & img {
      width: 55px;
      height: 55px;
      border-radius: 100px;
      margin-bottom: 10px;
    }
  }
  & .avatar {
    width: 35px;
    height: 35px;
    border-radius: 100px;
    margin-top: 2px;
  }
`;

export const CommentItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 15px;
  }
  & .username {
    font-weight: bold;
    /* border-bottom: 1px solid #eee; */
    margin-bottom: 0px;
  }
  & .text {
    &.rtl {
      direction: rtl;
      text-align: right;
    }
    font-size: 0.8rem;
  }
  & .liked {
    display: flex;
    align-items: flex-end;
    & svg {
      cursor: pointer;
      font-size: 1.3rem;
    }
  }
`;

export const CommentPostContainer = styled.div`
  & .userProfile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-weight: bold;
  }
  & .mediaImg {
    width: 100% !important;
    height: auto !important;
    border-radius: 3px;
  }
  & form {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
    border: 1px solid#eee;
    & img {
      display: none;
    }
    & input {
      width: 100%;
      margin: 0 10px;
      border: 0;
      direction: rtl;
      font-size: 0.7rem;
      height: 40px;
      padding: 5px 10px;
      margin-right: 0;
      padding-right: 3px;
    }
    & button {
      background: unset;
      border: 0;
      padding-top: 10px;
      color: #5188cc;
      width: 49px;
      cursor: pointer;
    }
  }
  & .likeContainer {
    height: 38px;
    width: 40px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-bottom: -7px;
  }
`;
