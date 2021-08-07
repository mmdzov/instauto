import styled from "styled-components";

export const AuctionHeader = styled.div`
  & .icons {
    display: flex;
    min-height: 40px;
    align-items: center;
    flex-direction: row-reverse;
    padding: 10px 15px;
    & span {
      font-size: 1.2rem;
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  & .iconsContainer {
    display: flex;
    justify-content: space-between;
    direction: rtl;
  }
  & .avatar {
    width: 160px;
    margin: 0 auto;
    height: 160px;
    margin-top: 20px;
    position: relative;
    & img {
      width: inherit;
      height: inherit;
      border-radius: 59px;
    }
    & .status {
      width: 20px;
      height: 20px;
      border: 3px solid white;
      position: absolute;
      top: 5px;
      right: 5px;
      border-radius: 100px;
      &.closed {
        background: #f44336;
      }
      &.open {
        background: #2bde5a;
      }
      &.waiting {
        background: orange;
      }
    }
  }
  & .info {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    direction: rtl;
    background: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    & > div {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 9px;
      font-size: 0.8rem;
      & > span {
        font-size: 1.2rem;
      }
    }
    & > div:last-of-type {
      margin-top: 20px;
    }
  }
  & .lastOffer {
    margin-top: 20px;
    & > div {
      display: flex;
      direction: rtl;
      justify-content: space-between;
      width: 90%;
      margin: 0 auto;
      height: 40px;
      align-items: center;
    }
  }
  & .highestBid {
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    grid-gap: 5px;
    direction: ltr;
    & .lastPrice {
      direction: rtl;
    }
    & > img {
      width: 30px;
      height: 30px;
      border-radius: 10px;
    }
  }
`;

export const AuctionUsersContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 15px;
  & .userNotFound {
    text-align: center;
    direction: rtl;
    font-size: 0.8rem;
    color: #969595;
  }
  & > .user {
    display: flex;
    align-items: center;
    padding: 10px;
    /* background: #f7f7f7; */
    border: 1px solid #eee;
    margin-bottom: 10px;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 5px 10px -10px;
    & img {
      width: 45px;
      height: 45px;
      border-radius: 19px;
    }
    & .username {
      margin-left: 10px;
      font-size: 0.8rem;
      font-weight: bold;
      position: absolute;
      left: 55px;
      top: 10px;
    }
    & .dissatisfiedPeople {
      position: absolute;
      bottom: 11px;
      left: 63px;
      display: flex;
      & > div {
        width: 15px;
        height: 15px;
        border-radius: 100px;
        border: 1px solid #ccc;
        margin-right: 3px;
        &.filled {
          background: #f44336;
        }
        &.outlined {
          background: white;
        }
      }
    }
  }
  & .offer {
    position: absolute;
    right: 9px;
    bottom: 6px;
    display: flex;
    direction: rtl;
    align-items: center;
    font-size: 0.8rem;
    & > span:last-of-type {
      margin-top: 3px;
      display: flex;
      margin-right: 5px;
    }
  }
  & .lastPriceUser {
    position: absolute;
    right: 11px;
    top: 8px;
    font-size: 1.3rem;
    /* color: #9c27b0; */
    display: grid;
    direction: rtl;
    grid-template-columns: auto auto;
    grid-gap: 8px;
    & > div {
      cursor: pointer;
    }
  }
`;

export const AuctionSliderContainer = styled.div`
  & .flickity-viewport {
    margin: 25px 0px;
  }
  & img {
    height: 270px;
    border: 4px solid transparent;
    min-width: 270px;
    object-fit: cover;
    max-width: 270px;
    cursor: pointer;
  }
  & img:first-of-type {
    margin-left: 14px;
  }
  & img:last-of-type {
    margin-right: 14px;
  }
`;
