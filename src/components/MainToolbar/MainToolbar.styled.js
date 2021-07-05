import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  direction: rtl;
  padding: 0 10px;
  height: 50px;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 5px;
  padding-bottom: 10px;
  & .item {
    padding: 2px 15px;
    background: #fbfbfb;
    border-radius: 5px;
    margin-left: 8px;
    border: 1px solid #ccc;
    margin-top: 5px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
