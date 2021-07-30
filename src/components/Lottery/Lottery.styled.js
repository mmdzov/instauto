import styled from "styled-components";

export const LotteryAddFormContainer = styled.div`
  &.addModalForm {
    margin-top: 25px;
    & > span:first-of-type {
      height: 40px;
      margin-bottom: 10px;
      border-radius: 5px;
    }
    & > span:last-of-type {
      height: 90px;
      & textarea {
        resize: none;
      }
    }
  }
`;
export const LotteryCreateContainer = styled.div`
  & .profileImage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 180px;
    & .selectImg {
      width: 120px;
      height: 120px;
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      ${({ hasPreviewImage }) =>
        hasPreviewImage
          ? `
      border: 1px dashed #ccc;
      `
          : `
      border: 1px solid #eee;
          `}
      border-radius: 100px;
      cursor: pointer;
      transition: 0.3s all ease-in-out;
      overflow: hidden;
      & input {
        transform: scale(4.5);
        position: absolute;
        right: 17px;
        cursor: pointer !important;
        opacity: 0;
      }
      &:hover {
        ${({ hasPreviewImage }) =>
          hasPreviewImage
            ? `
        border: 1px dashed #2196f3;
      `
            : `
      border: 1px solid #eee;
          `}
        & .icon {
          color: #2196f3;
        }
        & .addImgTitle {
          color: #2196f3;
        }
      }
      & .icon {
        transition: 0.3s all ease-in-out;
        font-size: 2rem;
        color: #777777;
      }
      & .addImgTitle {
        transition: 0.3s all ease-in-out;

        margin-top: -5px;
        font-size: 0.8rem;
        color: #777777;
      }
    }
  }
  & textarea.description {
    resize: none;
    border-radius: 5px;
    height: 77px;
  }
  & form {
    direction: rtl;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 20px;
    & > input {
      height: 40px;
      font-size: 0.8rem;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }

  & span.ant-input-affix-wrapper {
    margin: 10px 0px;
    border-radius: 5px;
    & input {
      font-size: 0.8rem;
      padding-top: 2px;
    }
  }

  & .ant-btn.ant-btn-primary {
    border-radius: 5px;
  }
  & .ltr {
    direction: ltr;
  }
  & .category {
    &:not(:first-of-type) {
      border-top: 1px solid #eee;
    }
    margin: 10px 0px;
    width: 100%;
    padding-top: 10px;
    & .msgToWinners {
      width: 100%;
      resize: none;
      border: 1px solid #eee;
      height: 75px;
      border-radius: 5px;
      padding: 5px;
      font-size: 0.8rem;
    }
    & .tagList {
      display: flex;
      margin-top: 3px;
    }
    & .tagListItem {
      padding: 0px 10px;
      border-radius: 100px;
      background: #eee;
      font-size: 0.8rem;
      font-weight: bold;
      margin: 0px 5px;
      line-height: 25px;
      height: 24px;
      border: 1px solid #ccc;
      cursor: pointer;
    }
    & .header {
      height: 40px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      & .title {
        font-size: 1rem;
        white-space: nowrap;
        margin-left: 10px;
      }
      & button {
      }
      & input {
        max-width: 70px !important;
      }
      & .icon {
        font-size: 1.5rem;
        height: 100%;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2196f3;
        cursor: pointer;
      }
    }
    & .description {
      font-size: 0.8rem;
      margin: 5px 0px;
      color: #929292;
      padding: 0 10px;
    }
    & .list {
      & .conditionMsg {
        font-size: 0.8rem;
        color: #a5a3a3;
        margin: 10px 0px;
        padding: 0 10px;
        & span {
          display: block;
          color: #2196f3;
          direction: ltr;
          text-align: right;
          font-size: 0.9rem;
          margin: 10px 0px;
          cursor: pointer;
        }
      }
      & .item {
        justify-content: space-between;
        min-height: 35px;
        align-items: center;
        font-size: 0.9rem;
        margin-bottom: 10px;
        cursor: pointer;
        display: grid;
        grid-template-columns: 1fr auto;
        padding: 0 10px;
        & input {
          max-width: 100px;
        }
      }
      & .item.subItem {
        display: flex;
        flex-direction: column;
        padding-top: 15px;
        &:not(:first-of-type) {
          border-top: 1px solid #eee;
        }
        & .subItemHeader {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        & .mediaListItem {
          display: flex;
          flex-direction: row-reverse;
          font-size: 0.7rem;
          padding: 3px 10px;
          border-radius: 100px;
          background: #fbfbfb;
          line-height: 18px;
          align-items: center;
          font-weight: bold;
          border: 1px solid #ccc;
          margin-bottom: 10px;
          width: 100%;
          justify-content: space-between;
          & .url {
            word-break: break-all;
            padding-top: 5px;
          }
          & .close {
            font-size: 1rem;
            padding-top: 3px;
            padding-left: 7px;
            color: #607d8b;
            cursor: pointer;
          }
        }
        & .addText {
          margin: 10px 0px;
          width: 100%;
          display: flex;
          height: 35px;
          flex-direction: row-reverse;
          margin-bottom: 15px;
        }
        & .addBtn {
          width: 55px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1890ff;
          color: white;
          border-radius: 5px;
          padding: 5px 10px;
          margin-left: 7px;
          cursor: pointer;
        }
      }
      & .item.enabled {
        background: #f9f9f9;
        padding: 0px 10px;
        border-radius: 5px;
        box-shadow: 2px 4px 10px -11px #404040 inset,
          -1px -4px 10px -11px #6b6b6b inset;
      }
      & .item.conditionItem {
        background: #fbfbfb;
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid #eee;
        & .rightContainer {
          display: flex;
          align-items: center;
          & .icon {
            font-size: 1.2rem;
            padding-left: 10px;
            color: #4caf50;
            height: 24px;
          }
          & .title {
            font-weight: bold;
          }
          & .caption {
            font-size: 0.8rem;
            color: #afafaf;
          }
        }
      }
      & .iconBox {
        display: grid;
        font-size: 1.3rem;
        justify-content: space-between;
        width: 60px;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        height: 27px;
        & .icon:first-of-type {
          color: #ffc107;
        }
        & .icon:last-of-type {
          color: #f72828;
        }
      }
    }
    & .tagList {
    }
  }
`;

export const LotteryModeContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  top: 0;
  & .btn {
    margin: 9px 0px;
    height: 45px;
    width: 80%;
    max-width: 300px;
    text-align: center;
    line-height: 45px;
    border-radius: 5px;
    color: white;
    font-size: 0.8rem;
    cursor: pointer;
    border: 1px solid transparent;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    border: 1px solid #607d8b;
    /* border-radius: 0; */
    box-shadow: -2px 6px 10px -3px #607d8b;
    background: #607d8b;
    &:hover {
      background: transparent !important;
      color: #607d8b !important;
      border: 1px solid #607d8b;
    }
    &.active {
      background: transparent !important;
      color: #3f51b5;
      transition: all 0.4s ease-in-out;
      border: 1px solid #3f51b5;
      &:hover {
        background: #3f51b5 !important;
        color: white !important;
      }
    }
  }
`;

export const LotteryListContainer = styled.div`
  & .header {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    height: 50px;
    align-items: center;
    padding: 0 5px;
    border-bottom: 1px solid #eee;
    color: #676767;
    /* background: #f9f9f9; */
    /* box-shadow: 0px 6px 19px -21px black inset; */
    cursor: pointer;
    & .title {
      margin-right: 10px;
      font-size: 0.8rem;
    }
    & .plus {
      font-size: 1.5rem;
      margin-top: 8px;
    }
    & .icons {
      display: flex;
      width: 60px;
      margin-left: 10px;
      justify-content: space-between;
    }
  }
  & .list {
    & .item {
      display: flex;
      padding: 11px 10px;
      direction: rtl;
      margin-bottom: 10px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      & img {
        width: 50px;
        height: 50px;
        border-radius: 100px;
      }
      & .middle {
        margin: 0 10px;
      }
      & .title {
        font-size: 1rem;
      }
      & .caption {
        font-size: 0.8rem;
        color: #797979;
        max-height: 40px;
        overflow: hidden;
      }
      & .dates {
        display: grid;
        grid-template-columns: auto auto;
        font-size: 0.7rem;
        margin: 5px 0px;
        & > div {
          display: flex;
          & span {
            margin: 0 4px;
            font-weight: bold;
          }
        }
      }
    }
  }
  & form {
    display: grid;
    justify-content: space-between;
    width: 100%;
    grid-template-columns: auto 1fr;
    grid-gap: 5px;
    direction: rtl;
    align-items: center;
    & > div:first-of-type {
      font-size: 1.2rem;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & > span:last-of-type {
      height: 40px;
    }
    & input {
      height: 40px;
    }
    & .ant-btn.ant-btn-primary.ant-btn-rtl.ant-input-search-button {
      height: 40px;
      font-size: 1.2rem;
      padding-top: 5px;
    }
  }
`;
