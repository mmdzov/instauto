import styled from "styled-components";

export const Container = styled.div``;
export const ContainerOrderList = styled.div`
  border-bottom: 1px solid #eee;
  padding: 10px 0px;
  direction: rtl;
  box-shadow: 0 5px 10px -10px black;

  & .title {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    margin: 0 5px;
    background: #ff9800;
    color: white;
    border-radius: 5px;
    font-size: 1.1rem;
  }
  & .item {
    margin: 0px 19px;
    padding: 0px 10px;
    border-right: 3px solid #ffa500;
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    /* border-bottom: 1px solid #eee; */
  }
`;
