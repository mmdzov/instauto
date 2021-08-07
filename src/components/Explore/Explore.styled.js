import styled from "styled-components";

export const ExploreListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  padding: 0 2px;
  grid-gap: 1px;
  margin-top: 13px;
  & .item {
    & img {
      width: 100%;
      height: 125px;
      cursor: pointer;
      /* border-radius: 5px; */
    }
  }
`;
export const ExploreSearchContainer = styled.div`
  & form {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 100px;
    border: 1px solid #e6e6e6;
    overflow: hidden;
    padding: 0 5px;
    height: 35px;
    align-items: center;
    box-shadow: 0 5px 10px -5px #d8d8d8;
    font-size: 0.8rem;
    flex-direction: row-reverse;
    & input {
      width: 100%;
      border: 0;
      color: black;
      direction: rtl;
      padding: 0 5px;
    }
    & button {
      background: unset;
      border: unset;
      padding-top: 6px;
      cursor: pointer;
    }
  }
`;
