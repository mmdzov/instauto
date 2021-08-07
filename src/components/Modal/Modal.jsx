import { Modal as Container } from "antd";
import { useEffect } from "react";

const Modal = ({
  children,
  open,
  title = "",
  okText = "تأیید",
  cancelText = "لغو",
  setOpen = () => {},
  onCancel = () => {},
  onSubmit = () => {},
  submitVisible = true,
}) => {
  const handleClose = () => {
    onCancel();
    setOpen(false);
  };
  const handleSubmit = () => {
    onSubmit();
    setOpen(false);
  };
  useEffect(() => {
    if (!submitVisible && open) {
      const submit = document.querySelectorAll(
        ".ant-btn.ant-btn-primary.ant-btn-rtl"
      );
      submit[0].style.display = "none";
    }
  }, [submitVisible, open]);
  return (
    <Container
      // title={title}
      centered
      visible={open}
      onOk={handleSubmit}
      okText={okText}
      cancelText={cancelText}
      onCancel={handleClose}
      style={{ maxWidth: 300, minWidth: 200, direction: "rtl" }}
    >
      <div className="" style={{ marginTop: "-8px", fontSize: "1rem" }}>
        {title}
      </div>
      {children}
    </Container>
  );
};

export default Modal;
