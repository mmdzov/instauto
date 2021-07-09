import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  /* font-family: sans-serif; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-radius: 100px; */
  position: fixed;
  width: 100%;
  height: 100%;
  background: #f7f6f6;
  button {
    background: none;
    border: 1px solid #cecece;
    font-size: 1rem;
    border-radius: 5px;
    padding: 5px 24px;
    color: #6b6b6b;
  }

  #spin,
  #reset {
    position: absolute;
    bottom: 25vh;
    /* right: 45vw; */
    cursor: pointer;
    font-size: 0.8rem !important;
  }

  #spin:hover {
    color: rgb(0, 180, 120);
    border-color: rgb(0, 180, 120);
  }

  #spin:focus,
  #reset:focus {
    outline: none;
  }
  .display {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }
  /* #reset {
  position: absolute;
  bottom: 20vh;
  right: 35vw;
} */
  & canvas {
    position: absolute;
    top: -30px;
  }
  #reset:hover {
    color: #1d1d1d;
    border-color: #cecece;
  }

  #readout {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  #selector {
    top: 94px;
    font-size: 32px;
    z-index: 3;
    position: fixed;
    color: #f44336;
  }

  #result {
    font-size: 25px;
    color: rgb(0, 180, 120);
  }

  input {
    font-size: 16px;
    border: none;
    border-bottom: 1px solid black;
  }
`;
