import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import LoginForm from "../../components/Login/LoginForm";
import { setLoginUser } from "../../store/actions/userAction";

const Login = () => {
  return (
    <Container className="container">
      <div className="header">
        <img src={Logo} alt="" />
      </div>
      <LoginForm />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  background: whitesmoke;
  .header {
    position: fixed;
    top: 10px;
    & > img {
      width: 100px;
      height: 35px;
    }
  }
`;
export default Login;
