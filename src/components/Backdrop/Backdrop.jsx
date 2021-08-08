import styled from "styled-components";

const Backdrop = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  -webkit-backdrop-filter: blur(5px) !important;
  backdrop-filter: blur(2px);
  background: #f5f5f552;
  top: 0;
`;

export default Backdrop;
