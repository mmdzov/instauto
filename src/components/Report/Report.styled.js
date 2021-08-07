import styled from "styled-components";

export const Container = styled.div`
  & .reportTitles {
    margin-top: 20px;
    margin-bottom: 30px;
    /* background: #fbfbfb; */
    /* border: 1px solid #ccc; */
    border-radius: 3px;
    font-size: 0.8rem;
    & > div {
      height: 45px;
      align-items: center;
      display: flex;
      width: 100%;
      padding: 0 10px;
      cursor: pointer;
    }
    & > div:not(:last-of-type) {
      border-bottom: 1px solid #ccc;
    }
    & > div:hover {
      background: #f5f5f5 !important;
    }
  }
  & input {
    height: 45px;
    margin-bottom: 20px;
    border-radius: 5px;
    font-size: 0.8rem;
  }
  & textarea {
    height: 100px;
    resize: none;
    border-radius: 5px;
    padding-top: 8px;
    font-size: 0.8rem;
  }
`;
