import styled from "styled-components";

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & input {
    height: 40px;
  }
  & > input {
    max-width: 300px;
    width: 90%;
    margin-bottom: 10px;
  }
  & > div:nth-child(2) {
    max-width: 300px;
    width: 90%;
    margin-bottom: 10px;
  }
  & button {
    width: 90%;
    max-width: 300px;
    height: 35px;
    margin: 10px 0px;
    border: unset;
    background: #03a9f4;
    color: white;
    font-size: 1.1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  .ant-input-affix-wrapper.ant-input-affix-wrapper-rtl.ant-input-password {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
