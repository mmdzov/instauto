import { Modal } from "antd";
const Question = ({
  open = false,
  callback = () => {},
  setOpen = () => {},
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    callback("submit");
  };

  const handleClose = () => {
    setOpen(false);
    callback("close");
  };

  return (
    <div className="">
      <Modal
        centered
        visible={open}
        onOk={handleSubmit}
        okText="بله"
        okButtonProps={{
          style: { background: "#ff4c4c", color: "white",border: 0 },
        }}
        cancelText="خیر"
        onCancel={handleClose}
        style={{ maxWidth: 300, minWidth: 200, direction: "rtl" }}
      >
        <div className="" style={{ marginTop: "-8px", fontSize: "1rem" }}>
          آیا مطمئنید؟
        </div>
      </Modal>
    </div>
  );
};

export default Question;
