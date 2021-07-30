import { Modal as Container } from "antd";

const Modal = ({
  children,
  open,
  title = "",
  setOpen = () => {},
  onCancel = () => {},
  onSubmit = () => {},
}) => {
  const handleClose = () => {
    onCancel();
    setOpen(false);
  };
  const handleSubmit = () => {
    onSubmit();
    setOpen(false);
  };
  return (
    <Container
      // title={title}
      centered
      visible={open}
      onOk={handleSubmit}
      okText="تأیید"
      cancelText="لغو"
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
