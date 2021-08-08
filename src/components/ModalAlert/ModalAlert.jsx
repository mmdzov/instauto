import styled from "styled-components";
import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";
import { LoadingOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import "./ModalAlert.css";
import { useEffect } from "react";

const ModalAlert = ({ open, alert = "", onCancel = () => {} }) => {
  useEffect(() => {
    if (open) {
      const content = document.querySelector(".ant-modal-content");
      const antBtn = document.querySelector(".ant-btn");
      const footer = document.querySelector(".ant-modal-footer");
      antBtn.addEventListener("click", () => onCancel());
      content.style.borderRadius = "15px";
      antBtn.style.borderRadius = "15px";
      footer.style.border = "0px solid transparent";
    }
  }, [open]);
  return (
    <Fragment>
      {open ? <Backdrop /> : null}
      <Mdl
        open={open}
        submitVisible={false}
        closeVisible={false}
        cancelText="بازگشت"
      >
        <Container>
          <LoadingOutlined />
          <div className="alert">{alert}</div>
        </Container>
      </Mdl>
    </Fragment>
  );
};
const Mdl = styled(Modal)``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & .anticon.anticon-loading.anticon-spin {
    font-size: 4rem;
    color: #2196f3;
  }
  & .alert {
    margin-top: 20px;
    font-size: 0.8rem;
  }
`;
export default ModalAlert;
