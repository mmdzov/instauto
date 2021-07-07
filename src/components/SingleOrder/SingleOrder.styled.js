import styled from "styled-components";

export const SingleOrderHeaderContainer = styled.div`
  & .row {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    margin-top: 10px;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
    & img {
      width: 40px;
      height: 40px;
      border-radius: 100px;
    }
    & .item {
      direction: rtl;
    }
  }
  .topSingleOrder {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    & .postPreview {
      width: 250px;
      max-height: 200px;
      object-fit: cover;
      object-position: top;
    }
    & > .accountAvatar {
    }
  }
`;

export const SingleOrderContentContainer = styled.div`
  direction: rtl;
  padding: 15px 15px;
  
  & .row {
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
  }

  & > .item {
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: relative; */
  }

  & .countNumber {
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 2px;
  }

  & .orderBottom {
    color: white;
    background: #ff4c4c;
    padding: 5px 15px;
    /* margin-top: 15px; */
    border-radius: 100px;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;
